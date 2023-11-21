import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'


export const metadata: Metadata = {
  title: 'Travel tapestry',
  description: 'Travel tapestry. A guide to travel and discover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-full">
          <Navbar />
          <SideBar />
          <main className="relative overflow-hidden">
            {children}
          </main>
          <Footer /> 
        </div>
      </body>
    </html>
  )
}
