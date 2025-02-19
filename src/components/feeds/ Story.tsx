import Image from 'next/image'

import React from 'react'
import Avatar from '../ui/Avatar'

type StoryProps = {
	userName?: string
	userImage?: string
	storyImage: string
	createStory?: boolean
}

const Story: React.FunctionComponent<StoryProps> = ({
	userName,
	userImage,
	storyImage,
	createStory,
}) => {
	return (
		<>
			{!createStory && (
				<div className="relative h-56 w-36 overflow-hidden bg-[#d4d4ce] shadow-lg rounded-xl mx-auto mb-4 cursor-pointer transition-transform transform hover:translate-y-[-5px] hover:border-[#1877f2]">
					<Image
						src={storyImage || userImage || '/default-story.jpg'}
						alt={`${userName || 'User'}'s Story`}
						layout="fill"
						objectFit="cover"
					/>
					<Avatar
						url={userImage || storyImage}
						alt={userName || 'User'}
						className="absolute top-2 left-2 border-2 border-[#1877f2]"
					/>
					<div className="absolute bottom-6 left-6 text-wheat  text-sm shadow-md text-white font-bold">
						{userName || 'Unknown User'}
					</div>
				</div>
			)}
		</>
	)
}

export default Story
