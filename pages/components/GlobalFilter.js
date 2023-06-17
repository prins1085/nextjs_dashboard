import React from 'react'

const GlobalFilter = ({filter, setFilter}) => {
  return (
    <span>
        <input value={filter || ""} onChange={e => setFilter(e.target.value)} className='bg-[#1F2A40] px-2 py-2 rounded-md min-w-full lg:min-w-fit mb-3 outline-none' placeholder='Search'/>
    </span>
  )
}

export default GlobalFilter