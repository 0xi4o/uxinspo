import { UiCategories } from '@/utils/types'
import { defineCollection, z } from 'astro:content'

const uiCollection = defineCollection({
    type: 'content',
    schema: z.object({
        product: z.string(),
        excerpt: z.string().default(''),
        image: z.string(),
        category: z.enum(UiCategories),
        website: z.string().default(''),
        date_published: z.date(),
        draft: z.boolean().default(false),
    }),
})

export const collections = {
    ui: uiCollection,
}
