import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/content";
import { Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function TestimonialSection() {
	return (
		<section
			id="#testimonials"
			className="min-h-screen flex justify-center items-center py-12 px-6"
		>
			<div>
				<div className="text-center max-w-xl mx-auto mb-16">
					<h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
						What They’re Saying
					</h2>
					<p className="mt-4 text-base sm:text-lg">
						Real voices from the players, coaches, and partners who’ve
						experienced the energy, passion, and professionalism behind our
						tournaments.
					</p>
				</div>
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
									<Link href="#" target="_blank">
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
