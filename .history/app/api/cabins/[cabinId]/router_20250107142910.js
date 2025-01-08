import { getBookedDatesByCabinId, getCabin } from '@/app/_lib/data-service'
export async function GET(request, params) {
  const cabinId = params.cabinId
  try {
    const [cabin, bookedDates] = await Promise.all([
      getBookedDatesByCabinId(cabinId),
      getCabin(cabinId)
    ])
    Response.json({
      cabin,
      bookedDates
    })
  } catch (error) {
    Response.json({
      message: 'Cabin not found'
    })
  }
}

export async function GET(request, { params }) {
  const { cabinId } = params

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId)
    ])

    return Response.json({ cabin, bookedDates })
  } catch {
    return Response.json({ message: 'Cabin not found' })
  }
}
