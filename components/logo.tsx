import Image from "next/image";
import AsterotLogo from "@/assets/asterot-logo.jpg";

export default function Logo() {
	return (
		<figure className="flex items-center gap-2">
			<Image
				src={AsterotLogo}
				alt="Asterot Logo"
				className="w-10 rounded-full border"
			/>
			<figcaption className="text-sm">Asterot</figcaption>
		</figure>
	);
}
