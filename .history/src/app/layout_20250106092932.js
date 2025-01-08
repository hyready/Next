import Logo from './components/Logo'
export const metadata = {
  title: 'the world next'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <Logo></Logo>
        </header>

        {children}
      </body>
    </html>
  )
}
