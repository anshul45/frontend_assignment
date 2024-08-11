import { useState } from "react"
import Icons from "./Icons"
import Logo from "./Logo"
import Navigation from "./Navigation"
import Search from "./Search"

const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center border-b-[1px] border-gray-500 h-[89px] xl:pl-40 xl:pr-32 lg:px-10  md:px-8   sm:px-16" >
      <div className="flex items-center md:gap-3.5 lg:gap-10">
        <Logo/>
        <Search/>
      </div>
        <Navigation/>
        <Icons/>
       {isOpen? 
        <i className="ri-close-line md:hidden cursor-pointer z-50" onClick={() =>setIsOpen(pre => !pre)}></i>
      :<i className="ri-menu-line md:hidden cursor-pointer z-50" onClick={() =>setIsOpen(pre => !pre)}></i> 
      }
      {
        isOpen && <div className="absolute w-[100%] h-[492.5vh]" onClick={() => setIsOpen(false)}></div>
      }
      {
isOpen &&
        <div className="bg-white absolute right-0 top-[90px] w-28 h-40 px-4">
      <div className="my-1">Home</div>
      <div className="my-1">About</div>
      <div className="my-1">Contact Us</div>
      <div className="my-1">Blog</div>
      <div className="my-1">Login</div>

      </div>
      }
      
    </div>
  )
}

export default Header