'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

import React from 'react'

export default function PageNotFound() {
	const router = useRouter()
	const handleClick = () => {
		router.push('/')
	}

	return (
		<div className="grid place-items-center px-4 py-12 sm:px-6 sm:py-32">
			<div className="max-w-md text-center">
				<h1 className="text-twitterBlue-500 mb-4 text-4xl font-bold sm:text-5xl">
					404
				</h1>
				<p className="mb-6 text-xl font-semibold sm:text-2xl">
					Oops! Page not found
				</p>
				<p className="mb-10 text-lg">
					Were sorry. The page you requested could not be found. Please go back
					to the homepage or contact us.
				</p>
				<div className="flex w-full items-center justify-center">
					<Button className="max-w-sm sm:max-w-sm" onClick={handleClick}>
						Go back
					</Button>
				</div>
			</div>
		</div>
	)
}
