import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "./section-heading";

export default function ContactSection() {
	return (
		<section
			id="#contact"
			className="mb-20 lg:mb-28 flex items-center justify-center"
		>
			<div className="text-center">
				<SectionHeading
					title="Contact Us"
					subtitle="Our friendly team is always here to chat."
				/>
				<div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
					<div className="text-center flex flex-col items-center">
						<div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
							<MailIcon />
						</div>
						<h3 className="mt-6 font-semibold text-xl">Email</h3>
						<p className="mt-2 text-muted-foreground">
							Our friendly team is here to help.
						</p>
						<Link
							className="mt-4 font-medium text-primary"
							href="mailto:akashmoradiya3444@gmail.com"
						>
							asterotbd@gmail.com
						</Link>
					</div>
					<div className="text-center flex flex-col items-center">
						<div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
							<MapPinIcon />
						</div>
						<h3 className="mt-6 font-semibold text-xl">Office</h3>
						<p className="mt-2 text-muted-foreground">
							Come say hello at our office HQ.
						</p>
						<Link
							className="mt-4 font-medium text-primary"
							href="https://map.google.com"
							target="_blank"
						>
							100 Smith Street Collingwood <br /> VIC 3066 AU
						</Link>
					</div>
					<div className="text-center flex flex-col items-center">
						<div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
							<PhoneIcon />
						</div>
						<h3 className="mt-6 font-semibold text-xl">Phone</h3>
						<p className="mt-2 text-muted-foreground">
							Mon-Fri from 8am to 5pm.
						</p>
						<Link
							className="mt-4 font-medium text-primary"
							href="tel:akashmoradiya3444@gmail.com"
						>
							+1 (555) 000-0000
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
