import React from 'react'
import {
	Search,
	Settings,
	Film,
	Clock,
	ThumbsUp,
	History,
	TrendingUp,
	Star,
	Flag,
	LucideIcon,
} from 'lucide-react'
import { Card } from '../ui/card'
import IconButton from '../homepage/IconButton'

// Sidebar Item Component
type SidebarItemProps = {
	Icon: LucideIcon
	label?: string
}

const SidebarItem = ({ Icon, label }: SidebarItemProps) => (
	<div className="flex items-center cursor-pointer transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 space-x-3 px-4">
		<IconButton
			Icon={Icon}
			iconClassName="w-6 h-6"
			className="hidden sm:block p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-900 dark:bg-gray-800 transition"
			aria-label={label}
		/>
		<span className="text-gray-700 dark:text-gray-300">{label}</span>
	</div>
)

export default function WatchSidebar() {
	return (
		<div className="flex-col min-h-screen max-w-sm hidden lg:flex lg:flex-[0.3] mr-10">
			<div id="fixed-position" className="fixed max-w-sm w-full">
				<Card className="rounded-lg shadow-lg h-full flex flex-col space-y-5 py-4">
					<div className="flex items-center justify-between px-4 mb-4">
						<h2 className="text-3xl font-bold">Watch</h2>
						<Settings className="cursor-pointer text-gray-600 dark:text-gray-300" />
					</div>

					{/* Search Input */}
					<div className="px-4">
						<div className="flex items-center border border-gray-300 dark:border-gray-700 p-2 rounded-lg">
							<Search className="text-gray-500" />
							<input
								type="text"
								placeholder="Search Videos"
								className="ml-2 w-full outline-none bg-transparent text-gray-700 dark:text-gray-300"
								aria-label="Search Videos"
							/>
						</div>
					</div>

					{/* Sidebar Items */}
					<nav className="space-y-3 px-4">
						<SidebarItem Icon={Film} label="Home" />
						<SidebarItem Icon={Clock} label="Watch Later" />
						<SidebarItem Icon={ThumbsUp} label="Liked Videos" />
						<SidebarItem Icon={History} label="History" />
						<SidebarItem Icon={TrendingUp} label="Trending" />
						<SidebarItem Icon={Star} label="Subscriptions" />
						<SidebarItem Icon={Flag} label="Reported" />
					</nav>

					<hr className="border-gray-400 dark:border-gray-600" />

					{/* Categories Section */}
					<section className="px-4">
						<h2 className="text-xl font-semibold mb-6">Categories</h2>
						<ul className="space-y-4 text-gray-700 dark:text-gray-300">
							<li className="flex items-center hover:text-blue-600 cursor-pointer">
								<Film className="mr-2" /> Movies
							</li>
							<li className="flex items-center hover:text-blue-600 cursor-pointer">
								<Film className="mr-2" /> TV Shows
							</li>
							<li className="flex items-center hover:text-blue-600 cursor-pointer">
								<Film className="mr-2" /> Music
							</li>
							<li className="flex items-center hover:text-blue-600 cursor-pointer">
								<Film className="mr-2" /> Gaming
							</li>
							<li className="flex items-center hover:text-blue-600 cursor-pointer">
								<Film className="mr-2" /> Sports
							</li>
						</ul>
					</section>

					{/* Filters Section */}
					<section className="px-4">
						<h2 className="text-xl font-semibold mb-4">Filters</h2>
						<div className="space-y-4">
							<div className="flex items-center">
								<input
									type="checkbox"
									id="new-arrivals"
									className="mr-2 cursor-pointer w-4 h-4"
								/>
								<label
									htmlFor="new-arrivals"
									className="text-gray-700 dark:text-gray-300">
									New Arrivals
								</label>
							</div>
							<div className="flex items-center">
								<input
									type="checkbox"
									id="popular"
									className="mr-2 cursor-pointer w-4 h-4"
								/>
								<label
									htmlFor="popular"
									className="text-gray-700 dark:text-gray-300">
									Popular
								</label>
							</div>
							<div className="flex items-center">
								<input
									type="checkbox"
									id="live"
									className="mr-2 cursor-pointer w-4 h-4"
								/>
								<label
									htmlFor="live"
									className="text-gray-700 dark:text-gray-300">
									Live
								</label>
							</div>
						</div>
					</section>
				</Card>
			</div>
		</div>
	)
}
