import AuthChecker from './components/AuthChecker'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const inter = Space_Grotesk({ subsets: ['latin'], weight:['300' , '400' , '500' , '600' , '700' ] })

export const metadata = {
  title: 'vShare',
  description: 'Join a community that values your privacy and understands the cathartic release that comes with sharing your innermost thoughts. Embrace liberation as you connect with others who, like you, have stories to tell but may not have found their voice.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthChecker/>
        {children}</body>
    </html>
  )
}
