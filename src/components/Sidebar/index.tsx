import {
	Video,
	Bookmark,
	Flag,
	Calendar,
	Briefcase,
	Table,
	Star,
	UserCheck,
	Gamepad,
	Monitor,
	Settings,
	Sun,
	ChevronDown,
	LayoutDashboard,
} from 'lucide-react'
import React from 'react'
import Option from './SideBarOption'
import Image from 'next/image'

const SideBar: React.FunctionComponent = () => {
	return (
		<div className="flex-col min-h-screen max-w-sm md:w-full  flex mr-10 md:mr-0">
			<div id="fixed-position" className="fixed max-w-sm w-full">
				{/* Sidebar Header */}
				<div className="mb-4 relative flex items-center transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-800 p-2 ">
					{/* Avatar */}
					<div className="mr-4">
						<Image
							width={10}
							height={10}
							src={'/images/tem-img.png'}
							alt={'User'}
							className="lg:w-9 lg:h-9 w-7 h-7 rounded-full object-cover"
						/>
					</div>
					{/* Status Indicator */}
					<span
						className={`absolute  w-3 h-3   text-[11px] font-bold rounded-full  flex items-center justify-center 
						bg-green-500 left-[30px] top-[30px]`}></span>
					{/* Username */}
					<span className="font-bold hidden lg:flex">usernamr</span>
				</div>

				{/* Sidebar Body */}
				<div className="flex flex-col max-h-[75vh]  space-y-2">
					<Option
						Icon={UserCheck}
						title="Friends"
						color="#197EF3"
						option="request"
					/>
					<Option
						Icon={LayoutDashboard}
						title="Professional dashboard"
						color="#F34F6C"
					/>

					<Option Icon={Settings} title="Messenger Kid" color="#A0D977" />
					<Option Icon={Briefcase} title="Jobs" color="#DE7F22" option="Jobs" />
					<Option Icon={Table} title="Ads Manager" color="#197EF3" />
					<Option Icon={Monitor} title="Live Videos" color="#E42243" />
					<Option Icon={Video} title="Watch" color="#197EF3" option="new" />
					<Option Icon={Bookmark} title="Saved" color="#BB32B3" />
					<Option Icon={Flag} title="Pages" color="#DE7F22" />
					<Option
						Icon={Calendar}
						title="Events"
						color="#F34F6C"
						option="notifications"
					/>
					<Option Icon={Star} title="Favorites" color="#FAD857" />
					<Option
						Icon={Gamepad}
						title="Video Games"
						color="#DE7F22"
						option="new"
					/>
					<Option
						Icon={Sun}
						title="Weather"
						color="#F8CC47"
						option="notifications"
					/>
					<Option Icon={ChevronDown} title="Show more" color="#197EF3" />
				</div>
			</div>
		</div>
	)
}

export default SideBar
