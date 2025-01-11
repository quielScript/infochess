/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				warmBlack: "#312E2B", // Page BG
				smokyBlack: "#272522", // Card BG
				lightGray: "#D9D9D9", // Header TXT
				transparentWhite: "#ffffffd9", // Normal TXT
				brightCyan: "#009FD9", // Link
				oliveGreen: "#81b64c", // State
			},
		},
	},
	plugins: [],
};
