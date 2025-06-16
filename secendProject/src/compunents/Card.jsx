import React from 'react'

const Card = ({name}) => {
  return (
    <div className='w-100 bg-green-300 flex items-center rounded-2xl shadow-2xl border-2 p-2 border-amber-200 justify-center flex-col m-2'>
        <div className='bg-amber-600 rounded-md w-full h-50 text-center'>
            <p>img</p>
        </div>
        <h2 className='text-3xl text-fuchsia-700 font-bold p-2'>{name}</h2>
        <p className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus vero magni blanditiis!</p>
    </div>
  )
}

export default Card