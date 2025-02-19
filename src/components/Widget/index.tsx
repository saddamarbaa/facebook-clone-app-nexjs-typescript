import { Gift, Search, MoreHorizontal, Edit } from 'lucide-react'
import React from 'react'
import { Card } from '../ui/card'

import Friend from './Friend'
import Image from 'next/image'
import { Button } from '../ui/button'
import { fakeUsers, friends } from '@/lib/mockData/friends'

const Widget: React.FunctionComponent = () => {
	return (
		<div className="flex-col  items-center  min-h-screen max-w-sm w-full hidden lg:flex ml-4 ">
			<div id="fixed-position" className="fixed max-w-sm w-full">
				{/* Birthday Content */}
				<div className="w-full max-w-sm mx-auto mb-6">
					<Card>
						<div className="p-4 min-h-[6.25rem] cursor-pointer">
							<div className="flex items-center justify-between">
								<p className="flex items-center">
									<Gift className="mr-4 text-teal-400" />
									<span className="font-bold">Birthdays</span>
								</p>
								<MoreHorizontal />
							</div>
							<div className="mt-4 text-sm">
								<span className="font-bold mr-2">Mark Zuckerberg</span>
								Birthdays is today
							</div>
						</div>
					</Card>
				</div>

				{/* Friend requests */}
				<div className="max-w-sm mx-auto relative mb-6">
					<div className="flex items-center justify-between mb-4">
						<h4 className="font-bold text-lg">Friend requests</h4>
						<div className="text-blue-500 cursor-pointer hover:underline">
							See All
						</div>
					</div>

					<div className="mb-4 flex flex-col space-y-4">
						{/* Friend Request Item */}
						<div className="flex items-center justify-between w-full space-x-4">
							{/* Avatar */}
							<div className="flex items-center space-x-4">
								<Image
									width={40}
									height={40}
									src={'/images/tem-img.png'}
									alt={'User'}
									className="w-10 h-10 rounded-full object-cover"
								/>
								<span className="text-sm font-bold text-primary">username</span>
							</div>

							{/* Request Status */}
							<p className="text-right flex items-center space-x-2">
								<span className="text-gray-500 text-sm">5d</span>
								<span className="w-3 h-3 rounded-full bg-green-500 "></span>
							</p>
						</div>

						{/* Buttons */}
						<div className="flex justify-center space-x-3">
							<Button className="w-full bg-blue-600 text-white dark:text-white py-2 rounded hover:bg-blue-700 transition text-sm max-w-36 dark:bg-blue-500 dark:hover:bg-blue-700">
								Confirm
							</Button>
							<Button className="w-full  py-2 rounded  transition text-sm max-w-36">
								Delete
							</Button>
						</div>
					</div>
				</div>

				{/* Friends Section */}
				<div className="max-w-sm mx-auto border-t border-gray-300 relative">
					<div className="absolute top-[20.75rem] right-0 h-16 w-16 bg-white shadow-md flex items-center justify-center rounded-full cursor-pointer z-10">
						<Edit className="text-black text-2xl" />
					</div>

					<div className="flex items-center justify-between mb-4">
						<h4 className="font-bold">Contact</h4>
						<div className="flex items-center gap-6">
							<Search className="mt-1" />
							<MoreHorizontal />
						</div>
					</div>

					{/* Friends List */}
					<div>
						{friends?.map((friend, index) => (
							<Friend
								key={index}
								image={friend?.image}
								name={friend?.name}
								quote={friend?.quote}
								isOffLine={index === 3 || index === 5}
							/>
						))}

						{fakeUsers?.map((user, index) => (
							<Friend
								key={index}
								image={user.photoUrl}
								name={user?.name}
								quote={''}
								isOffLine={index % 2 === 0 || index === 5}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Widget
