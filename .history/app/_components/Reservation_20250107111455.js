'use client'
import DateSelector from './DateSelector'
import ReservationForm from './ReservationForm'

function Reservation() {
  return (
    <div className='grid grid-cols-2 '>
      <DateSelector></DateSelector>
      <ReservationForm></ReservationForm>
    </div>
  )
}

export default Reservation
