"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	AlertTriangle,
	CreditCard,
	CheckCircle2,
	Users,
	FileText,
	Upload,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import TournamentStats from "@/components/tournament-stats";

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

export function RegistrationSection() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [paymentReceipt, setPaymentReceipt] = useState<File | null>(null);
	const [registeredTeams, setRegisteredTeams] = useState(12); // Example state for registered teams
	const totalSlots = 24;
	const remainingSlots = totalSlots - registeredTeams;

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			teamName: "",
			institution: "",
			coachName: "",
			email: "",
			phone: "",
			paymentMethod: "bkash",
			transactionId: "",
			senderNumber: "",
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

		setTimeout(() => {
			toast.success("Registration submitted successfully!", {
				description: "We'll review your application and contact you soon.",
			});
			form.reset();
			setPaymentReceipt(null);
			setIsSubmitting(false);
			setRegisteredTeams((prev) => prev + 1);
		}, 1500);
	}

	return (
		<section
			id="registration"
			className="py-20 bg-background max-w-screen-xl mx-auto"
		>
			<div className="container mx-auto">
				<SectionHeading
					title="Register Your Team"
					subtitle="Join the most prestigious university football tournament in Bangladesh."
				/>

				{/* Tournament Stats */}
				<TournamentStats />

				{/* Registration Progress */}
				<Card className="mb-8">
					<CardContent className="pt-6">
						<div className="flex flex-col md:flex-row items-center justify-between gap-4">
							<div className="flex items-center gap-4">
								<div className="bg-chart-5/10 p-3 rounded-lg">
									<Users className="h-6 w-6 text-chart-5" />
								</div>
								<div>
									<h3 className="font-bold text-lg">Registration Progress</h3>
									<p className="text-muted-foreground">
										Teams registered: {registeredTeams} out of {totalSlots}
									</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<div className="bg-muted rounded-full h-4 w-48">
									<div
										className="bg-chart-5 h-full rounded-full transition-all duration-500"
										style={{
											width: `${(registeredTeams / totalSlots) * 100}%`,
										}}
									/>
								</div>
								<span className="text-sm font-medium">
									{remainingSlots} slots left
								</span>
							</div>
						</div>
					</CardContent>
				</Card>

				<div className="grid lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Users className="h-5 w-5 text-chart-5" />
									Team Registration
								</CardTitle>
								<CardDescription>
									Fill out all required information to register your university
									team
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Form {...form}>
									<form
										onSubmit={form.handleSubmit(onSubmit)}
										className="space-y-6"
									>
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
															<Input
																placeholder="Enter university name"
																{...field}
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
												name="coachName"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Coach/Manager Name</FormLabel>
														<FormControl>
															<Input
																placeholder="Enter coach/manager name"
																{...field}
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

										<div className="grid md:grid-cols-2 gap-6">
											<FormField
												control={form.control}
												name="transactionId"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Transaction ID</FormLabel>
														<FormControl>
															<Input
																placeholder="Enter transaction ID"
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>

											<FormField
												control={form.control}
												name="senderNumber"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Sender&apos;s Number</FormLabel>
														<FormControl>
															<Input
																placeholder="Enter sender's number"
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>

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
												<Label
													htmlFor="payment-receipt"
													className="cursor-pointer"
												>
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

										<Button
											type="submit"
											className="w-full"
											disabled={isSubmitting}
										>
											{isSubmitting ? "Submitting..." : "Submit Registration"}
										</Button>
									</form>
								</Form>
							</CardContent>
						</Card>
					</div>

					<div className="space-y-6">
						<Alert
							variant="default"
							className="border-chart-5/40 bg-chart-5/10"
						>
							<CheckCircle2 className="h-4 w-4 text-chart-5" />
							<AlertTitle>Registration Status</AlertTitle>
							<AlertDescription className="mt-2">
								<div className="space-y-2">
									<div className="flex justify-between items-center">
										<span>Available Slots:</span>
										<span className="font-medium">
											{remainingSlots} out of {totalSlots}
										</span>
									</div>
									<div className="flex justify-between items-center">
										<span>Teams Registered:</span>
										<span className="font-medium">{registeredTeams}</span>
									</div>
								</div>
							</AlertDescription>
						</Alert>

						<Card>
							<CardHeader>
								<div className="flex items-center gap-2">
									<CreditCard className="h-5 w-5 text-chart-5" />
									<CardTitle>Payment Information</CardTitle>
								</div>
								<CardDescription>Registration fee: ৳10,000</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="space-y-4">
									<div className="space-y-2">
										<h4 className="font-medium flex items-center gap-2">
											<img
												src="/bkash-logo.png"
												alt="bKash"
												className="h-6 w-6"
											/>
											bKash Payment
										</h4>
										<div className="text-sm grid grid-cols-2 gap-x-4 gap-y-1">
											<span className="text-muted-foreground">Number:</span>
											<span className="font-medium">01712345678</span>
											<span className="text-muted-foreground">Type:</span>
											<span>Merchant</span>
										</div>
									</div>

									<div className="space-y-2">
										<h4 className="font-medium flex items-center gap-2">
											<img
												src="/nagad-logo.png"
												alt="Nagad"
												className="h-6 w-6"
											/>
											Nagad Payment
										</h4>
										<div className="text-sm grid grid-cols-2 gap-x-4 gap-y-1">
											<span className="text-muted-foreground">Number:</span>
											<span className="font-medium">01712345678</span>
											<span className="text-muted-foreground">Type:</span>
											<span>Merchant</span>
										</div>
									</div>
								</div>

								<div className="bg-muted p-3 rounded-lg text-sm">
									<p className="font-medium mb-2">Payment Steps:</p>
									<ol className="list-decimal list-inside space-y-1 text-muted-foreground">
										<li>Open bKash/Nagad app</li>
										<li>Select &quot;Send Money&quot;</li>
										<li>Enter the number shown above</li>
										<li>Enter amount: ৳10,000</li>
										<li>Add reference: Your team name</li>
										<li>Complete payment</li>
										<li>Save screenshot/receipt</li>
									</ol>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<div className="flex items-center gap-2">
									<FileText className="h-5 w-5 text-chart-5" />
									<CardTitle>Required Documents</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm">
									<li className="flex items-center gap-2">
										<CheckCircle2 className="h-4 w-4 text-chart-5" />
										University ID cards for all players
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle2 className="h-4 w-4 text-chart-5" />
										Medical fitness certificates
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle2 className="h-4 w-4 text-chart-5" />
										NOC from university
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle2 className="h-4 w-4 text-chart-5" />
										Payment confirmation receipt
									</li>
								</ul>
							</CardContent>
						</Card>

						<Alert
							variant="destructive"
							className="bg-destructive/10 border-destructive/30"
						>
							<AlertTriangle className="h-4 w-4" />
							<AlertTitle>Important Notice</AlertTitle>
							<AlertDescription>
								Registration will be confirmed only after payment verification.
								The deadline for registration is March 15, 2025.
							</AlertDescription>
						</Alert>
					</div>
				</div>
			</div>
		</section>
	);
}
