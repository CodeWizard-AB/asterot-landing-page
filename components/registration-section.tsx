"use client";

import { SectionHeading } from "@/components/section-heading";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Users } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import TournamentStats from "@/components/tournament-stats";
import RegistrationTimeline from "@/components/registration-timeline";
import { RegistrationForm } from "@/components/registration-form";
import { PaymentInfo } from "@/components/payment-info";

export function RegistrationSection() {
	return (
		<section
			id="registration"
			className="py-20 px-6 md:px-6 2xl:px-0 bg-background max-w-screen-xl mx-auto"
		>
			<div className="container mx-auto">
				<SectionHeading
					title="Register Your Team"
					subtitle="Join the most prestigious university football tournament in Bangladesh."
				/>

				{/* Tournament Stats */}
				<TournamentStats />

				{/* Registration Timeline */}
				<RegistrationTimeline />

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
								<RegistrationForm />
							</CardContent>
						</Card>
					</div>

					<div className="space-y-6">
						<PaymentInfo />

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
