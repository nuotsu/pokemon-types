import React from 'react'
import { defineField, defineType } from 'sanity'
import { VscSymbolRuler } from 'react-icons/vsc'

export default defineType({
	name: 'spec',
	title: 'Spec',
	type: 'document',
	icon: VscSymbolRuler,
	fields: [
		defineField({
			name: 'order',
			type: 'number',
		}),
		defineField({
			name: 'name',
			type: 'string',
		}),
		defineField({
			name: 'color',
			type: 'string',
			placeholder: '#ffffff',
		}),
	],
	preview: {
		select: {
			title: 'name',
			color: 'color',
		},
		prepare: ({ color, ...selection }) => ({
			...selection,
			media: () => <VscSymbolRuler style={{ color }} />,
		})
	}
})
