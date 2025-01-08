import SideNavigation from '../_components/SideNavigation'

export default function Layout({ children }) {
  return (
    <div className='grid grid-cols-[]'>
      <SideNavigation />
      <main>{children}</main>
    </div>
  )
}
