'use server'
import { signIn, signOut } from './auth'
import { redirect } from 'next/navigation'
export async function signInAction() {
  await signIn('github')
}
