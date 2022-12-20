/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		fontFamily: {
			sans: ['Big Shoulders Text', 'sans-serif'],
		},
		extend: {
			colors: {
				ink: '#000',
				paper: '#fff',
				accent: '#f00',
			}
		},
	},
	plugins: [],
}
