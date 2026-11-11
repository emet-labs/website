// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://emetlabs.ai',
	redirects: {
		// Retired placeholder; trace-grab replaced it.
		'/trace-bounty': '/trace-grab',
		// Placeholder with no posts; removed until there is something to publish.
		'/blog': '/research/',
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
