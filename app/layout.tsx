import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Asterot Bangladesh Limited | Premier Event Management Company",
	description:
		"Asterot Bangladesh Limited is a leading event management company in Bangladesh, specializing in corporate events, sports tournaments, and university competitions. Currently organizing the Inter-University Football Championship.",
	keywords:
		"event management, sports events, university football, corporate events, Bangladesh events, Asterot",
	authors: [{ name: "Asterot Bangladesh Limited" }],
	creator: "Asterot Bangladesh Limited",
	publisher: "Asterot Bangladesh Limited",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://asterot.com"),
	openGraph: {
		title: "Asterot Bangladesh Limited | Event Management Experts",
		description:
			"Professional event management services in Bangladesh. Currently organizing the Inter-University Football Championship. Your trusted partner for memorable events.",
		url: "https://asterot.com",
		siteName: "Asterot Bangladesh Limited",
		images: [
			{
				url: "https://ik.imagekit.io/xp2qigjdg/Cover%20Banner.jpg?updatedAt=1747635886021",
				width: 1200,
				height: 630,
				alt: "Asterot Bangladesh Limited",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Asterot Bangladesh Limited | Event Management Experts",
		description:
			"Professional event management services in Bangladesh. Currently organizing the Inter-University Football Championship.",
		images: [
			"https://ik.imagekit.io/xp2qigjdg/Cover%20Banner.jpg?updatedAt=1747635886021",
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning className="dark">
			<body className={`${inter.className}`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
