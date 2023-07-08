/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/modules/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-urbanist)'],
			},
			screens: {
				xxxs: '310px',
				xxs: '350px',
				xxs: '340px',
				sm: '410px',
				// => @media (min-width: 640px) { ... }

				// md: '768px',
				md: '508px',
				// => @media (min-width: 768px) { ... }

				// lg: '1024px',
				lg: '1024px',
				// => @media (min-width: 1024px) { ... }

				xl: '1440px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1920px',
				// => @media (min-width: 1536px) { ... }
			},
			colors: {
				primary: '#0D1D35',
				secondary: '#ecc94b',
				gray: '#CACACA',
				'gray-light': '#8A8A8A',
				white: '#FFFFFF',
				black: '#000000',
				green: '#1F9C1D',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
