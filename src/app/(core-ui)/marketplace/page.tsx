import React from 'react'

import {
	Search,
	MapPin,
	Grid,
	Bell,
	DollarSign,
	PlusCircle,
	Smartphone,
	Gamepad2,
	BookOpen,
	Inbox,
	Settings,
	LucideIcon,
} from 'lucide-react'
import IconButton from '@/components/homepage/IconButton'
import { Card } from '@/components/ui/card'
import { productMockData } from '@/lib/mockData/produc'
import { ProductT } from '@/types/product'

type SidebarItemProps = {
	Icon: LucideIcon
	label?: string
}

// Reusable Sidebar Item Component
const SidebarItem = ({ Icon, label }: SidebarItemProps) => (
	<div className="flex items-center cursor-pointer transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 space-x-3 px-4">
		<IconButton
			Icon={Icon}
			iconClassName="w-6 h-6"
			className="hidden sm:block p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-900 dark:bg-gray-800 transition"
		/>
		<span className="text-gray-700 dark:text-gray-300">{label}</span>
	</div>
)

// Reusable Product Card Component with mock data
const ProductCard = ({ product }: { product: ProductT }) => (
	<div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition transform hover:scale-105 duration-200">
		<div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
			<img
				className="object-cover object-center w-full rounded-lg  h-96 "
				src={product.image}
				alt={product.title}
			/>
		</div>
		<h3 className="text-lg font-semibold mb-2 truncate">{product.title}</h3>
		<p className="text-blue-500 mb-4">${product.price}</p>
		<p className="text-sm text-gray-700 dark:text-gray-300 truncate">
			{product.description}
		</p>
		<div className="flex items-center justify-between mt-4">
			<span className="text-yellow-500">{product.rating.rate}⭐</span>
			<span className="text-blue-500">({product.rating.count})</span>
		</div>
		<button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition">
			Add to Cart
		</button>
	</div>
)

export default function Page() {
	return (
		<div className="flex max-w-[99.75rem] mx-auto w-full justify-between gap-4  ">
			<div className="flex-col min-h-screen max-w-sm  hidden lg:flex lg:flex-[0.3]  mr-10">
				<div id="fixed-position" className="fixed max-w-sm w-full">
					{/* Sidebar */}

					<Card className="rounded-lg shadow-lg h-full flex flex-col space-y-5 py-4">
						<div className="flex items-center justify-between  px-4 mb-4">
							<h2 className="text-3xl font-bold">Marketplace</h2>
							<Settings />
						</div>

						{/* Search Marketplace */}
						<div className="px-4">
							<div className="flex items-center border border-gray-300 p-2 rounded-lg">
								<Search className="text-gray-500" />
								<input
									type="text"
									placeholder="Search Marketplace"
									className="ml-2 w-full outline-none bg-transparent"
								/>
							</div>
						</div>

						{/* Sidebar Items */}
						<nav className="space-y-3 px-4">
							<SidebarItem Icon={Grid} label="Browse All" />
							<SidebarItem Icon={Bell} label="Notifications" />
							<SidebarItem Icon={Inbox} label="Inbox" />
							<SidebarItem Icon={DollarSign} label="Selling" />
							<SidebarItem Icon={Inbox} label="Buying" />
						</nav>

						{/* Sell & Create Listing */}
						<div className="space-y-6 px-4">
							<button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition">
								<PlusCircle /> Create Listing
							</button>
						</div>

						<hr className=" border-gray-400 dark:border-gray-600" />

						{/* Location Section */}
						<section className="px-4">
							<div className="flex items-center justify-between">
								<span className="text-gray-700 dark:text-gray-300 font-bold">
									Location
								</span>
								<MapPin className="text-gray-500" />
							</div>
							<p className="text-blue-500">New York, 2832, 250km away</p>
						</section>

						<hr className=" border-gray-400 dark:border-gray-700" />

						{/* Categories Section */}
						<section className="px-4">
							<h2 className="text-xl font-semibold mb-6">Categories</h2>
							<ul className="space-y-4 text-gray-700 dark:text-gray-300">
								<li className="flex items-center hover:text-blue-600 cursor-pointer">
									<Smartphone className="mr-2" /> Electronics
								</li>
								<li className="flex items-center hover:text-blue-600 cursor-pointer">
									<Gamepad2 className="mr-2" /> Toys
								</li>
								<li className="flex items-center hover:text-blue-600 cursor-pointer">
									<BookOpen className="mr-2" /> Books
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
										id="free-shipping"
										className="mr-2 cursor-pointer w-4 h-4"
									/>
									<label
										htmlFor="free-shipping"
										className="text-gray-700 dark:text-gray-300">
										Free Shipping
									</label>
								</div>
								<div className="flex items-center">
									<input
										type="checkbox"
										id="discount"
										className="mr-2 cursor-pointer w-4 h-4"
									/>
									<label
										htmlFor="discount"
										className="text-gray-700 dark:text-gray-300">
										Discounts
									</label>
								</div>
							</div>
						</section>
					</Card>
				</div>
			</div>

			<div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{productMockData.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>

			{/* Main Marketplace Section */}
			<main className="ml-1/4 w-3/4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hidden">
				<h1 className="text-3xl font-bold mb-6">Marketplace</h1>

				{/* Product Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{productMockData.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</main>
		</div>
	)
}
