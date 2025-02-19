import {
	ArrowUpIcon,
	CameraIcon,
	ImageIcon,
	SmileIcon,
	VideoIcon,
} from 'lucide-react'
import Avatar from '../ui/Avatar'
import { friends } from '@/lib/mockData/friends'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import Option from '../Sidebar/SideBarOption'

export const AddPost: React.FC = () => {
	const placeholder = `What's on your mind, (Adam)?`

	return (
		<div className="space-y-4  w-full">
			{/* Header */}
			<Card className="rounded-lg p-4 ">
				<div className="flex items-center space-x-4">
					<Avatar url={'/images/tem-img.png'} />
					<input
						type="text"
						placeholder={placeholder}
						className="flex-1 bg-gray-100 p-2 px-4 rounded-full  transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-800 dark:bg-gray-900 outline-none cursor-pointer"
					/>
				</div>
				{/* Options */}
				<div className="flex justify-around">
					<Option
						Icon={VideoIcon}
						title="Live Video"
						color="red"
						IconClassNames="w-5 h-5"
					/>
					<Option
						Icon={ImageIcon}
						title="Photo/Video"
						color="green"
						// IconClassNames="w-20 h-20"
					/>
					<Option
						Icon={SmileIcon}
						title="Feeling/Activity"
						color="#BB32B3"
						IconClassNames="w-5 h-5"
					/>
				</div>
			</Card>

			{/* Create Room */}
			<Card className="shadow rounded-lg p-4 flex items-center justify-between">
				<Button className="flex items-center space-x-2">
					<CameraIcon className="text-purple-500 w-6 h-6" />
					<span>Create Room</span>
				</Button>
				{/* Friends Display */}
				<div className="flex space-x-4 overflow-x-auto">
					{friends?.map((friend, index) => (
						<div
							key={index}
							className={`relative flex items-center ${
								index === 3 || index === 5 ? 'hidden md:flex' : ''
							}`}>
							<Avatar url={friend?.image} />
							<span
								className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${
									index === 3 || index === 5 || index === 6
										? 'bg-red-500'
										: 'bg-green-500'
								}`}></span>
						</div>
					))}
				</div>
				<ArrowUpIcon className="w-6 h-6 cursor-pointer" />
			</Card>
		</div>
	)
}

export default AddPost
