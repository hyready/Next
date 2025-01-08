'use client'
import { getBookedDatesByCabinId, getSettings } from '@/app/_lib/data-service'
import DateSelector from './DateSelector'
import ReservationForm from './ReservationForm'

function Reservation({ cabin }) {
  Promise.all([getSettings(), getBookedDatesByCabinId(cabin.id)])
  return (
    <div className='grid grid-cols-2 min-h-[400px] border border-primary-800 '>
      <DateSelector></DateSelector>
      <ReservationForm></ReservationForm>
    </div>
  )
}

export default Reservation
