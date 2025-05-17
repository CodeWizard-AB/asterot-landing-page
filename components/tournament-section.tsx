import { SectionHeading } from "@/components/section-heading";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Trophy,
	Users,
	BadgeCheck,
	Calendar,
	MapPin,
	Timer,
	Shield,
} from "lucide-react";

export function TournamentSection() {
	return (
		<section id="tournament" className="my-40">
			<div className="container max-w-screen-xl mx-auto">
				<SectionHeading
					title="Tournament Format"
					subtitle="A thrilling one-day football championship featuring 12 elite university teams competing for glory."
				/>

				<div className="grid md:grid-cols-2 gap-8 mb-12">
					<Card className="relative overflow-hidden">
						<div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full bg-chart-5/20"></div>

						<CardHeader>
							<div className="flex items-center gap-2 mb-2">
								<Trophy className="h-5 w-5 text-chart-5" />
								<CardTitle>Prize Pool</CardTitle>
							</div>
							<CardDescription>
								Compete for a total prize pool of ৳ 3,50,000
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<div className="mt-1 bg-primary/10 p-1.5 rounded-full">
										<Trophy className="h-4 w-4 text-chart-5" />
									</div>
									<div>
										<h4 className="font-semibold">Champions</h4>
										<p className="text-muted-foreground">৳ 2,00,000</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="mt-1 bg-primary/10 p-1.5 rounded-full">
										<Shield className="h-4 w-4 text-chart-5" />
									</div>
									<div>
										<h4 className="font-semibold">Runners-up</h4>
										<p className="text-muted-foreground">৳ 1,00,000</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="mt-1 bg-primary/10 p-1.5 rounded-full">
										<BadgeCheck className="h-4 w-4 text-chart-5" />
									</div>
									<div>
										<h4 className="font-semibold">Semi-finalists</h4>
										<p className="text-muted-foreground">৳ 25,000 each</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<div className="flex items-center gap-2 mb-2">
								<Users className="h-5 w-5 text-chart-5" />
								<CardTitle>Tournament Structure</CardTitle>
							</div>
							<CardDescription>
								FIFA World Cup style format with group stages and knockouts
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<div className="mt-1 bg-primary/10 p-1.5 rounded-full">
										<Users className="h-4 w-4 text-chart-5" />
									</div>
									<div>
										<h4 className="font-semibold">Group Stage</h4>
										<p className="text-muted-foreground">
											4 groups with 4 teams each
										</p>
										<p className="text-sm text-muted-foreground mt-1">
											Round-robin format within groups
										</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="mt-1 bg-primary/10 p-1.5 rounded-full">
										<Trophy className="h-4 w-4 text-chart-5" />
									</div>
									<div>
										<h4 className="font-semibold">Knockout Stage</h4>
										<p className="text-muted-foreground">
											Top 2 teams from each group advance
										</p>
										<p className="text-sm text-muted-foreground mt-1">
											Quarter-finals, Semi-finals, and Final
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Card>
						<CardHeader>
							<div className="flex items-center gap-2">
								<Calendar className="h-5 w-5 text-chart-5" />
								<CardTitle>Important Dates</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">
										Registration Opens
									</span>
									<span className="font-medium">May 17, 2025</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">
										Registration Closes
									</span>
									<span className="font-medium">May 22, 2025</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">Tournament Day</span>
									<span className="font-medium">May 25, 2025</span>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<div className="flex items-center gap-2">
								<MapPin className="h-5 w-5 text-chart-5" />
								<CardTitle>Venue Details</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								<div>
									<h4 className="font-medium">Main Stadium</h4>
									<p className="text-muted-foreground">
										Bangabandhu National Stadium
									</p>
								</div>
								<div>
									<h4 className="font-medium">Match Format</h4>
									<p className="text-muted-foreground">
										11-a-side full field matches
									</p>
								</div>
								<div>
									<h4 className="font-medium">Facilities</h4>
									<p className="text-muted-foreground">
										FIFA standard pitch, changing rooms, medical facilities
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<div className="flex items-center gap-2">
								<Timer className="h-5 w-5 text-chart-5" />
								<CardTitle>Match Schedule</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								<div>
									<h4 className="font-medium">Group Stage</h4>
									<p className="text-muted-foreground">8:00 AM - 2:00 PM</p>
								</div>
								<div>
									<h4 className="font-medium">Quarter Finals</h4>
									<p className="text-muted-foreground">2:30 PM - 4:30 PM</p>
								</div>
								<div>
									<h4 className="font-medium">Semi Finals</h4>
									<p className="text-muted-foreground">5:00 PM - 6:30 PM</p>
								</div>
								<div>
									<h4 className="font-medium">Final Match</h4>
									<p className="text-muted-foreground">7:30 PM - 9:00 PM</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
