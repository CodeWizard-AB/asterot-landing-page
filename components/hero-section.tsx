import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Trophy, Medal, Target, Users } from "lucide-react";
import orionLogo from "@/assets/Orion-logo.png";
import ksrmLogo from "@/assets/ksrm-logo.jpg";
import MuxPlayer from "@mux/mux-player-react";

const transitionVariants = {
	item: {
		hidden: {
			opacity: 0,
			filter: "blur(12px)",
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				type: "spring",
				bounce: 0.3,
				duration: 1.5,
			},
		},
	},
};

const PRIZE_INFO = [
	{
		icon: Trophy,
		label: "Champions",
		value: "৳ 2,00,000",
	},
	{
		icon: Medal,
		label: "Runners-up",
		value: "৳ 1,00,000",
	},
	{
		icon: Target,
		label: "Semi-finalists",
		value: "৳ 25,000 each",
	},
	{
		icon: Users,
		label: "Teams",
		value: "16 Universities",
	},
];

export default function HeroSection() {
	const targetDate = new Date();
	targetDate.setDate(targetDate.getDate() + 7);

	return (
		<section className="overflow-hidden">
			<div
				aria-hidden
				className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
			>
				{/* Left side lighting effects */}
				<div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,95%,.1)_0,hsla(0,0%,75%,.05)_50%,hsla(0,0%,45%,0)_80%)] animate-pulse-slow transition-all duration-1000" />
				<div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,95%,.08)_0,hsla(0,0%,65%,.03)_80%,transparent_100%)] [translate:5%_-50%] animate-pulse-slower transition-all duration-1000" />
				<div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,95%,.06)_0,hsla(0,0%,65%,.02)_80%,transparent_100%)] animate-pulse-slowest transition-all duration-1000" />

				{/* Right side lighting effects */}
				<div className="w-140 h-320 -translate-y-87.5 absolute right-0 top-0 rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,95%,.1)_0,hsla(0,0%,75%,.05)_50%,hsla(0,0%,45%,0)_80%)] animate-pulse-slow transition-all duration-1000" />
				<div className="h-320 absolute right-0 top-0 w-60 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,95%,.08)_0,hsla(0,0%,65%,.03)_80%,transparent_100%)] [translate:-5%_-50%] animate-pulse-slower transition-all duration-1000" />
				<div className="h-320 -translate-y-87.5 absolute right-0 top-0 w-60 rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,95%,.06)_0,hsla(0,0%,65%,.02)_80%,transparent_100%)] animate-pulse-slowest transition-all duration-1000" />
			</div>
			<div>
				<div className="relative pt-24 md:pt-36">
					<div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
					<div className="mx-auto max-w-screen-xl px-6">
						<div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
							<AnimatedGroup variants={transitionVariants}>
								<div className="flex items-center justify-center mb-6">
									<div className="px-4 py-1.5 rounded-full bg-primary/15 border border-primary/40 text-primary text-sm font-medium uppercase tracking-wider">
										23 May 2025 - Dhaka, Bangladesh
									</div>
								</div>
							</AnimatedGroup>

							<TextEffect
								preset="fade-in-blur"
								speedSegment={0.3}
								as="h1"
								className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-tight font-heading mt-8 text-balance xl:text-[5.25rem]"
							>
								The Rising Generation Football Tournament 2025
							</TextEffect>

							<AnimatedGroup variants={transitionVariants}>
								<p className="text-xl md:text-2xl mb-12 mt-8 max-w-3xl mx-auto text-gray-300 font-light">
									16 elite university teams. One prestigious championship.
									<span className="block mt-2 text-chart-5">
										Total prize pool: ৳ 3,50,000
									</span>
								</p>
							</AnimatedGroup>

							<AnimatedGroup variants={transitionVariants} className="mt-10">
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
									{PRIZE_INFO.map((prize) => (
										<div
											key={prize.label}
											className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-chart-5/50 transition-all duration-300 group"
										>
											<div className="flex flex-col items-center gap-2">
												<prize.icon className="h-8 w-8 text-chart-5 group-hover:scale-110 transition-transform duration-300" />
												<p className="text-sm text-gray-400">{prize.label}</p>
												<p className="text-xl font-bold">{prize.value}</p>
											</div>
										</div>
									))}
								</div>
							</AnimatedGroup>

							<AnimatedGroup
								variants={{
									container: {
										visible: {
											transition: {
												staggerChildren: 0.05,
												delayChildren: 0.75,
											},
										},
									},
									...transitionVariants,
								}}
								className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row"
							>
								<Button asChild size="lg" className="text-base" key={1}>
									<Link href="#registration">
										<span className="text-nowrap">Register Today</span>
									</Link>
								</Button>

								<Button key={2} asChild size="lg" variant="outline">
									<Link
										href="https://ik.imagekit.io/xp2qigjdg/Code%20Of%20Conduct.pdf?updatedAt=1747714598746"
										target="_blank"
									>
										<span className="text-nowrap">
											View Rules and Regulation
										</span>
									</Link>
								</Button>
							</AnimatedGroup>
						</div>
					</div>

					<div className="max-w-screen-lg mx-auto mt-12 rounded-2xl overflow-hidden px-6 lg:px-0">
						<MuxPlayer
							playbackId="dvy6XKSsfk3pJ7uic3SPrFeXbRdFpmi1OCmdtt4RF78"
							metadata={{
								video_id: "jl8EDa2Q3SRuisigqik2DJk1DQ8JDeOU996Yv9DQomI",
								video_title: "Asterot Football Tournament 2025",
							}}
							autoPlay={true}
						/>
					</div>
				</div>
			</div>

			<div className="bg-background relative z-10 pt-10 lg:pt-16">
				<div className="m-auto max-w-5xl px-6">
					<h2 className="text-center text-lg font-medium">
						Your favorite companies are our sponsors.
					</h2>
					<div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-2 gap-y-8 sm:gap-x-4 sm:gap-y-12">
						<div className="relative h-32 w-64">
							<Image
								src={ksrmLogo}
								alt="KSRM Logo"
								fill
								className="object-contain"
							/>
						</div>
						<div className="relative h-32 w-64">
							<Image
								src={orionLogo}
								alt="Orion Logo"
								fill
								className="object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
