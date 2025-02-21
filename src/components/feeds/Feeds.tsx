import AddPost from './AddPost'
import StaticPosts from './StaticPosts'
import Stories from './Stories'

const Feeds: React.FunctionComponent = () => {
	return (
		<div className="flex flex-1 flex-col  pb-8  mx-5 max-w-2xl ">
			<Stories />
			<AddPost />
			<StaticPosts />
		</div>
	)
}

export default Feeds
