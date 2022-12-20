import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
	name: 'default',
	title: 'Neo Types',

	projectId: 'fnd1ot28',
	dataset: 'production',

	plugins: [
		deskTool({
			structure: (S, context) =>
				S.list()
					.title('Content')
					.items([
						S.documentTypeListItem('neoType').title('Neo Types'),
						S.documentTypeListItem('spec').title('Specs'),
					])
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
})
