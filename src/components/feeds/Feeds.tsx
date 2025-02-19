import AddPost from './AddPost'
import StaticPosts from './StaticPosts'
import Stories from './Stories'

const Feeds: React.FunctionComponent = () => {
	return (
		<div className="flex flex-col items-center flex-1 pb-8 md:min-w-[34.375rem] mx-5 md:mx-0 max-w-2xl ">
			{/* {showCompose && <ModalOverlay />} */}
			<Stories />
			<AddPost />
			<StaticPosts />
		</div>
	)
}

export default Feeds
