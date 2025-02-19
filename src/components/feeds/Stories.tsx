import { ChevronRight, PlusCircle } from 'lucide-react'
import React from 'react'
import Story from './ Story'

const Stories = () => {
	return (
		<div className="relative  items-center gap-4 hidden lg:flex justify-between w-full">
			<div className="absolute right-0 bottom-24 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg cursor-pointer z-50">
				<ChevronRight size={24} />
			</div>

			<div className="absolute left-[3.375rem] bottom-[4.125rem] w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg cursor-pointer">
				<PlusCircle
					size={40}
					className="text-blue-600"
					style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}
				/>
			</div>

			<Story
				userName="Saddam Arbaa"
				userImage="/images/saddam2.jpg"
				storyImage="/friends/saddam.jpg"
			/>
			<Story
				userName="Susan Wojcicki"
				userImage="/friends/susan-2.jpg"
				storyImage="/friends/susan.webp"
			/>
			<Story
				userName="Mark Zuckerberg"
				userImage="/friends/mark.jpg"
				storyImage="/friends/mark2.jpg"
			/>
			<Story
				userName="Sundar Pichai"
				userImage="/friends/sudar.png"
				storyImage="/friends/Sundar_pichai.png.webp"
			/>
		</div>
	)
}

export default Stories
