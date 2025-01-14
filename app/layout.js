import '@/app/_styles/globals.css'
import { Josefin_Sans } from 'next/font/google'
import Header from '@/app/_components/Header'
import { ReservationProvider } from '@/app/_components/ReservationContext'
import Test from '@/app/_components/Test'
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap'
})
export const metadata = {
  title: {
    template: '%s the world osis',
    default: 'the world next'
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-gray-100 min-h-screen flex flex-col`}
      >
        <Header />
        {/* <Test></Test> */}
        <div className='flex-1 px-8 py-12 grid'>
          <main className='"max-w-7xl mx-auto w-full'>
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  )
}
