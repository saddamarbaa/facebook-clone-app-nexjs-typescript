type Rating = {
	rate: number
	count: number
}

export type ProductT = {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: Rating
}

export type GamingT = {
	id: number
	title: string
	image: string
	description: string
}
