import React from 'react'

import GamingSidebar from './GamingSidebar'
import { gamingMockData } from '@/lib/mockData/gaming'
import { GamingT } from '@/types/product'

export default function GamingPage() {
	return (
		<div className="flex max-w-[99.75rem] mx-auto w-full justify-between gap-4">
			<div className="flex-col min-h-screen max-w-sm  hidden lg:flex lg:flex-[0.3]  mr-10">
				<div id="fixed-position" className="fixed max-w-sm w-full">
					{/* Sidebar */}
					<GamingSidebar />
				</div>
			</div>

			{/* Main Content */}
			<main className="flex-1">
				<h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-200">
					Featured Games
				</h1>

				{/* Featured Games Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{gamingMockData.map((game, index) => (
						<GameCard key={index} game={game} />
					))}
				</div>
			</main>
		</div>
	)
}

// Game Card Component
const GameCard = ({ game }: { game: GamingT }) => (
	<div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
		{/* eslint-disable-next-line @next/next/no-img-element */}
		<img
			className="object-cover object-center w-full rounded-lg h-48"
			src={game.image}
			alt={game.title}
		/>
		<h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-200">
			{game.title}
		</h3>
		<p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
			{game.description}
		</p>
		<button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition">
			Play Now
		</button>
	</div>
)
