import Logo from "@/components/logo";
import { menuItems } from "@/lib/content";
import Link from "next/link";

export default function FooterSection() {
	return (
		<footer className="py-16">
			<div className="mx-auto max-w-5xl px-6">
				<Link href="/" aria-label="go home" className="mx-auto block size-fit">
					<Logo />
				</Link>

				<div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
					{menuItems.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className="text-muted-foreground hover:text-primary block duration-150"
						>
							<span>{link.name}</span>
						</Link>
					))}
				</div>
				<span className="text-muted-foreground block text-center text-sm">
					{" "}
					© {new Date().getFullYear()} Asterot, All rights reserved
				</span>
			</div>
		</footer>
	);
}
