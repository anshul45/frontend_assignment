
const Product = ({data}:any) => {
  return (
    <div className="flex justify-between bg-gray-400 px-5 py-4 rounded-lg items-center">
        <div className="flex gap-4 items-center">
        <img src={data.img} aria-label="product" width={35} height={20}/>
        <div>{data.desc}</div>
        </div>
        <div>${data.price}</div>
    </div>
  )
}

export default Product