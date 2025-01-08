export default function Layout() {
  return (
    <div>
      <Header />
      <main className='max-w-7xl mx-auto px-8 py-12'>{children}</main>
    </div>
  )
}
