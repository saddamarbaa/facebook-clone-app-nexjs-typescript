export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			{/* <head /> */}
			<body className="bg-[#f0f2f5]  dark:bg-zinc-950  overflow-hidden overflow-y-auto flex flex-col h-screen">
				{children}
			</body>
		</html>
	)
}
