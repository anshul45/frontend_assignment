import PaymentMode from "./PaymentMode"
import cardImg from "../assets/card.png"
import DataField from "./DataField"
import Buttons from "./Buttons"

const Payment = () => {
  return (
    <div className="flex-[0.54] ml-24 w-full">
        <div className="text-xl">Payment</div>
        <PaymentMode/>
        <img className="my-10" src={cardImg}/>
        <DataField/>
        <Buttons/>
    </div>
  )
}

export default Payment