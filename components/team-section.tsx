import { teamMembers } from "@/lib/content";
import Image from "next/image";
import { SectionHeading } from "./section-heading";

export default function TeamSection() {
	return (
		<section
			id="#team"
			className="flex flex-col items-center justify-center mb-20 2xl:mb-40 px-4 sm:px-6 lg:px-8"
		>
			<SectionHeading
				title="Meet our team"
				subtitle="Get to know the passionate minds driving Bangladesh's top university football tournament."
			/>

			<div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 max-w-screen-xl mx-auto">
				{teamMembers.map((member) => (
					<div key={member.name} className="text-center">
						<Image
							src={member.imageUrl}
							alt={member.name}
							className="w-32 h-32 rounded-full object-cover mx-auto bg-secondary"
							width={120}
							height={120}
						/>
						<h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
						<p className="text-muted-foreground">{member.title}</p>
						<p className="mt-3">{member?.bio}</p>
					</div>
				))}
			</div>
		</section>
	);
}
