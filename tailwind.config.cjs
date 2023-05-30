import { join } from 'path'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			backgroundColor: {
				'default': '#EEEEEE', // Replace with your desired default background color
			  },
			colors: {
				'Box_grey': '#D9D9D9',
		        'grey_1' :'#AEAEAE',
				'grey_2': '#B1B1B1',
				'grey_3':'#F2F2F2',
				'grey_4': '#C4C4C4',
				'msg_grey':'#E0E0E0',
				'icon':'#E0E6EB',
		        'b_grey':'#D8D8D8'
			  },
			  fontSize: {
				xs: ['0.6rem', '0.8rem'],
				xsm: '0.75rem'
			},
			  boxShadow: {
				'custom': '0px 4px 4px rgba(0, 0, 0, 0.07)',
			  },
		},
	},
	plugins: [forms,typography,...skeleton()],
}
