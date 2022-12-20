import React from 'react'
import { defineField, defineType } from 'sanity'
import { VscBug } from 'react-icons/vsc'

export default defineType({
	name: 'neoType',
	title: 'Neo Type',
	type: 'document',
	icon: VscBug,
	fieldsets: [
		{
			name: 'compatibility',
			options: { columns: 2 },
		},
		{
			name: 'display',
			options: { columns: 2 },
		},
	],
	fields: [
		defineField({
			name: 'order',
			type: 'number',
		}),
		defineField({
			name: 'name',
			type: 'object',
			fields: [
				defineField({
					name: 'en',
					title: '🇺🇸',
					type: 'string',
				}),
				defineField({
					name: 'jp',
					title: '🇯🇵',
					type: 'string',
				}),
			],
			options: {
				columns: 2,
			}
		}),
		defineField({
			name: 'emoji',
			type: 'string',
			fieldset: 'display',
		}),
		defineField({
			name: 'color',
			type: 'string',
			placeholder: '#ffffff',
			fieldset: 'display',
		}),
		defineField({
			name: 'weakness',
			description: '2x',
			fieldset: 'compatibility',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'neoType' }]
				}
			]
		}),
		defineField({
			name: 'resistance',
			description: '0.5x',
			fieldset: 'compatibility',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'neoType' }]
				}
			]
		}),
		defineField({
			name: 'immunity',
			description: '0x',
			fieldset: 'compatibility',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'neoType' }]
				}
			]
		}),
		defineField({
			name: 'spec',
			type: 'object',
			fields: [
				defineField({
					name: 'inc',
					title: 'Increase 🔺',
					type: 'reference',
					to: [{ type: 'spec' }]
				}),
				defineField({
					name: 'dec',
					title: 'Decrease 🔻',
					type: 'reference',
					to: [{ type: 'spec' }]
				}),
			],
			options: {
				columns: 2,
			}
		}),
	],
	preview: {
		select: {
			title: 'name.en',
			subtitle: 'name.jp',
			emoji: 'emoji',
			color: 'color',
		},
		prepare: ({ emoji, color, ...selection }) => ({
			media: <Preview emoji={emoji} color={color} />,
			...selection,
		})
	},
	orderings: [
		{
			title: 'Order',
			name: 'order',
			by: [{ field: 'order', direction: 'asc' }],
		},
		{
			title: 'Name',
			name: 'name',
			by: [{ field: 'name.en', direction: 'asc' }],
		},
	],
})


const Preview = ({ emoji, color }: PreviewProps) => (
	<span
		style={{
			display: 'grid',
			aspectRatio: 1,
			placeContent: 'center',
			width: '100%',
			backgroundColor: color,
		}}
	>{emoji}</span>
)

interface PreviewProps {
	emoji: string
	color: string
}
