import Logo from './_components/Logo'
import Navigation from './_components/Navigation'
import '@/app/_styles/globals.css'
export const metadata = {
  title: 'the world next'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-primary-950 text-gray-100 min-h-screen'>
        <header>
          <Logo />
          <Navigation></Navigation>
        </header>

        {children}
      </body>
    </html>
  )
}
