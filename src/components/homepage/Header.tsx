import {
	Search,
	Bell,
	Monitor,
	Banknote,
	Video,
	Home,
	MessageCircleMore,
	Dock,
} from 'lucide-react'
import Image from 'next/image'
import IconButton from './IconButton'
import Link from 'next/link'
import { DarkModeToggle } from '../ui/ModeToggle'

const Header: React.FC = () => {
	return (
		<header className="w-full sticky top-0  z-110 shadow-md dark:shadow-lg p-4 md:px-8 bg-white dark:bg-gray-950 border md:py-0">
			<nav className="flex justify-between items-center max-w-[99.75rem] mx-auto">
				{/* Logo and Search */}
				<div className="flex items-center space-x-4 w-full max-w-xs">
					<Link href="/">
						<Image
							src="/images/Facebook-logo.svg"
							alt="logo"
							className="w-8 h-8 md:w-10 md:h-10"
							width={100}
							height={100}
						/>
					</Link>
					<div className="hidden sm:flex items-center bg-gray-200 rounded-full p-2 w-full max-w-[289px] dark:bg-transparent border-0 dark:border-1 dark:border">
						<Search className="text-base" />
						<input
							type="text"
							placeholder="Search Facebook"
							className="bg-transparent outline-none pl-2 text-sm"
						/>
					</div>
				</div>

				{/* Icons in the center */}
				<div className="hidden md:flex items-center flex-[0.4] md:space-x-6">
					<Link href="/">
						<IconButton
							Icon={Home}
							className="border-blue-500 border-b-2"
							iconClassName="text-blue-500 dark:text-blue-500"
						/>
					</Link>
					<Link href="/watch">
						<IconButton Icon={Video} />
					</Link>
					<Link href="/marketplace">
						<IconButton Icon={Banknote} />
					</Link>
					<Link href="/gaming">
						<IconButton Icon={Monitor} />
					</Link>
				</div>

				{/* User actions */}
				<div className="flex items-center space-x-4 md:space-x-6">
					<Link href="/home">
						<IconButton
							Icon={Home}
							className="block md:hidden"
							iconClassName="text-blue-500 dark:text-blue-500"
						/>
					</Link>
					<Link href="/groups">
						<IconButton
							Icon={Dock}
							iconClassName="w-6 h-6"
							className="hidden sm:block p-2 rounded-full cursor-pointer hover:rounded-full bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-900 dark:bg-gray-800 transition"
						/>
					</Link>
					<Link href="/messages">
						<IconButton
							badgeCount={7}
							Icon={MessageCircleMore}
							iconClassName="w-6 h-6"
							className="hidden sm:block p-2 rounded-full cursor-pointer hover:rounded-full bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-900 dark:bg-gray-800 transition"
						/>
					</Link>
					<Link href="/notifications">
						<IconButton
							Icon={Bell}
							badgeCount={87}
							iconClassName="w-6 h-6"
							className="hidden sm:block p-2 rounded-full cursor-pointer hover:rounded-full bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-900 dark:bg-gray-800 transition"
						/>
					</Link>
					<DarkModeToggle />
				</div>
			</nav>
		</header>
	)
}

export default Header
