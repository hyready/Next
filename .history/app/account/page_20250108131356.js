import { auth } from '../_lib/auth'

export const metadata = {
  title: 'Guest area'
}

export default function Page() {
  const session = auth()
  console.log(session, '@')
  return (
    <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
      Welcome,{session?.user.name}
    </h2>
  )
}
