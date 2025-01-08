// import SignInButton from '../_components/SignInButton'
import { signInActionByEmail } from '../_lib/actions'

export default function Page() {
  return (
    <div className='flex flex-col gap-10 mt-10 items-center'>
      <h2 className='text-3xl font-semibold'>Sign in to access your email</h2>
      <form
        action={signInActionByEmail}
        className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'
      >
        <div className='space-y-2'>
          <label>Full name</label>
          <input
            name='fullName'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
          />
        </div>

        <div className='space-y-2'>
          <label>Email address</label>
          <input className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400' />
        </div>
        <label>
          Email
          <input
            name='email'
            type='email'
          />
        </label>
        <button className='flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium'>
          <span> Sign In</span>
        </button>
      </form>
    </div>
  )
}
