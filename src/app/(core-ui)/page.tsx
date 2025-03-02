import HomePage from '@/components/homepage/HomePage'
import SideBar from '@/components/Sidebar'
import Widget from '@/components/Widget'
import { delay } from '@/lib/api-util'
import React from 'react'

export default async function Home() {
	await delay(500) // Delay for 2000 milliseconds (2 seconds) by default
	return (
		<>
			<SideBar />
			<HomePage />
			<Widget />
		</>
	)
}
