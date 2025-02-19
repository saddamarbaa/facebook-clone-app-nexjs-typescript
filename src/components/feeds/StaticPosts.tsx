import React from 'react'
import Post from './Post'
import { mockPosts } from '@/lib/mockData/posts'
import { CommentT } from '@/types'

const StaticPosts: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			{mockPosts.map((post, index) => (
				<Post
					// Combine index, random number, and timestamp for a more unique key
					key={post?.id || `post-${index}-${Date.now()}-${Math.random()}`}
					userName={post?.name || ''}
					userImage={post?.imgUrl || ''}
					postImage={post?.optionPostImage}
					postHeading={post?.title || ''}
					postContent={post?.postContent}
					isVideo={post?.isVideo}
					videoSrc={post?.videoSrc}
					comments={post?.comments as unknown as CommentT[]}
				/>
			))}
		</React.Fragment>
	)
}

export default StaticPosts
