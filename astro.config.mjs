import { defineConfig, squooshImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
	image: {
		service: squooshImageService(),
	},
	integrations: [tailwind(), compress(), partytown(), sitemap(), mdx()],
	site: 'https://uxinspo.vercel.app/',
})
