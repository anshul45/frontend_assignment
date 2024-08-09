
const Footer = () => {
  return (
    <div className='bg-black text-white py-[97px] xl:pl-40 xl:pr-64 lg:px-24  sm:px-10'>
        <div className='md:flex md:flex-row md:justify-between text-sm font-light sm:flex sm:flex-col sm:justify-center sm:items-center'>
        <div className="sm:text-center md:text-start">
            <h1 className="font-semibold text-lg">Cyber</h1>
            <p className=' mt-6 leading-6 xl:w-80 md:w-40'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        </div>
        <div className="leading-10 pr-24 md:mt-0 md:text-start sm:pr-0 sm:text-center sm:mt-5">
            <h1 className="text-base font-semibold">Services</h1>
            <div>Bonus program</div>
            <div>Gift cards</div>
            <div>Credit and payment</div>
            <div>Service contracts</div>
            <div>Non-cash account</div>
            <div>Payment</div>
        </div>
        <div className="leading-10 md:mt-0 md:text-start sm:text-center sm:mt-5">
            <h1 className="text-base font-semibold">Assistance to the buyer</h1>
            <div>Find an order</div>
            <div>Terms of delivery</div>
            <div>Exchange and return of goods</div>
            <div>Guarantee</div>
            <div>Frequently asked questions</div>
            <div>Terms of use of the site</div>
        </div>
        </div>
        <div className='md:flex md:justify-normal gap-8 text-lg mt-5 sm:flex sm:justify-center'>
          <i className="ri-twitter-fill"></i>
          <i className="ri-facebook-fill"></i>
          <i className="ri-tiktok-fill"></i>
          <i className="ri-instagram-fill"></i>
        </div>
    </div>
  )
}

export default Footer