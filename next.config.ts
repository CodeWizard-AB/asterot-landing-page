import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "images.pexels.com",
				pathname: "/photos/**",
			},
		],
	},
};

export default nextConfig;
