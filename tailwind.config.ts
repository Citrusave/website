import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				citrus: '#EE6C4D',
				theme: {
					'100': '#E0FBFC',
					'300': '#98C1D9',
					'600': '#3D5A80',
					'800': '#293241'
				}
			}
		}
	},
	plugins: [],
};

export default config;
