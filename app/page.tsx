import TeamSection from "@/components/team-section";
import { HeroHeader } from "../components/header";
import HeroSection from "../components/hero-section";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact-section";
import TestimonialSection from "@/components/testimonial-section";

export default function Home() {
	return (
		<>
			<HeroHeader />
			<HeroSection />
			<TestimonialSection />
			<TeamSection />
			<ContactSection />
			<FooterSection />
		</>
	);
}
