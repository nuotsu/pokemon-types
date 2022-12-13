import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$routes': 'src/routes',
			'$utils': 'src/utils',
		}
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
}

export default config
