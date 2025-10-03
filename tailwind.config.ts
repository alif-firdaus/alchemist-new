import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"aeonik-light": ["var(--aeonik-light)", "sans-serif"],
				"aeonik-regular": ["var(--aeonik-regular)", "sans-serif"],
				"aeonik-medium": ["var(--aeonik-medium)", "sans-serif"],
			},
			padding: {
				"content-padding-sm": "20px",
				"content-padding-lg": "40px",
				"content-padding-2xl": "80px",
			},
			colors: {
				bgbase: "#0a0a0a",
				void: "#151515",
				charcoal: "#262626",
				smoke: "#BFBFBF",
				lava: "#FD5842",
				"floral-white": "#FFFBEF",
				"light-border": "#EBE7DC",
				"dark-border": "#2E2E2E",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
