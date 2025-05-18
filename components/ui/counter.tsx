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

	const padNumber = (num: number) => {
		return num.toString().padStart(2, "0");
	};

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
			className={`flex items-center justify-center gap-2 md:gap-4 w-full ${
				className || ""
			}`}
		>
			<div className="flex flex-col items-center">
				<div className="text-lg md:text-xl lg:text-2xl font-bold bg-primary/10 dark:bg-primary/20 backdrop-blur-sm rounded-lg w-12 md:w-16 h-12 md:h-16 flex items-center justify-center shadow-lg border border-white/10">
					{padNumber(timeLeft.days)}
				</div>
				<span className="text-xs mt-1 text-muted-foreground">Days</span>
			</div>
			<div className="flex flex-col items-center">
				<div className="text-lg md:text-xl lg:text-2xl font-bold bg-primary/10 dark:bg-primary/20 backdrop-blur-sm rounded-lg w-12 md:w-16 h-12 md:h-16 flex items-center justify-center shadow-lg border border-white/10">
					{padNumber(timeLeft.hours)}
				</div>
				<span className="text-xs mt-1 text-muted-foreground">Hours</span>
			</div>
			<div className="flex flex-col items-center">
				<div className="text-lg md:text-xl lg:text-2xl font-bold bg-primary/10 dark:bg-primary/20 backdrop-blur-sm rounded-lg w-12 md:w-16 h-12 md:h-16 flex items-center justify-center shadow-lg border border-white/10">
					{padNumber(timeLeft.minutes)}
				</div>
				<span className="text-xs mt-1 text-muted-foreground">Minutes</span>
			</div>
			<div className="flex flex-col items-center">
				<div className="text-lg md:text-xl lg:text-2xl font-bold bg-primary/10 dark:bg-primary/20 backdrop-blur-sm rounded-lg w-12 md:w-16 h-12 md:h-16 flex items-center justify-center shadow-lg border border-white/10">
					{padNumber(timeLeft.seconds)}
				</div>
				<span className="text-xs mt-1 text-muted-foreground">Seconds</span>
			</div>
		</div>
	);
}
