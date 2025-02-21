import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface IconButtonProps {
	Icon: LucideIcon
	badgeCount?: number
	className?: string
	iconClassName?: string
	badgeClassName?: string
	'aria-label'?: string
	iconSize?: number // Customizable icon size
}

const IconButton: React.FC<IconButtonProps> = ({
	Icon,
	badgeCount = null,
	className,
	iconClassName,
	badgeClassName,
	'aria-label': ariaLabel,
	iconSize = 7, // Default icon size to rem units
}) => {
	return (
		<div
			role="button" // Making it behave like a button for screen readers
			tabIndex={0} // Allow keyboard focus
			aria-label={ariaLabel} // Adding accessibility label
			className={cn(
				'relative group p-3 cursor-pointer transition-all duration-200 ease-in-out hover:rounded-full',
				'hover:bg-gray-100 dark:hover:bg-gray-800',
				className,
			)}>
			<Icon
				className={cn(
					`w-${iconSize} h-${iconSize} transition-colors group-hover:text-blue-600`,
					'text-gray-600 dark:text-gray-300', // Default icon color
					iconClassName,
				)}
			/>

			{/* Conditionally render badge if present */}
			{badgeCount !== null && (
				<span
					className={cn(
						'absolute -top-[10px] right-[10px] bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center',
						'h-5 w-5', // Default badge size
						badgeClassName, // Allowing custom class for badge
					)}>
					{badgeCount}
				</span>
			)}
		</div>
	)
}

export default IconButton
