import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { paymentMethods } from "@/lib/content";
import { CreditCard, Receipt } from "lucide-react";
import Image from "next/image";

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
					{paymentMethods.map((method) => (
						<div key={method.name} className="space-y-2">
							<h4 className="font-medium flex items-center gap-2">
								<Image
									src={method.logo}
									alt={method.name}
									className="w-20 -ml-2.5"
								/>
								{method.name} Payment
							</h4>
							<div className="text-sm grid grid-cols-2 gap-x-4 gap-y-1">
								<span className="text-muted-foreground">Number:</span>
								<div className="font-medium">
									{method.number.split("/").map((num, index) => (
										<div key={index}>{num.trim()}</div>
									))}
								</div>
								<span className="text-muted-foreground">Type:</span>
								<span>{method.type}</span>
							</div>
						</div>
					))}
				</div>

				<div className="bg-muted/50 p-4 rounded-lg space-y-4">
					<div className="flex items-center gap-2 text-sm font-medium">
						<Receipt className="h-4 w-4" />
						<span>Payment Steps:</span>
					</div>
					<ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
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
