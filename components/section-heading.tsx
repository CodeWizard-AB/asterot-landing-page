import { cn } from "@/lib/utils";

interface SectionHeadingProps {
	title: string;
	subtitle?: string;
	align?: "left" | "center" | "right";
	className?: string;
}

export function SectionHeading({
	title,
	subtitle,
	align = "center",
	className,
}: SectionHeadingProps) {
	return (
		<div
			className={cn(
				"space-y-4 mb-10",
				{
					"text-left": align === "left",
					"text-center": align === "center",
					"text-right": align === "right",
				},
				className
			)}
		>
			<h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
			{subtitle && (
				<p className="text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
			)}
		</div>
	);
}
