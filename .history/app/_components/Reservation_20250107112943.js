import { getBookedDatesByCabinId, getSettings } from '@/app/_lib/data-service'
import DateSelector from './DateSelector'
import ReservationForm from './ReservationForm'

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id)
  ])

  return (
    <div className='grid grid-cols-2 min-h-[400px] border border-primary-800 '>
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      ></DateSelector>
      <ReservationForm cabin={cabin}></ReservationForm>
    </div>
  )
}

export default Reservation
