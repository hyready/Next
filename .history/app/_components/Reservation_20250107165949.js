import { getBookedDatesByCabinId, getSettings } from '@/app/_lib/data-service'
import DateSelector from './DateSelector'
import ReservationForm from './ReservationForm'
import { auth } from '../_lib/auth'
import LoginMessage from './LoginMessage'

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id)
  ])
  const session = await auth()
  return (
    <div className='grid grid-cols-2 min-h-[400px] border border-primary-800 '>
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      ></DateSelector>
      {session?.user ? (
        <ReservationForm
          cabin={cabin}
          user={session.user}
        ></ReservationForm>
      ) : (
        <LoginMessage></LoginMessage>
      )}
    </div>
  )
}

export default Reservation
