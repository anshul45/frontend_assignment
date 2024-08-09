import React from 'react'

const Buttons = () => {
  return (
    <div className='mt-14'>
        <div><input type="checkbox" className='mr-2 focus:outline-none' /> Same as billing address</div>
        <div className='flex justify-between mt-12'>
            <div className='border-[1px] px-[96px] w-fit py-5 rounded-lg border-black font-semibold'>Back</div>
            <div className=' px-[96px] w-fit py-5 rounded-lg bg-black font-semibold text-white'>Pay</div>
        
        </div>
    </div>
  )
}

export default Buttons