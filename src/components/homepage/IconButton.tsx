import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface IconButtonProps {
	Icon: LucideIcon
	badgeCount?: number
	className?: string
	iconClassName?: string
}

const IconButton: React.FC<IconButtonProps> = ({
	Icon,
	badgeCount = null,
	className,
	iconClassName,
}) => {
	return (
		<div
			className={cn(
				'relative group px-7 py-4 cursor-pointer transition-all duration-200 ease-in-out hover:rounded',
				'hover:bg-gray-100 dark:hover:bg-gray-800',
				className,
			)}>
			<Icon
				className={cn(
					'w-7 h-7 transition-colors group-hover:text-blue-600',
					// Light mode icon color
					'text-gray-600 dark:text-gray-300',
					// Icon-specific classes
					iconClassName,
				)}
			/>

			{badgeCount !== null && (
				<span className="absolute -top-[14px] right-[13px] bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
					{badgeCount}
				</span>
			)}
		</div>
	)

	return (
		<div
			className={cn(
				'relative group p-2 rounded-full cursor-pointer transition-all duration-200 ease-in-out',
				'hover:bg-gray-200 dark:hover:bg-gray-800 hover:shadow-md dark:hover:shadow-lg',
				className,
			)}>
			<Icon
				className={cn(
					'w-7 h-7 transition-colors group-hover:text-blue-600',
					// Light mode icon color
					'text-gray-600 dark:text-gray-300',
					// Icon-specific classes
					iconClassName,
				)}
			/>

			{badgeCount !== null && (
				<span className="absolute -top-[8px] right-[13px] bg-red-500 text-white text-[11px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
					{badgeCount}
				</span>
			)}
		</div>
	)
}

export default IconButton
