import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Countdown } from "./ui/counter";

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

export default function HeroSection() {
	const targetDate = new Date();
	targetDate.setDate(targetDate.getDate() + 7);

	return (
		<section className="overflow-hidden">
			<div
				aria-hidden
				className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
			>
				<div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
				<div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
				<div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
			</div>
			<div>
				<div className="relative pt-24 md:pt-36">
					<AnimatedGroup
						variants={{
							container: {
								visible: {
									transition: {
										delayChildren: 1,
									},
								},
							},
							item: {
								hidden: {
									opacity: 0,
									y: 20,
								},
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										type: "spring",
										bounce: 0.3,
										duration: 2,
									},
								},
							},
						}}
						className="absolute inset-0 -z-20"
					>
						<Image
							src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
							alt="background"
							className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
							width="3276"
							height="4095"
						/>
					</AnimatedGroup>
					<div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
					<div className="mx-auto max-w-7xl px-6">
						<div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
							<AnimatedGroup variants={transitionVariants}>
								<div className="flex items-center justify-center mb-6">
									<div className="px-4 py-1.5 rounded-full bg-primary/15 border border-primary/40 text-primary text-sm font-medium uppercase tracking-wider">
										22 May 2025 - Dhaka, Bangladesh
									</div>
								</div>
							</AnimatedGroup>

							<TextEffect
								preset="fade-in-blur"
								speedSegment={0.3}
								as="h1"
								className="mt-8 text-balance text-6xl md:text-7xl xl:text-[5.25rem]"
							>
								The Rising Generatoin Football Cup 2025
							</TextEffect>

							<AnimatedGroup variants={transitionVariants}>
								<div
									className="animate-fade-in"
									style={{ animationDelay: "0.8s" }}
								>
									<div className="prize-card px-8 py-6 rounded-2xl inline-block">
										<p className="text-xl font-semibold text-white mb-6 flex items-center justify-center gap-2">
											{/* <Trophy className="h-6 w-6 text-chart-5" /> */}
											{/* <span>Prize Pool</span> */}
										</p>
										<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base">
											<div className="space-y-2 p-4 rounded-lg bg-white/5">
												<p className="font-bold text-2xl text-chart-5">
													৳100,000
												</p>
												<p className="text-white/60">Champion</p>
											</div>
											<div className="space-y-2 p-4 rounded-lg bg-white/5">
												<p className="font-bold text-2xl text-chart-5">
													৳50,000
												</p>
												<p className="text-white/60">Runner-up</p>
											</div>
											<div className="space-y-2 p-4 rounded-lg bg-white/5">
												<p className="font-bold text-2xl text-chart-5">
													৳15,000
												</p>
												<p className="text-white/60">Semi-finalist</p>
											</div>
											<div className="space-y-2 p-4 rounded-lg bg-white/5">
												<p className="font-bold text-2xl text-chart-5">
													৳15,000
												</p>
												<p className="text-white/60">Semi-finalist</p>
											</div>
										</div>
									</div>
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
								className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
							>
								<Button asChild size="lg" className="text-base" key={1}>
									<Link href="#link">
										<span className="text-nowrap">Register Today</span>
									</Link>
								</Button>

								<Button key={2} asChild size="lg" variant="outline">
									<Link href="#link">
										<span className="text-nowrap">
											View Rules and Regulation
										</span>
									</Link>
								</Button>
							</AnimatedGroup>
						</div>
					</div>

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
					>
						<div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20 pb-20">
							<div
								aria-hidden
								className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
							/>
							<div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-lg shadow-zinc-950/15 ring-1">
								<iframe
									src="https://drive.google.com/file/d/1vVTtG3OuPr9yJU6FkiP0blk0dARMDS4R/preview"
									width="100%"
									height="100%"
									allow="autoplay"
									allowFullScreen
									// className="w-full h-full border-none rounded-md"
								></iframe>
							</div>
						</div>
					</AnimatedGroup>
				</div>
			</div>

			{/* <div className="bg-background relative z-10 py-16">
				<div className="m-auto max-w-5xl px-6">
					<h2 className="text-center text-lg font-medium">
						Your favorite companies are our partners.
					</h2>
					<div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
						<img
							className="h-5 w-fit dark:invert"
							src="https://html.tailus.io/blocks/customers/nvidia.svg"
							alt="Nvidia Logo"
							height="20"
							width="auto"
						/>
						<img
							className="h-4 w-fit dark:invert"
							src="https://html.tailus.io/blocks/customers/column.svg"
							alt="Column Logo"
							height="16"
							width="auto"
						/>
						<img
							className="h-4 w-fit dark:invert"
							src="https://html.tailus.io/blocks/customers/github.svg"
							alt="GitHub Logo"
							height="16"
							width="auto"
						/>
						<img
							className="h-5 w-fit dark:invert"
							src="https://html.tailus.io/blocks/customers/nike.svg"
							alt="Nike Logo"
							height="20"
							width="auto"
						/>
						<img
							className="h-4 w-fit dark:invert"
							src="https://html.tailus.io/blocks/customers/laravel.svg"
							alt="Laravel Logo"
							height="16"
							width="auto"
						/>
						<img
							className="h-7 w-fit dark:invert"
							src="https://html.tailus.io/blocks/customers/lilly.svg"
							alt="Lilly Logo"
							height="28"
							width="auto"
						/>
						<img
							className="h-5 w-fit dark:invert"
							src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
							alt="Lemon Squeezy Logo"
							height="20"
							width="auto"
						/>
						<img
							className="h-6 w-fit dark:invert"
							src="https://html.tailus.io/blocks/customers/openai.svg"
							alt="OpenAI Logo"
							height="24"
							width="auto"
						/>
						<img
							className="h-4 w-fit dark:invert"
							src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
							alt="Tailwind CSS Logo"
							height="16"
							width="auto"
						/>
						<img
							className="h-5 w-fit dark:invert"
							src="https://html.tailus.io/blocks/customers/vercel.svg"
							alt="Vercel Logo"
							height="20"
							width="auto"
						/>
						<img
							className="h-5 w-fit dark:invert"
							src="https://html.tailus.io/blocks/customers/zapier.svg"
							alt="Zapier Logo"
							height="20"
							width="auto"
						/>
					</div>
				</div>
			</div> */}
		</section>
	);
}
