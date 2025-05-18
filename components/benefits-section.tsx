import {
	Handshake,
	HeartHandshake,
	Medal,
	ShieldCheck,
	Trophy,
	Users,
} from "lucide-react";
import React from "react";
import { SectionHeading } from "@/components/section-heading";

const benefits = [
	{
		icon: Medal,
		title: "Professional-Level Exposure",
		description:
			"Play in a competitive environment with high visibility to scouts and sports communities.",
	},
	{
		icon: Trophy,
		title: "Trophies & Prize Money",
		description:
			"Exciting rewards for winners, including trophies, medals, and generous prize money.",
	},
	{
		icon: Users,
		title: "Player Recognition",
		description:
			"Standout players get highlighted through shoutouts, awards, and media coverage.",
	},
	{
		icon: Handshake,
		title: "Networking Opportunities",
		description:
			"Meet players, coaches, and organizers—build meaningful sports connections.",
	},
	{
		icon: HeartHandshake,
		title: "Volunteer Support",
		description:
			"A dedicated team of volunteers to assist teams, manage logistics, and ensure smooth execution.",
	},
	{
		icon: ShieldCheck,
		title: "Safe & Supportive Environment",
		description:
			"Enjoy a secure, friendly atmosphere with water, snacks, and first-aid support available at every match.",
	},
];

export default function BenefitSection() {
	return (
		<div className="mb-20 xl:mb-40 flex items-center justify-center px-6 2xl:px-0">
			<div className="container max-w-screen-xl mx-auto">
				<SectionHeading
					title="Beyond the Game"
					subtitle="More than matches—enjoy exclusive benefits that elevate your tournament experience."
				/>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
					{benefits.map((benefit) => (
						<div
							key={benefit.title}
							className="group flex flex-col border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
						>
							<div className="mb-4 h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20 shadow-sm ring-1 ring-border">
								<benefit.icon className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2 text-foreground">
								{benefit.title}
							</h3>
							<p className="text-muted-foreground text-[15px] leading-relaxed">
								{benefit.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
