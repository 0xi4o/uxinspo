import { UiCategories } from '@/utils/types'
import { z } from 'astro:content'

export const CategoryItem = z.object({
    image: z.string(),
    title: z.string(),
    type: z.enum(UiCategories),
    hide: z.optional(z.boolean().default(false)),
})

export type CategoryItem = z.infer<typeof CategoryItem>

const categories: CategoryItem[] = [
    {
        image: '/thumbnails/activity-feeds.png',
        title: 'Activity Feeds',
        type: 'activity-feeds',
    },
    {
        image: '/thumbnails/analytics-metrics.png',
        title: 'Analytics/Metrics',
        type: 'analytics-metrics',
    },
    {
        image: '/thumbnails/authentication.png',
        title: 'Authentication',
        type: 'authentication',
        hide: true,
    },
    {
        image: '/thumbnails/boards.png',
        title: 'Boards',
        type: 'boards',
    },
    {
        image: '/thumbnails/dashboards.png',
        title: 'Dashboards',
        type: 'dashboards',
    },
    {
        image: '/thumbnails/editors.png',
        title: 'Editors/Builders',
        type: 'editors',
    },
    {
        image: '/thumbnails/empty-states.png',
        title: 'Empty States',
        type: 'empty-states',
    },
    {
        image: '/thumbnails/forms.png',
        title: 'Forms',
        type: 'forms',
        hide: true,
    },
    {
        image: '/thumbnails/libraries.png',
        title: 'Libraries',
        type: 'libraries',
    },
    {
        image: '/thumbnails/lists-tables.png',
        title: 'Lists & Tables',
        type: 'lists-tables',
    },
    {
        image: '/thumbnails/nudges.png',
        title: 'Nudges',
        type: 'nudges',
    },
    {
        image: '/thumbnails/onboarding.png',
        title: 'Onboarding',
        type: 'onboarding',
    },
    {
        image: '/thumbnails/profiles.png',
        title: 'Profiles',
        type: 'profiles',
        hide: true,
    },
    {
        image: '/thumbnails/settings.png',
        title: 'Settings',
        type: 'settings',
    },
    {
        image: '/thumbnails/usage.png',
        title: 'Usage',
        type: 'usage',
    },
]

export default categories
