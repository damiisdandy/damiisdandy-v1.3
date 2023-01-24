/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				dark: {
					100: '#151515',
					200: '#232323',
					300: '#444444'
				},
				light: {
					100: '#fff',
					200: '#eee'
				}
			}
		},
	},
	plugins: [],
}
