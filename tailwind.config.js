/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			animation: {
				"pulse-slow": "pulse 8s ease-in-out infinite",
				"pulse-slower": "pulse 12s ease-in-out infinite",
				"pulse-slowest": "pulse 16s ease-in-out infinite",
			},
			keyframes: {
				pulse: {
					"0%, 100%": { opacity: "0.4" },
					"50%": { opacity: "0.8" },
				},
			},
		},
	},
	plugins: [],
};
