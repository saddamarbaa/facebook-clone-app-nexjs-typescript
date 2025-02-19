import React from 'react'
import Chat from '../Chat/Chat'

type FriendType = {
	name?: string
	image?: string
	quote?: string
	isOffLine?: boolean
}

const Friend: React.FunctionComponent<FriendType> = ({
	name,
	image,
	quote,
	isOffLine,
}) => {
	return (
		<div className="flex items-center justify-between gap-4 cursor-pointer  dark:text-gray-300 text-gray-500 hover:bg-gray-300 p-2 dark:hover:bg-gray-600 ">
			<div className="flex items-center relative">
				{/* Avatar */}
				<div className="ml-[-1rem]">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={image ? image : '/images/tem-img.png'}
						alt={name}
						className="w-10 h-10 rounded-full object-cover"
					/>
				</div>

				<span
					className={`absolute left-4 top-10 w-3 h-3   text-[11px] font-bold rounded-full  flex items-center justify-center ${
						isOffLine ? 'bg-red-500' : 'bg-green-500'
					}`}></span>

				{/* Friend Details */}
				<div className="ml-4">
					<span className="block text-base mb-1">{name}</span>
					<p className="text-sm font-bold text-primary">{quote}</p>
				</div>
			</div>

			<Chat />
		</div>
	)
}

export default Friend
