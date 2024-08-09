import Product from './Product'
import img from "../assets/51uD1lmrV8L._AC_SX679_.jpg"

const Summary = () => {

const productData=[{
  img:img,
  desc:"Apple iPhone 14 Pro Max 128Gb",
  price:"1399"
},
{
  img:img,
  desc:"AirPods Max Silver",
  price:"549"
},
{
  img:img,
  desc:"Apple Watch Series 9 GPS 41mm",
  price:"399"
}
]

  return (
    <div className='flex-[0.5] border-[1px] px-6 py-6 rounded-lg'>
      <h1>Summary</h1>
      <div className='flex flex-col gap-5 my-5'>
        {productData.map((data,index) => (
          <Product data={data} key={index}/>
        ))}
      </div>
      <h3>Address</h3>
      <div className='py-4'>1131 Dusty Townline, Jacksonville, TX 40322</div>
      <h3>Shipment method</h3>
      <div className='py-4'>Free</div>
      <div className='flex justify-between'>
        <div>Subtotal</div>
        <div>$2347</div>
      </div>
      <div className='flex justify-between py-4'>
        <div>Estimated Tax</div>
        <div>$50</div>
      </div>
      <div className='flex justify-between pb-4'>
        <div>Estimated shipping & Handling</div>
        <div>$29</div>
      </div>
      <div className='flex justify-between pb-4'>
        <div>Total</div>
        <div>$2426</div>
      </div>
    </div>
  )
}

export default Summary