/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'saira-stencil': ['Saira Stencil One', 'sans-serif'],
				saira: ['Saira', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
