import React from 'react'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'neoType',
	title: 'Neo Type',
	type: 'document',
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
		}),
		defineField({
			name: 'compatibility',
			type: 'object',
			fields: [
				defineField({
					name: 'weakness',
					description: '2x',
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
					type: 'array',
					of: [
						{
							type: 'reference',
							to: [{ type: 'neoType' }]
						}
					]
				}),
			],
			options: {
				columns: 2,
			}
		}),
		defineField({
			name: 'performance',
			type: 'object',
			fields: [
				defineField({
					name: 'inc',
					type: 'string',
					options: {
						list: [
							{ title: 'HP', value: 'HP' },
							'Attack',
							'Defense',
							'Speed',
						]
					},
				}),
				defineField({
					name: 'dec',
					type: 'string',
					options: {
						list: [
							{ title: 'HP', value: 'HP' },
							'Attack',
							'Defense',
							'Speed',
						]
					},
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
			// subtitle: 'name.jp',
			inc: 'performance.inc',
			dec: 'performance.dec',
			emoji: 'emoji',
		},
		prepare: ({ emoji, inc, dec, ...selection }) => ({
			subtitle: [inc, dec].filter(Boolean).join(' / '),
			media: <>{emoji}</>,
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
