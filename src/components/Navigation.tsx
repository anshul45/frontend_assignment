import { useState } from "react";

const Navigation = () => {
  const [nav, setNav] = useState([
    { link: "Home", active: true },
    { link: "About", active: false },
    { link: "Contact Us", active: false },
    { link: "Blog", active: false }
  ]);

  const handleNavClick = (index:number) => {
    setNav((prevNav) =>
      prevNav.map((item, i) => ({
        ...item,
        active: i === index 
      }))
    );
  };

  return (
    <div className="flex md:gap-4 lg:gap-14">
      {nav.map((data, index) => (
        <div
          key={index}
          className={`${data.active ? "text-black" : "text-[#bcb8b1]"} cursor-pointer`}
          onClick={() => handleNavClick(index)}
        >
          {data.link}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
