'use client'
import { useOptimistic } from 'react'
import ReservationCard from './ReservationCard'

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) =>
      curBookings.filter(item => item.id !== bookingId)
  )
  return (
    <ul className='space-y-6'>
      {bookings.map(booking => (
        <ReservationCard
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  )
}

export default ReservationList