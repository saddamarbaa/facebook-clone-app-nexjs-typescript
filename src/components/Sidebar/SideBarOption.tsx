import { cn } from '@/lib/utils'
import { getRandomIntNumberBetween } from '../../lib/api-util'
import { useMemo } from 'react'

type OptionProps = {
	Icon?: React.ElementType
	title?: string
	color?: string
	option?: string
	IconClassNames?: string
}

const Option: React.FunctionComponent<OptionProps> = ({
	Icon,
	title,
	color,
	option,
	IconClassNames,
}) => {
	// Memoize the random number to avoid re-rendering issues
	const randomNumber = useMemo(() => getRandomIntNumberBetween(1, 10), [])

	return (
		<div className="flex items-center cursor-pointer p-3 transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-800">
			{Icon && (
				<Icon
					style={{ color: color }}
					className={cn('lg:w-7 lg:h-7 h-6 w-6', IconClassNames)}
				/>
			)}

			<div className="relative ml-3 hidden lg:flex flex-col">
				<p>{title}</p>
				{option && (
					<div className="absolute bottom-[-1rem] flex items-center text-blue-600 text-[12px]">
						{randomNumber}
						<span className="ml-1 font-bold ">{option}</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default Option
