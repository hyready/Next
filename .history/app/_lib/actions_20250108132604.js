'use server'
import { signIn, signOut } from './auth'

export async function signInAction() {
  await signIn('github', { redirectTo: '/account' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' })
}

export async function signInActionByEmail(formData) {
  await signIn('credentials', formData)
}

export async function updateGuset(formData) {}
