const DataField = () => {
  return (
    <div className=''>
        <input className='border-[1px] w-full focus:outline-none px-3 py-2.5 my-2 rounded-md placeholder:text-sm' placeholder='Cardholder Name'/>
        <input className='border-[1px] w-full focus:outline-none px-3 py-2.5 my-2 rounded-md placeholder:text-sm' placeholder='Card Number'/>
        <div className='flex justify-between my-2'>
        <input className='border-[1px] w-[49%] focus:outline-none px-3 py-2.5 rounded-md placeholder:text-sm' placeholder='Exp.Date'/>
        <input className='border-[1px] w-[49%] focus:outline-none px-3 py-2.5 rounded-md placeholder:text-sm' placeholder='CVV'/>
        </div>

    </div>
  )
}

export default DataField