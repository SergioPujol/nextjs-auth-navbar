import Navbar from '@/app/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import RegisterModal from '@/app/components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={inter.className}>
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser}/>
        {children}
        </body>
    </html>
  )
}
