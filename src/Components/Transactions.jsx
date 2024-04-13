import React from 'react'

const Transactions = () => {
  return (
    <div>
      <div className='flex flex-col items-center mt-7 space-y-2'>
        <h1 className='font-bold text-xl tracking-wide'>Your Transactions</h1>
        <input
       className="bg-gray-200 rounded px-2 py-1 text-lg text-black outline-none w-full"
        type="search" name="" id="" 
        placeholder='Search your transactions'/>
      </div>
    </div>
  )
}

export default Transactions
