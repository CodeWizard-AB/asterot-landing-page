import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import BkashLogo from "@/assets/BKash-Logo.svg";
import NagadLogo from "@/assets/Nagad-Logo.svg";

export function PaymentInfo() {
	return (
		<Card>
			<CardHeader>
				<div className="flex items-center gap-2">
					<CreditCard className="h-5 w-5 text-chart-5" />
					<CardTitle>Payment Information</CardTitle>
				</div>
				<CardDescription>
					Registration fee: ৳ 8,000 (Eight Thousands Only)
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-4">
					<div className="space-y-2">
						<h4 className="font-medium flex items-center gap-2">
							<Image src={BkashLogo} alt="bKash" className="w-20" />
							BKash Payment
						</h4>
						<div className="text-sm grid grid-cols-2 gap-x-4 gap-y-1">
							<span className="text-muted-foreground">Number:</span>
							<span className="font-medium">017 1784 8532</span>
							<span className="text-muted-foreground">Type:</span>
							<span>Personal</span>
						</div>
					</div>

					<div className="space-y-2">
						<h4 className="font-medium flex items-center gap-2">
							<Image src={NagadLogo} alt="nagad" className="w-20" />
							Nagad Payment
						</h4>
						<div className="text-sm grid grid-cols-2 gap-x-4 gap-y-1">
							<span className="text-muted-foreground">Number:</span>
							<span className="font-medium">017 1784 8539</span>
							<span className="text-muted-foreground">Type:</span>
							<span>Personal</span>
						</div>
					</div>
				</div>

				<div className="bg-muted p-3 rounded-lg text-sm">
					<p className="font-medium mb-2">Payment Steps:</p>
					<ol className="list-decimal list-inside space-y-1 text-muted-foreground">
						<li>Open bKash/Nagad app</li>
						<li>Select &quot;Send Money&quot;</li>
						<li>Enter the number shown above</li>
						<li>Enter amount: ৳ 8,000</li>
						<li>Add reference: Your team name</li>
						<li>Complete payment</li>
						<li>Save screenshot/receipt</li>
					</ol>
				</div>
			</CardContent>
		</Card>
	);
}
