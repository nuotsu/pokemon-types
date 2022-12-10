import client from '../utils/sanity'
import groq from 'groq'

export async function load() {
	return {
		types: await client.fetch(groq`*[_type == 'attribute']{
			...,
			effectiveness{
				weakTo[]->{ _id, name, emoji },
				resistantTo[]->{ _id, name, emoji },
				immuneTo[]->{ _id, name, emoji }
			}
		}`)
	}
}
