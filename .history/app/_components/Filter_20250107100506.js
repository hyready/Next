import { usePathname, useSearchParams } from 'next/navigation'

function Filter() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeFilter = 'all'
  function handleFilter(filter) {
    const searchParams = new URLSearchParams(window.location.search)
    return
  }
  return (
    <div className='border border-primary-800 flex'>
      <Button
        filter='all'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter='small'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        2&mdash;3 guests
      </Button>
      <Button
        filter='medium'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter='large'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
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
