import FeedShimmer from './FeedShimmer'
import ShimmerHeader from './ShimmerHeader'
import ShimmerWidget from './ShimmerWidget'
import SidebarShimmer from './SidebarShimmer'

function ShimmerLoader() {
	return (
		<>
			<ShimmerHeader />
			<div className="flex flex-row min-h-full items-stretch max-w-[99.75rem] overflow-hidden mx-auto   mt-5  w-full">
				<SidebarShimmer />
				<div className="flex-1    flex flex-col  mx-7 mb-52">
					<FeedShimmer />
				</div>
				<ShimmerWidget />
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
					<div>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={'/svg/loading-spinner.svg'}
							alt="Loading..."
							className="h-24"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default ShimmerLoader
