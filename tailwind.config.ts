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
				"kode-mono": ["var(--kode-mono)"],
			},
			padding: {
				"content-padding-sm": "22px",
				"content-padding-lg": "40px",
				"content-padding-2xl": "80px",
			},
			colors: {
				charcoal: "#292929",
				"floral-white": "#FFFAEF",
				"coral-red": "#F8413A",
				"rich-black": "#040404",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
