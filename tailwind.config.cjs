/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
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
