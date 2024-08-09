
const Footer = () => {
  return (
    <div className='bg-black text-white pl-40 pr-64 py-[97px]'>
        <div className='flex justify-between text-sm font-light'>
        <div>
            <h1 className="font-semibold text-lg">Cyber</h1>
            <p className='w-80 mt-6 leading-6'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        </div>
        <div className="leading-10 pr-24">
            <h1 className="text-base font-semibold">Services</h1>
            <div>Bonus program</div>
            <div>Gift cards</div>
            <div>Credit and payment</div>
            <div>Service contracts</div>
            <div>Non-cash account</div>
            <div>Payment</div>
        </div>
        <div className="leading-10">
            <h1 className="text-base font-semibold">Assistance to the buyer</h1>
            <div>Find an order</div>
            <div>Terms of delivery</div>
            <div>Exchange and return of goods</div>
            <div>Guarantee</div>
            <div>Frequently asked questions</div>
            <div>Terms of use of the site</div>
        </div>
        </div>
        <div className='flex gap-8 text-lg mt-5'>
          <i className="ri-twitter-fill"></i>
          <i className="ri-facebook-fill"></i>
          <i className="ri-tiktok-fill"></i>
          <i className="ri-instagram-fill"></i>
        </div>
    </div>
  )
}

export default Footer