import Header from '@/components/homepage/Header'

export default function RnootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<main className="flex-1 flex max-w-[99.75rem] mx-auto w-full mt-7 justify-between flex-wrap">
				{children}
			</main>
		</>
	)
}
