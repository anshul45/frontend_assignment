
const Buttons = () => {
  return (
    <div className='mt-14'>

        <div className='text-sm flex items-center'> <input type="checkbox" 
       className="accent-black mr-2 w-3.5 h-3.5" 
       /> <p>Same as billing address</p></div>
        <div className='flex justify-between mt-12'>
            <div className='border-[1px] md:px-[96px] sm:px-[80px] w-fit py-5 rounded-lg border-black font-semibold cursor-pointer'>Back</div>
            <div className=' md:px-[96px] sm:px-[80px] w-fit py-5 rounded-lg bg-black font-semibold text-white cursor-pointer'>Pay</div>
        
        </div>
    </div>
  )
}

export default Buttons