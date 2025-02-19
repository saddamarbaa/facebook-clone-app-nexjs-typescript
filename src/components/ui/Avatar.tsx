import { clsx } from 'clsx'

type AvatarProps = {
	url: string
	alt?: string
	className?: string
	isOffLine?: boolean
	circleIconClassNames?: string
}

export default function Avatar({
	url = '/images/tem-img.png',
	className,
	alt,
}: AvatarProps) {
	return (
		<div className="relative inline-block">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={url}
				alt={alt}
				title={alt}
				className={clsx(
					'relative inline-flex items-center justify-center rounded-full h-11 w-11',
					className,
				)}
			/>
		</div>
	)
}
