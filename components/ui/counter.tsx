"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
	targetDate: Date;
	className?: string; // Added className prop
}

export function Countdown({ targetDate, className }: CountdownProps) {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const calculateTimeLeft = () => {
			const difference = +new Date(targetDate) - +new Date();
			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60),
				});
			}
		};

		calculateTimeLeft();
		const timer = setInterval(calculateTimeLeft, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	return (
		<div
			className={`flex items-center justify-center gap-4 md:gap-6 w-full ${
				className || ""
			}`}
		>
			<div className="flex flex-col items-center">
				<div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-primary/10 dark:bg-primary/20 backdrop-blur-sm rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center shadow-lg border border-white/10">
					{timeLeft.days}
				</div>
				<span className="text-sm mt-2 text-muted-foreground">Days</span>
			</div>
			<div className="flex flex-col items-center">
				<div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-primary/10 dark:bg-primary/20 backdrop-blur-sm rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center shadow-lg border border-white/10">
					{timeLeft.hours}
				</div>
				<span className="text-sm mt-2 text-muted-foreground">Hours</span>
			</div>
			<div className="flex flex-col items-center">
				<div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-primary/10 dark:bg-primary/20 backdrop-blur-sm rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center shadow-lg border border-white/10">
					{timeLeft.minutes}
				</div>
				<span className="text-sm mt-2 text-muted-foreground">Minutes</span>
			</div>
			<div className="flex flex-col items-center">
				<div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-primary/10 dark:bg-primary/20 backdrop-blur-sm rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center shadow-lg border border-white/10">
					{timeLeft.seconds}
				</div>
				<span className="text-sm mt-2 text-muted-foreground">Seconds</span>
			</div>
		</div>
	);
}
