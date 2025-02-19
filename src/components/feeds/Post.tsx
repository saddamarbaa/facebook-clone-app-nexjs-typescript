import React from 'react'

import {
	MoreHorizontal,
	Heart,
	ThumbsUp,
	Smile,
	Share,
	MessageSquare,
} from 'lucide-react'

import { getRandomIntNumberBetween } from '../../lib/api-util'
import Avatar from '../ui/Avatar'
import { Card } from '../ui/card'
import Comments from './Comments'
import { CommentT } from '@/types'

type PostType = {
	userName?: string
	userImage?: string
	postImage?: string
	postContent?: string
	postHeading?: string
	isVideo?: string
	videoSrc?: string
	constantDate?: string
	height?: string
	comments: CommentT[]
}

const Post: React.FunctionComponent<PostType> = React.forwardRef((props) => {
	const {
		userName,
		userImage,
		postImage,
		postContent,
		postHeading,
		isVideo,
		videoSrc,
		constantDate,
		comments = [],
	} = props

	return (
		<Card className="my-4 w-full mx-auto  shadow-md rounded-lg p-4 overflow-hidden">
			{/* User info and post heading */}
			<div className="flex justify-between items-center mb-4">
				<div className="flex items-center space-x-3">
					<Avatar
						url={userImage ? userImage : '/images/tem-img.png'}
						alt={userName}
						className="w-10 h-10"
					/>
					<div>
						<h3 className="font-semibold text-sm">{userName}</h3>
						<p className="text-xs text-gray-500 dark:text-white">
							{constantDate || '2h'}
						</p>
					</div>
				</div>
				<MoreHorizontal className="w-5 h-5 text-gray-600 cursor-pointer dark:text-white" />
			</div>

			{/* Post content */}
			<div className="mb-4">
				<h3 className="text-lg font-semibold mb-2">{postHeading}</h3>
				<p className="text-sm text-gray-700 dark:text-white">{postContent}</p>
			</div>

			{/* Post Image */}
			{postImage && (
				<div>
					<figure>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							className="w-full cursor-pointer"
							src={postImage}
							alt="post image"
							loading="lazy"
						/>
					</figure>
				</div>
			)}

			{/* Video */}
			{isVideo && (
				<iframe
					className="w-full h-96 mb-4"
					src={videoSrc}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>
			)}

			{/* Post reactions and options */}
			<div className="border-t pt-3">
				<div className="flex justify-between items-center text-sm text-gray-700 dark:text-white mb-2">
					<div className="flex space-x-2 items-center">
						<ThumbsUp className="text-blue-500 w-5 h-5" />
						<Smile className="text-yellow-500 w-5 h-5" />
						<Heart className="text-red-500 w-5 h-5" />
						<span>{getRandomIntNumberBetween(50, 230)}</span>
					</div>
					<div className="flex items-center space-x-1">
						<span>{getRandomIntNumberBetween(5, 30)}</span>
						<span className="text-gray-500 dark:text-white">Comments</span>
					</div>
				</div>

				{/* Bottom Actions */}
				<div className="flex justify-between">
					<div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition duration-200 dark:hover:bg-gray-800">
						<ThumbsUp className="w-5 h-5 text-gray-600" />
						<span>Like</span>
					</div>
					<div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition duration-200 dark:hover:bg-gray-800">
						<MessageSquare className="w-5 h-5 text-gray-600" />
						<span>Comment</span>
					</div>
					<div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition duration-200 dark:hover:bg-gray-800">
						<Share className="w-5 h-5 text-gray-600" />
						<span>Share</span>
					</div>
				</div>
			</div>
			{comments?.length > 0 ? (
				<div className="flex items-center justify-between mt-3 dark:text-white border-t dark:border-customBlack-600 text-sm px-4">
					<Comments comments={comments} />
				</div>
			) : null}
		</Card>
	)
})

// To fix error(Component definition is missing display/name-react)
Post.displayName = 'Post'

export default Post
