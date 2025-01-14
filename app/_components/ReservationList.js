'use client'
import { useOptimistic } from 'react'
import ReservationCard from './ReservationCard'
import { deleteReservation } from '../_lib/actions'

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) =>
      curBookings.filter(item => item.id !== bookingId)
  )

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId)
    await deleteReservation(bookingId)
  }

  return (
    <ul className='space-y-6'>
      {optimisticBookings.map(booking => (
        <ReservationCard
          handleDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  )
}

export default ReservationList
