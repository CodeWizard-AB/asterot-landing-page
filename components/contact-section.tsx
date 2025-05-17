import { MailIcon, MapPinIcon, PhoneIcon, MessageCircle } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "./section-heading";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { contactItems } from "@/lib/content";

const iconMap = {
	MailIcon,
	MessageCircle,
	MapPinIcon,
	PhoneIcon,
};

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="mb-20 flex items-center justify-center px-6"
		>
			<div className="max-w-screen-xl w-full">
				<SectionHeading
					title="Contact Us"
					subtitle="Our friendly and responsive team is always here to help you out—feel free to reach out anytime."
				/>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{contactItems.map((item, index) => {
						const Icon = iconMap[item.icon as keyof typeof iconMap];
						return (
							<Card
								key={index}
								className="relative overflow-hidden hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border-white/10 hover:shadow-lg hover:shadow-primary/5"
							>
								<div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full bg-primary/10"></div>
								<CardHeader>
									<div className="flex items-center gap-2 mb-2">
										<div className="h-10 w-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
											<Icon className="h-5 w-5" />
										</div>
										<CardTitle>{item.title}</CardTitle>
									</div>
									<CardDescription>{item.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<Link
										className="font-medium hover:text-primary transition-colors"
										href={item.link.href}
										target={item.link.target}
									>
										{item.link.text}
									</Link>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
