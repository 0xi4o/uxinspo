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
        image: '/thumbnails/dashboards.png',
        title: 'Dashboards',
        type: 'dashboards',
    },
    {
        image: '/thumbnails/settings.png',
        title: 'Settings',
        type: 'settings',
    },
    {
        image: '/thumbnails/lists-tables.png',
        title: 'Lists & Tables',
        type: 'lists-tables',
    },
]

export default categories
