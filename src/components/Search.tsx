
import { useRef } from "react"
const Search = () => {
const inputRef = useRef<HTMLInputElement>(null)
const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  };
  return (
    <div className=" bg-gray-100 rounded-md cursor-text py-3  flex items-center md:w-[240px] lg:w-[300px] xl:w-[370px]"> 
        <i className="ri-search-line px-3 text-xl text-gray-500 cursor-pointer" onClick={handleIconClick} ></i>
        <input className="bg-inherit focus:outline-none w-full placeholder:text-sm" ref={inputRef} placeholder="Search"/>
    </div>
  )
}

export default Search