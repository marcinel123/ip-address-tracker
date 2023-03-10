/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"bg-desktop": "url('/src/images/bg-desktop.png')",
			},
		},
	},
	plugins: [],
};
