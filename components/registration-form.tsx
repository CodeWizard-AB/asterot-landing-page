"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Loader2, Upload } from "lucide-react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formSchema } from "@/lib/zod";

export function RegistrationForm() {
	const [paymentReceipt, setPaymentReceipt] = useState<File | null>(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			teamName: "",
			institution: "",
			managerName: "",
			email: "",
			phone: "",
			paymentMethod: "bkash",
		},
	});

	const {
		formState: { isSubmitting },
	} = form;

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			if (file.size > 5 * 1024 * 1024) {
				toast.error("File size too large", {
					description: "Please upload a file smaller than 5MB",
				});
				return;
			}
			setPaymentReceipt(file);
			toast.success("Payment receipt uploaded successfully!");
		}
	};

	async function onSubmit(values: z.infer<typeof formSchema>) {
		if (!paymentReceipt) {
			toast.error("Payment receipt required", {
				description: "Please upload your payment receipt",
			});
			return;
		}

		try {
			const formData = new FormData();

			// * Append form values
			Object.entries(values).forEach(([key, value]) => {
				formData.append(key, value);
			});

			// * Append file
			formData.append("paymentReceipt", paymentReceipt);

			const response = await fetch("https://getform.io/f/ajjmkkwa", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => null);
				throw new Error(errorData?.message || "Failed to submit form");
			}

			toast.success("Registration submitted successfully!", {
				description: "We'll review your registration and contact you soon.",
			});
			form.reset();
			setPaymentReceipt(null);
		} catch (error) {
			toast.error("Failed to submit registration", {
				description:
					error instanceof Error ? error.message : "Please try again later",
			});
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6"
				encType="multipart/form-data"
			>
				<div className="grid md:grid-cols-2 gap-6">
					<FormField
						control={form.control}
						name="teamName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Team Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter team name"
										{...field}
										disabled={isSubmitting}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="institution"
						render={({ field }) => (
							<FormItem>
								<FormLabel>University Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter university name"
										{...field}
										disabled={isSubmitting}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					<FormField
						control={form.control}
						name="managerName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Manager Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter manager name"
										{...field}
										disabled={isSubmitting}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="Contact email"
										{...field}
										disabled={isSubmitting}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<Input
									type="tel"
									placeholder="Contact phone number"
									{...field}
									disabled={isSubmitting}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="paymentMethod"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Payment Method</FormLabel>
							<FormControl>
								<RadioGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
									className="flex gap-4"
									disabled={isSubmitting}
								>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="bkash" id="bkash" />
										<Label htmlFor="bkash">bKash</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="nagad" id="nagad" />
										<Label htmlFor="nagad">Nagad</Label>
									</div>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="space-y-4">
					<Label>Upload Payment Receipt</Label>
					<div
						className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
						onClick={() => document.getElementById("payment-receipt")?.click()}
					>
						<Input
							type="file"
							accept="image/*,.pdf"
							className="hidden"
							id="payment-receipt"
							onChange={handleFileChange}
							disabled={isSubmitting}
						/>
						<div className="flex flex-col items-center">
							<Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
							<p className="text-sm text-muted-foreground mb-1">
								Click to upload payment receipt
							</p>
							<p className="text-xs text-muted-foreground">
								Supported formats: JPG, PNG, PDF (max 5MB)
							</p>
						</div>
					</div>
					{paymentReceipt && (
						<p className="text-sm text-muted-foreground">
							File selected: {paymentReceipt.name}
						</p>
					)}
				</div>

				<Button type="submit" className="w-full" disabled={isSubmitting}>
					{isSubmitting ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Submitting...
						</>
					) : (
						"Submit Registration"
					)}
				</Button>
			</form>
		</Form>
	);
}
