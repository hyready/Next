function Filter() {
  return (
    <div className='flex py-2 px-5'>
      <button className='text-primary-200 bg-primary-950 py-2 px-4 rounded-lg mr-2'>
        All
      </button>
      <button className='text-primary-200 bg-primary-950 py-2 px-4 rounded-lg mr-2'>
        Small
      </button>
      <button className='text-primary-200 bg-primary-950 py-2 px-4 rounded-lg mr-2'>
        Medium
      </button>
      <button className='text-primary-200 bg-primary-950 py-2 px-4 rounded-lg'>
        Large
      </button>
    </div>
  )
}

export default Filter
