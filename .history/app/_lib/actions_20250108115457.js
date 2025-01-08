'use server'
import { signIn, signOut } from './auth'
import { redirect } from 'next/navigation'
export async function signInAction() {
  await signIn('github', { redirectTo: '/account' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' })
}

export async function signInActionByEmail(formData) {
  try {
    await signIn('credentials', formData)
    redirect(`/account`)
  } catch (error) {
    console.log(error)
  }
}
