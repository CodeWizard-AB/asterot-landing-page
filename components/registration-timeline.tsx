import { Timer } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Countdown } from "./ui/counter";

export default function RegistrationTimeline() {
	const targetDate = new Date("2025-05-22T22:00:00");

	return (
		<Card className="mb-8">
			<CardContent>
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<div className="bg-chart-5/10 p-3 rounded-lg">
							<Timer className="h-6 w-6 text-chart-5" />
						</div>
						<div>
							<h3 className="font-bold text-lg">Registration Timeline</h3>
							<p className="text-muted-foreground">
								The deadline for registration is 22 May, 2025, till 10:00 PM
							</p>
						</div>
					</div>
					<Countdown targetDate={targetDate} className="text-white w-max" />
				</div>
			</CardContent>
		</Card>
	);
}
