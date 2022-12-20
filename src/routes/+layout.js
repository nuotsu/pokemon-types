import client from '../utils/sanity'
import groq from 'groq'

export async function load() {
	return await client.fetch(groq`{
		'types': *[_type == 'neoType']|order(order){
			...,
			weakness[]->|order(order){ _id, name, emoji, color },
			resistance[]->|order(order){ _id, name, emoji, color },
			immunity[]->|order(order){ _id, name, emoji, color },
			spec{
				inc->,
				dec->
			}
		},
		'specs': *[_type == 'spec']|order(order)
	}`)
}
