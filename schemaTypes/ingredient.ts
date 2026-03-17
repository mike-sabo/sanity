import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'ingredient',
    title: 'Ingredient',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'quantity',
            title: 'Quantity',
            type: 'number',
        }),
        defineField({
            name: 'unit',
            title: 'Unit',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'quantity',
        },
    },
})
