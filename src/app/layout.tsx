import type { Metadata } from 'next'

import '../styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
	// metadataBase: new URL('https://facebook-clone.example.com'),
	title: {
		default: 'Facebook Clone',
		template: `%s | Facebook Clone`,
	},
	description:
		'Facebook Clone built with Next.js + Tailwind CSS. This clone replicates the core functionalities of Facebook, including posts, comments, friend requests, and real-time interactions. Built by Saddam Arbaa, this project demonstrates modern frontend technologies and user experience design.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className="bg-[#f0f2f5]  dark:bg-zinc-950  overflow-hidden overflow-y-auto flex flex-col h-screen">
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
