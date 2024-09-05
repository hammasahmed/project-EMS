import React from 'react'
import food1 from '../assets/food1.png'
const My_listing = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex'>
        <img src={food1} alt="" className='w-20' />
        <p >This is description of things</p>
        </div>
        <div className='flex gap-3'>
        <button className=' transition-all border-2 border-purple-950 rounded-lg hover:rounded-full p-2'>Update</button>
        <button className=' transition-all border-2 border-purple-950 rounded-lg hover:rounded-full p-2 hover:bg-red-700 hover:text-white'>Delete</button>
        </div>
    </div>
  )
}

export default My_listing