import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import compress from 'astro-compress'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	site: 'https://uxinspo.vercel.app/',
	integrations: [
		tailwind(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
		compress(),
		partytown(),
		sitemap(),
		mdx(),
		react(),
	],
})
