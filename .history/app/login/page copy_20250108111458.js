import SignInButton from '../_components/SignInButton'

export default function Page() {
  return (
    <form
      action={async formData => {
        'use server'
        await signIn('credentials', formData)
      }}
    >
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