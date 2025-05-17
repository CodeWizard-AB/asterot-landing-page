import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/content";
import { Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SectionHeading } from "./section-heading";

export default function TestimonialSection() {
	return (
		<section
			id="#testimonials"
			className="mb-20 xl:mb-40 flex justify-center items-center px-6"
		>
			<div>
				<SectionHeading
					title="Testimonials"
					subtitle="Hear what teams and fans say about their unforgettable experiences at our tournament."
				/>
				<div className="max-w-screen-xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="mb-8 border bg-accent rounded-xl p-6 break-inside-avoid"
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<Avatar>
										<AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
											{testimonial.name.charAt(0)}
										</AvatarFallback>
									</Avatar>
									<div>
										<p className="text-lg font-semibold">{testimonial.name}</p>
										<p className="text-sm text-gray-500">
											{testimonial.designation}
										</p>
									</div>
								</div>
								<Button variant="ghost" size="icon" asChild>
									<Link
										href="https://www.facebook.com/profile.php?id=61573693107328&sk=reviews"
										target="_blank"
									>
										<Facebook className="w-20" />
									</Link>
								</Button>
							</div>
							<p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
