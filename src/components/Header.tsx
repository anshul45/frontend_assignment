import Icons from "./Icons"
import Logo from "./Logo"
import Navigation from "./Navigation"
import Search from "./Search"

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-gray-500 h-[89px] pl-40 pr-24">
        <Logo/>
        <Search/>
        <Navigation/>
        <Icons/>
    </div>
  )
}

export default Header