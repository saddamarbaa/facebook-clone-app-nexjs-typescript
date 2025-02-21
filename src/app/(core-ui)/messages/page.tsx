import MessagePage from '@/components/Message/MessagePage'
import SideBar from '@/components/Sidebar'
import Widget from '@/components/Widget'

import React from 'react'

export default function Page() {
	return (
		<>
			<SideBar />
			<MessagePage />
			<Widget />
		</>
	)
}
