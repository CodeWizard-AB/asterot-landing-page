import { z } from "zod";

export const formSchema = z.object({
	teamName: z
		.string()
		.min(3, { message: "Team name must be at least 3 characters." }),
	institution: z.string().min(3, { message: "Institution name is required." }),
	managerName: z.string().min(3, { message: "Manager name is required." }),
	email: z.string().email({ message: "Please enter a valid email address." }),
	phone: z.string().min(11, { message: "Please enter a valid phone number." }),
	paymentMethod: z.enum(["bkash", "nagad"], {
		required_error: "Please select a payment method.",
	}),
});
