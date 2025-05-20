import { teamMembers } from "@/lib/content";
import Image from "next/image";
import { SectionHeading } from "./section-heading";

export default function TeamSection() {
	return (
		<section
			id="team"
			className="flex flex-col items-center justify-center mb-20 2xl:mb-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/5"
		>
			<SectionHeading
				title="Meet our team"
				subtitle="Get to know the passionate minds driving Bangladesh's top university football tournament."
			/>

			<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
				{teamMembers.map((member) => (
					<div
						key={member.name}
						className="group relative bg-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-card/80"
					>
						<div className="relative w-40 h-40 mx-auto mb-4">
							<Image
								src={member.imageUrl}
								alt={member.name}
								className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								priority
							/>
							<div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</div>

						<div className="text-center space-y-2">
							<h3 className="text-xl font-bold tracking-tight">
								{member.name}
							</h3>
							<p className="text-primary font-medium">{member.title}</p>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{member.bio}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
