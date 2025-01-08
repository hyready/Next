import SideNavigation from '../_components/SideNavigation'

export default function Layout() {
  return (
    <div className=''>
      <SideNavigation />
      <main>{children}</main>
    </div>
  )
}
