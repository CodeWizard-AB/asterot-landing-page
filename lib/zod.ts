import { z } from "zod";

export const formSchema = z.object({
	teamName: z
		.string()
		.min(1, { message: "Team name is required." })
		.min(3, { message: "Team name must be at least 3 characters." })
		.max(50, { message: "Team name cannot exceed 50 characters." })
		.trim()
		.refine((val) => /^[a-zA-Z0-9\s-]+$/.test(val), {
			message:
				"Team name can only contain letters, numbers, spaces, and hyphens.",
		}),
	institution: z
		.string()
		.min(1, { message: "Institution name is required." })
		.min(3, { message: "Institution name must be at least 3 characters." })
		.max(100, { message: "Institution name cannot exceed 100 characters." })
		.trim(),
	managerName: z
		.string()
		.min(1, { message: "Manager name is required." })
		.min(3, { message: "Manager name must be at least 3 characters." })
		.max(50, { message: "Manager name cannot exceed 50 characters." })
		.trim()
		.refine((val) => /^[a-zA-Z\s.]+$/.test(val), {
			message: "Manager name can only contain letters, spaces, and periods.",
		}),
	email: z
		.string()
		.min(1, { message: "Email is required." })
		.email({ message: "Please enter a valid email address." })
		.min(5, { message: "Email must be at least 5 characters." })
		.max(100, { message: "Email cannot exceed 100 characters." })
		.trim()
		.toLowerCase(),
	phone: z
		.string()
		.min(1, { message: "Phone number is required." })
		.min(11, { message: "Phone number must be at least 11 digits." })
		.max(15, { message: "Phone number cannot exceed 15 digits." })
		.trim()
		.refine((val) => /^[0-9+]+$/.test(val), {
			message: "Phone number can only contain numbers and '+' symbol.",
		}),
	paymentMethod: z.enum(["bkash", "nagad"], {
		required_error: "Please select a payment method.",
		invalid_type_error: "Invalid payment method selected.",
	}),
});
