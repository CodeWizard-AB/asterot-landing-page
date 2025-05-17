"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Upload } from "lucide-react";
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

const formSchema = z.object({
	teamName: z
		.string()
		.min(3, { message: "Team name must be at least 3 characters." }),
	institution: z.string().min(3, { message: "Institution name is required." }),
	coachName: z.string().min(3, { message: "Coach/Manager name is required." }),
	email: z.string().email({ message: "Please enter a valid email address." }),
	phone: z.string().min(11, { message: "Please enter a valid phone number." }),
	paymentMethod: z.enum(["bkash", "nagad"], {
		required_error: "Please select a payment method.",
	}),
	transactionId: z.string().min(6, { message: "Transaction ID is required." }),
	senderNumber: z.string().min(11, { message: "Sender's number is required." }),
});

export function RegistrationForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [paymentReceipt, setPaymentReceipt] = useState<File | null>(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			teamName: "",
			institution: "",
			coachName: "",
			email: "",
			phone: "",
			paymentMethod: "bkash",
		},
	});

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

	function onSubmit(values: z.infer<typeof formSchema>) {
		if (!paymentReceipt) {
			toast.error("Payment receipt required", {
				description: "Please upload your payment receipt",
			});
			return;
		}

		setIsSubmitting(true);

		// Log the form values for debugging
		console.log("Form values:", values);

		setTimeout(() => {
			toast.success("Registration submitted successfully!", {
				description: "We'll review your application and contact you soon.",
			});
			form.reset();
			setPaymentReceipt(null);
			setIsSubmitting(false);
		}, 1500);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<div className="grid md:grid-cols-2 gap-6">
					<FormField
						control={form.control}
						name="teamName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Team Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter team name" {...field} />
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
									<Input placeholder="Enter university name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					<FormField
						control={form.control}
						name="coachName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Coach/Manager Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter coach/manager name" {...field} />
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
									<Input type="email" placeholder="Contact email" {...field} />
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
					<div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors">
						<Input
							type="file"
							accept="image/*,.pdf"
							className="hidden"
							id="payment-receipt"
							onChange={handleFileChange}
						/>
						<Label htmlFor="payment-receipt" className="cursor-pointer">
							<Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
							<p className="text-sm text-muted-foreground mb-1">
								Click to upload payment receipt
							</p>
							<p className="text-xs text-muted-foreground">
								Supported formats: JPG, PNG, PDF (max 5MB)
							</p>
						</Label>
					</div>
					{paymentReceipt && (
						<p className="text-sm text-muted-foreground">
							File selected: {paymentReceipt.name}
						</p>
					)}
				</div>

				<Button type="submit" className="w-full" disabled={isSubmitting}>
					{isSubmitting ? "Submitting..." : "Submit Registration"}
				</Button>
			</form>
		</Form>
	);
}
