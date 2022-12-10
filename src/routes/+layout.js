import client from '../utils/sanity'
import groq from 'groq'

export async function load() {
	return {
		types: await client.fetch(groq`*[_type == 'neoType']|order(order){
			...,
			compatibility{
				weakness[]->|order(order){ _id, name, emoji },
				resistance[]->|order(order){ _id, name, emoji },
				immunity[]->|order(order){ _id, name, emoji }
			}
		}`)
	}
}
