import React from 'react'
import { mockedConnections } from '@/lib/mockData/Connection'
import NetworkItem from './NotificationItem'

export default function NotificationPage() {
	return (
		<section className="flex flex-1 flex-col  pb-8  mx-5  space-y-6  ">
			{mockedConnections.map((connection) => (
				<NetworkItem key={connection.id} connection={connection} />
			))}
		</section>
	)
}
