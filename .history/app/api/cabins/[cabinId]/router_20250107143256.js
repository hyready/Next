import { getBookedDatesByCabinId, getCabin } from '@/app/_lib/data-service'
export async function GET(request, { params }) {
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
