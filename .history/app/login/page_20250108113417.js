// import SignInButton from '../_components/SignInButton'
import { signInActionByEmail } from '../_lib/actions'

export default function Page() {
  return (
    <div className='flex flex-col gap-10 mt-10 items-center'>
      <h2 className='text-3xl font-semibold'>Sign in to access your email</h2>
      <form action={signInActionByEmail}>
        <label>
          Email
          <input
            name='email'
            type='email'
          />
        </label>
        <button className='flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium'>
          Sign In
        </button>
      </form>
    </div>
  )
}
