import SignInButton from '../_components/SignInButton'

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