import TeamSection from "@/components/team-section";
import { HeroHeader } from "../components/header";
import HeroSection from "../components/hero-section";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact-section";
import TestimonialSection from "@/components/testimonial-section";
import { RegistrationSection } from "@/components/registration-section";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<HeroHeader />
			<HeroSection />
			<RegistrationSection />
			<TestimonialSection />
			<TeamSection />
			<ContactSection />
			<FooterSection />
		</main>
	);
}
