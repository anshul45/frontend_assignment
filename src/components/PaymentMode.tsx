import { useState } from "react"


const PaymentMode = () => {
    const[mode, setMode] = useState([{
        mode:"Credit Card",
        active:true
    },{
        mode:"PayPal",
        active:false
    },{
        mode:"PayPal Credit",
        active:false
    }])

    const handleClick = (index:number) => {
        setMode((prevMode) =>
            prevMode.map((item, i) => ({
              ...item,
              active: i === index 
            }))
          );
    }


  return (
    <div className="flex gap-14 my-5">
        {mode.map((data, index) =>(
            <div className={`${data.active?"border-b-[1px] border-black text-black" : "text-gray-400"} cursor-pointer text-sm`} key={index} onClick={() =>handleClick(index)}>{data.mode}</div>
        ) )}
    </div>
  )
}

export default PaymentMode