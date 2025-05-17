import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Target } from "lucide-react";

const TOURNAMENT_STATS = [
	{ icon: Trophy, label: "Total Prize Pool", value: "৳  3,50,000" },
	{ icon: Medal, label: "Champions Prize", value: "৳  2,00,000" },
	{ icon: Medal, label: "Runners-up Prize", value: "৳  1,00,000" },
	{ icon: Target, label: "Semi-finalists", value: "৳  25,000 each" },
];

export default function TournamentStats() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
			{TOURNAMENT_STATS.map((stat, index) => (
				<Card key={index} className="border-chart-5/30">
					<CardContent>
						<div className="flex items-center gap-4">
							<div className="bg-chart-5/10 p-3 rounded-lg">
								<stat.icon className="h-6 w-6 text-chart-5" />
							</div>
							<div>
								<p className="text-sm text-left text-muted-foreground">
									{stat.label}
								</p>
								<p className="text-2xl font-bold">{stat.value}</p>
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
