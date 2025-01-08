import SideNavigation from '../_components/SideNavigation'

export default function Layout({ children }) {
  return (
    <div className=''>
      <SideNavigation />
      <main>{children}</main>
    </div>
  )
}
