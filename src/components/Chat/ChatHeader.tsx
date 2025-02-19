import { X, Phone, Minus, Video } from 'lucide-react'
import Avatar from '../ui/Avatar'

interface ChatHeaderProps {
	photoURL: string
	showChat: boolean
	setShowChat: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ChatHeader({ photoURL, setShowChat }: ChatHeaderProps) {
	return (
		<div
			className="text-black dark:text-white flex justify-between items-center px-3"
			onClick={() => setShowChat((prev) => !prev)}>
			<div className="flex space-x-2 items-center mt-2">
				<Avatar url={photoURL} />
				<p className="font-bold text-sm">Messaging</p>
			</div>
			<div className="flex items-center space-x-3">
				<Phone className="text-base cursor-pointer" color="#BB32B3" />
				<Video className="text-xl cursor-pointer" color="#BB32B3" />
				<Minus className="text-xl cursor-pointer" color="#BB32B3" />
				<X className="text-xl cursor-pointer" color="#BB32B3" />
			</div>
		</div>
	)
}
