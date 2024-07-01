/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					1: "var(--mauve-1)",
					2: "var(--mauve-2)",
					3: "var(--mauve-3)",
					4: "var(--mauve-4)",
					5: "var(--mauve-5)",
					6: "var(--mauve-6)",
					7: "var(--mauve-7)",
					8: "var(--mauve-8)",
					9: "var(--mauve-9)",
					10: "var(--mauve-10)",
					11: "var(--mauve-11)",
					12: "var(--mauve-12)",
				},
			},
		},
		fontFamily: {
			freeman: ["Freeman", "sans-serif"],
		},
	},
	plugins: [],
};
