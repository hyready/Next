'use server'
import { revalidatePath } from 'next/cache'
import { signIn, signOut, auth } from './auth'
import { supabase } from './supabase'

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
  //已经鉴权，是否还需要在这里做鉴权,一方面获取用户信心
  const session = await auth()
  if (!session) {
    throw new Error('请登录后再操作')
  }

  const nationalID = formData.get('nationalID')
  const [nationality, countryFlag] = formData.get('nationality').split('%')

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error('Please provide a valid national ID')
  }
  const updatedFields = { nationalID, nationality, countryFlag }
  const { error } = await supabase
    .from('guests')
    .update(updatedFields)
    .eq('id', session.user.guestId)
    .select()
    .single()

  if (error) {
    console.error(error)
    throw new Error('Guest could not be updated')
  }
  revalidatePath('/account/profile')
}

export async function deleteReservation(bookingId) {
  const session = await auth()
  if (!session) {
    throw new Error('请登录后再操作')
  }
  //只能删除自己的

  const bookingIds = await getBookings(session)
}
