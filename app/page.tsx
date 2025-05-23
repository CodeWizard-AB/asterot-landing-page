import TeamSection from "@/components/team-section";
import { HeroHeader } from "../components/header";
import HeroSection from "../components/hero-section";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact-section";
import TestimonialSection from "@/components/testimonial-section";
import { RegistrationSection } from "@/components/registration-section";
import { TournamentSection } from "@/components/tournament-section";
import { Toaster } from "sonner";
import BenefitSection from "@/components/benefits-section";

export default function Home() {
	return (
		<>
			<HeroHeader />
			<main className="overflow-hidden">
				<HeroSection />
				<TournamentSection />
				<RegistrationSection />
				<BenefitSection />
				<TestimonialSection />
				<TeamSection />
				<ContactSection />
			</main>
			<Toaster richColors theme="dark" />
			<FooterSection />
		</>
	);
}
