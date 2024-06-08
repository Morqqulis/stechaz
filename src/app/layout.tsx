import Providers from '@/components/common/Providers'
import { montserrat } from '@config/fonts'
import Footer from '@layout/Footer'
import Header from '@layout/Header'
import '@styles/globals.css'
import Searching from '@ui/Searching'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className="group" lang="az">
            <body className={`${montserrat.className} bg-background text-foreground dark`}>
                <Providers>
                    <div className="wrapper relative">
                        <Header />
                        {children}
                        <Footer />
                        <div className="absolute -right-full top-24 h-16 w-full overflow-hidden duration-300 group-[.search-active]:right-0">
                            <Searching className="absolute left-1/2 top-1/2 max-w-screen-md -translate-x-1/2 -translate-y-1/2 px-4" />
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
