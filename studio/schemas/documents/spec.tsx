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
		})
	],
	preview: {
		select: {
			title: 'name',
		},
		prepare: ({ ...selection }) => ({
			...selection,
			media: VscSymbolRuler,
		})
	}
})
