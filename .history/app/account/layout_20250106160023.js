import SideNavigation from '../_components/SideNavigation'

export default function Layout({ children }) {
  return (
    <div className='grid grid-cols-[16rem_1fr]'>
      <SideNavigation />
      <main className='py-1'>{children}</main>
    </div>
  )
}
