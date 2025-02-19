import { CommentT } from '@/types'
import Comment from './Comment'

export default function Comments(props: { comments: CommentT[] }) {
	return (
		<div
			className="my-2 mt-5 max-h-60 space-y-5 hover:overflow-y-scroll border-t border-gray-100 p-5 px-8 dark:border-gray-800
 ">
			{props?.comments.map((comment, index: number) => (
				<Comment
					comment={comment}
					key={`${index}-${Math.random()}`}
					hideBorder={index === props?.comments?.length - 1}
				/>
			))}
		</div>
	)
}
