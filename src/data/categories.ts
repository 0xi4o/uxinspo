import { UiCategories } from '@/utils/types'
import { z } from 'astro:content'

export const CategoryItem = z.object({
	image: z.string(),
	title: z.string(),
	type: z.enum(UiCategories),
})

export type CategoryItem = z.infer<typeof CategoryItem>

export const categories: CategoryItem[] = [
	{
		image: '/images/settings/linear.png',
		title: 'Dashboard',
		type: 'dashboard',
	},
	{
		image: '/images/settings/linear.png',
		title: 'Settings',
		type: 'settings',
	},
	{
		image: '/images/settings/linear.png',
		title: 'Stats',
		type: 'stats',
	},
]
