'use server'
import { signIn, signOut, auth } from './auth'

export async function signInAction() {
  await signIn('github', { redirectTo: '/account' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' })
}

export async function signInActionByEmail(formData) {
  await signIn('credentials', formData)
}

export async function updateGuset(formData) {
  //已经鉴权，是否还需要在这里做鉴权
  const session = await auth()
  if (!session) {
    throw new Error('请登录后再操作')
  }

  const nationalID = formData.get('nationalID')
  const [] = formData.get('')
}
