import React from 'react'
import {
	Search,
	Gamepad2,
	Users,
	ChevronDown,
	Settings,
	Star,
	TrendingUp,
	Youtube,
	Trophy,
	Heart,
	MessageCircle,
	DownloadCloud,
	ThumbsUp,
	ShoppingCart,
	Zap,
	Gift,
	Calendar,
	Compass,
} from 'lucide-react'

const SidebarItem = ({
	Icon,
	label,
}: {
	Icon: React.ElementType
	label: string
}) => (
	<div className="flex items-center cursor-pointer transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 p-3 space-x-4 rounded-lg">
		<Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
		<span className="text-lg font-medium text-gray-900 dark:text-gray-300">
			{label}
		</span>
	</div>
)

export default function GamingSidebar() {
	return (
		<aside className=" bg-white dark:bg-gray-900 h-screen p-6 shadow-lg flex flex-col justify-between">
			{/* Top Section */}
			<div>
				{/* Gaming Title and Settings */}
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
						Gaming
					</h2>
					<Settings className="w-6 h-6 text-gray-700 dark:text-gray-300" />
				</div>

				{/* Search Bar */}
				<div className="relative mb-6">
					<Search className="absolute left-3 top-3 text-gray-500" />
					<input
						type="text"
						placeholder="Search Games"
						className="pl-10 pr-4 py-2 w-full border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 outline-none"
					/>
				</div>

				{/* Sidebar Navigation */}
				<nav className="space-y-4">
					<SidebarItem Icon={Gamepad2} label="Play Games" />
					<SidebarItem Icon={Youtube} label="Streamers" />
					<SidebarItem Icon={Users} label="Communities" />
					<SidebarItem Icon={TrendingUp} label="Trending" />
					<SidebarItem Icon={Star} label="Top Rated" />
					<SidebarItem Icon={ChevronDown} label="Events" />
					<SidebarItem Icon={Trophy} label="Tournaments" />
					<SidebarItem Icon={MessageCircle} label="Chat Rooms" />
					<SidebarItem Icon={Heart} label="Favorites" />
					<SidebarItem Icon={ThumbsUp} label="Recommended" />
					<SidebarItem Icon={DownloadCloud} label="Downloads" />
					<SidebarItem Icon={ShoppingCart} label="Game Store" />
					<SidebarItem Icon={Zap} label="Live Games" />
					<SidebarItem Icon={Gift} label="Giveaways" />
					<SidebarItem Icon={Calendar} label="Upcoming Releases" />
					<SidebarItem Icon={Compass} label="Explore Genres" />
				</nav>
			</div>

			{/* Bottom Section */}
			<div>
				<hr className="border-gray-300 dark:border-gray-700 my-6" />

				{/* Featured Streamers */}
				<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
					Featured Streamers
				</h3>
				<div className="space-y-3">
					<div className="flex items-center space-x-3">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/streamer1.jpg"
							alt="Streamer 1"
							className="w-10 h-10 rounded-full"
						/>
						<div>
							<h4 className="text-gray-900 dark:text-gray-200 font-medium">
								Streamer1
							</h4>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Live now
							</p>
						</div>
					</div>
					<div className="flex items-center space-x-3">
						 {/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/streamer2.jpg"
							alt="Streamer 2"
							className="w-10 h-10 rounded-full"
						/>
						<div>
							<h4 className="text-gray-900 dark:text-gray-200 font-medium">
								Streamer2
							</h4>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Fortnite
							</p>
						</div>
					</div>
				</div>
			</div>
		</aside>
	)
}
