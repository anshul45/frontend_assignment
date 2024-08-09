
const Icons = () => {
    const icons = [<i className="ri-heart-3-line"></i>,<i className="ri-shopping-cart-2-line"></i>,<i className="ri-user-line"></i>]
  return (
    <div className="flex md:gap-3 lg:gap-7 text-2xl  cursor-pointer">
        {icons.map((icon, index) => (<div key={index}>{icon}</div>))}
    </div>
  )
}

export default Icons