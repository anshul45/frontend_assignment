import Icons from "./Icons"
import Logo from "./Logo"
import Navigation from "./Navigation"
import Search from "./Search"

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-gray-500 h-[89px] xl:pl-40 xl:pr-32 xl:bg-yellow-100  lg:bg-green-100 lg:px-10 md:bg-orange-100 md:px-8   sm:bg-red-100" >
      <div className="flex items-center md:gap-3.5 lg:gap-10">
        <Logo/>
        <Search/>
      </div>
        <Navigation/>
        <Icons/>
    </div>
  )
}

export default Header