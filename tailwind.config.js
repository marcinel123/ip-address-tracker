/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontSize: {
			xxs: "0.5rem",
		},
		extend: {
			backgroundImage: {
				"bg-desktop": "url('/src/images/bg-desktop.png')",
			},
			colors: {
				"text-color": "#9e9e9e",
				"line-color": "#dbdbdb",
			},
		},
	},
	plugins: [],
};
