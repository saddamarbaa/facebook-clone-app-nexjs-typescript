import { CommentT } from '@/types'
import Avatar from '../ui/Avatar'

export default function Comment(props: {
	comment: CommentT
	hideBorder?: boolean
}) {
	// Function to generate a random number for "days ago" between 1 and 30
	const getRandomDaysAgo = () => Math.floor(Math.random() * 30) + 1

	return (
		<div
			key={props?.comment.timestamp?.nanoseconds}
			className="relative flex space-x-2">
			{!props?.hideBorder && (
				<hr className="border-twitter/30 absolute left-5 top-10 h-8 border-x dark:border-white/30" />
			)}

			<Avatar
				url={
					(props?.comment.user?.photoURL as string) ||
					'/images/default-avatar.png'
				}
				alt="User Avatar"
				className="w-8 h-8"
			/>
			<div>
				<div className="flex items-center space-x-1">
					<p className="mr-1 font-bold">{props?.comment.user.displayName}</p>
					<p className="hidden text-sm text-gray-500 lg:inline">
						@{props?.comment.user.displayName?.toLowerCase()}·
					</p>

					<span className="hidden text-gray-500 md:flex">
						{getRandomDaysAgo()} days ago
					</span>
				</div>
				<p>{props?.comment.text}</p>
			</div>
		</div>
	)
}
