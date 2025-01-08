function Filter() {
  return (
    <div className='flex border border-primary-800'>
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

function Button({ children, filter, activeFilter, handleFilter }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  )
}
export default Filter
