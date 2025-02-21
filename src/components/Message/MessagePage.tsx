import { mockedMessages } from '@/lib/mockData/Message'
import React from 'react'
import MessageItem from './MessageItem'

export default function MessagePage() {
	return (
		<section className="flex flex-1 flex-col  pb-8  mx-5  space-y-6  ">
			{mockedMessages.map((message, index) => (
				<MessageItem
					message={message}
					key={message.id + `post-${index}-${Math.random()}`}
				/>
			))}
		</section>
	)
}
