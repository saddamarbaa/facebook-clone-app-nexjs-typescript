import NotificationPage from '@/components/Notification/NotificationPage'
import SideBar from '@/components/Sidebar'
import Widget from '@/components/Widget'

import React from 'react'

export default function Page() {
	return (
		<>
			<SideBar />
			<NotificationPage />
			<Widget />
		</>
	)
}
