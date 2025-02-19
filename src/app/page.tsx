import HomePage from '@/components/homepage/HomePage'
import Header from '@/components/homepage/Header'
import Sidebar from '@/components/Sidebar'
import Widget from '@/components/Widget'
import { delay } from '@/lib/api-util'

export default async function Home() {
	await delay() // Delay for 2000 milliseconds (2 seconds) by default
	return (
		<div className="">
			<Header />
			<main className="flex-1 flex max-w-[99.75rem] mx-auto w-full mt-7 justify-between">
				<Sidebar />
				<HomePage />
				<Widget />
			</main>
		</div>
	)
}
