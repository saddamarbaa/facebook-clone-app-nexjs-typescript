'use client'

import { useState } from 'react'

import ChatList from './ChatList'
import SearchBar from './SearchBar'
import ChatHeader from './ChatHeader'
import { Card } from '../ui/card'

export default function Chat() {
	const [showChat, setShowChat] = useState(false)

	return (
		<Card className=" fixed bottom-0 right-4  w-full   max-w-xs overflow-hidden  border   shadow-2xl rounded-t-lg  cursor-pointer fex flex-col space-y-3 z-50 ">
			<ChatHeader
				photoURL={'/images/tem-img.png'}
				showChat={showChat}
				setShowChat={setShowChat}
			/>
			{showChat && (
				<div className="border-t p-2 dark:border-0">
					<div className="px-2">
						<SearchBar />
					</div>
					<ChatList />
				</div>
			)}
		</Card>
	)
}
