import React from 'react'

import { mockPosts } from '@/lib/mockData/posts'
import { getRandomIntNumberBetween } from '@/lib/api-util'
import { Clock, ThumbsUp } from 'lucide-react'
import WatchSidebar from './WatchSidebar'

type CardProps = {
	postContent: string
	postHeading: string
	videoSrc?: string
}
const VideoCard = (prop: CardProps) => (
	<div className="w-full mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden mb-8 transition-all hover:shadow-2xl">
		<div className="w-full h-[60vh] md:h-[50vh]">
			<iframe
				width="100%"
				height="100%"
				src={prop.videoSrc}
				// title={video.title}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				className="rounded-t-lg"></iframe>
		</div>

		<div className="p-4">
			<h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
				{prop.postHeading}
			</h3>

			<div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
				<div className="flex items-center space-x-4">
					<span>
						<Clock className="inline-block mr-1 w-4 h-4" />{' '}
						{getRandomIntNumberBetween(10, 40)} mins
					</span>
					<span>
						<ThumbsUp className="inline-block mr-1 w-4 h-4" />{' '}
						{getRandomIntNumberBetween(200, 2000)} likes
					</span>
				</div>
				<div className="flex items-center space-x-4">
					<span>{getRandomIntNumberBetween(200, 2000)} views</span>
					<span>{getRandomIntNumberBetween(200, 2000)} comments</span>
				</div>
			</div>

			<button className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition">
				Watch Now
			</button>
		</div>
	</div>
)

export default function WatchPage() {
	return (
		<div className="flex max-w-[99.75rem] mx-auto w-full justify-between gap-4">
			<WatchSidebar />
			{/* Main Content - Video Cards */}
			<div className="flex-1 grid grid-cols-1 md:grid-cols-2 px-4 gap-6 lg:p-0">
				{mockPosts
					?.filter((v) => v.isVideo)
					.map((post, index) => (
						<VideoCard
							key={post?.id + `post-${index}-${Math.random()}`}
							postHeading={post?.title || ''}
							postContent={post?.postContent || ''}
							videoSrc={post?.videoSrc || ''}
						/>
					))}
			</div>
		</div>
	)
}
