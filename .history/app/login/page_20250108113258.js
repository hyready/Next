// import SignInButton from '../_components/SignInButton'
import { signInActionByEmail } from '../_lib/actions'

export default function Page() {
  return (
    <div className='flex flex-col gap-10 mt-10 items-center'>
      <h2 className='text-3xl font-semibold'>
        Sign in to access your guest area
      </h2>
      <SignInButton></SignInButton>
    </div>
  )
}


export default function Page() {
  return (
    <form action={signInActionByEmail}>
      <label>
        Email
        <input
          name='email'
          type='email'
        />
      </label>
      <button>Sign In</button>
    </form>
  )
}
