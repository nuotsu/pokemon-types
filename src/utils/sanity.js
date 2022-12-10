import sanityClient from '@sanity/client'
// import { PUBLIC_SANITY_TOKEN } from '$env/static/public'

const client = sanityClient({
	projectId: 'fnd1ot28',
	dataset: 'production',
	apiVersion: '2022-12-09',
	useCdn: true,
	// token: PUBLIC_SANITY_TOKEN,
})

export default client
