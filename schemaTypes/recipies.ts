import { defineType, defineField } from 'sanity'
import { BookIcon } from '@sanity/icons'

export default defineType({
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    icon: BookIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
        }),
        defineField({
            name: 'image',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'ingredients',
            title: 'Ingredients',
            type: 'array',
            of: [{ type: 'ingredient' }],
        }),
        defineField({
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'prepTime',
            title: 'Prep Time (minutes)',
            type: 'number',
        }),
        defineField({
            name: 'cookTime',
            title: 'Cook Time (minutes)',
            type: 'number',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
            subtitle: 'description',
        },
    },
})
