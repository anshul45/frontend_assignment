import Icons from "./Icons"
import Logo from "./Logo"
import Navigation from "./Navigation"
import Search from "./Search"

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-gray-500 h-[89px] pl-40 pr-32">
      <div className="flex items-center gap-10">
        <Logo/>
        <Search/>
      </div>
        <Navigation/>
        <Icons/>
    </div>
  )
}

export default Header