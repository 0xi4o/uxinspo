import { UiCategories } from '@/utils/types'
import { z } from 'astro:content'

export const CategoryItem = z.object({
	image: z.string(),
	title: z.string(),
	type: z.enum(UiCategories),
})

export type CategoryItem = z.infer<typeof CategoryItem>

const categories: CategoryItem[] = [
	{
		image: '/images/dashboard/baremetrics.png',
		title: 'Dashboard',
		type: 'dashboard',
	},
	{
		image: '/images/settings/linear.png',
		title: 'Settings',
		type: 'settings',
	},
	{
		image: '/images/lists/sentry.png',
		title: 'Lists & Tables',
		type: 'lists-tables',
	},
]

export default categories
