import client from '../utils/sanity'
import groq from 'groq'

export async function load() {
	return await client.fetch(groq`{
		'types': *[_type == 'neoType']|order(order){
			...,
			weakness[]->|order(order){ _id, name, emoji },
			resistance[]->|order(order){ _id, name, emoji },
			immunity[]->|order(order){ _id, name, emoji }
		},
		'specs': *[_type == 'spec']|order(order)
	}`)
}
