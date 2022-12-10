import React from 'react'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'attribute',
	title: 'Attribute',
	type: 'document',
	fields: [
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
		}),
		defineField({
			name: 'effectiveness',
			type: 'object',
			fields: [
				defineField({
					name: 'weakTo',
					description: '2x',
					type: 'array',
					of: [
						{
							type: 'reference',
							to: [{ type: 'attribute' }]
						}
					]
				}),
				defineField({
					name: 'resistantTo',
					description: '0.5x',
					type: 'array',
					of: [
						{
							type: 'reference',
							to: [{ type: 'attribute' }]
						}
					]
				}),
				defineField({
					name: 'immuneTo',
					description: '0x',
					type: 'array',
					of: [
						{
							type: 'reference',
							to: [{ type: 'attribute' }]
						}
					]
				}),
			],
			options: {
				columns: 2,
			}
		})
	],
	preview: {
		select: {
			title: 'name.en',
			subtitle: 'name.jp',
			emoji: 'emoji',
		},
		prepare: ({ emoji, ...selection }) => ({
			media: <>{emoji}</>,
			...selection,
		})
	}
})
