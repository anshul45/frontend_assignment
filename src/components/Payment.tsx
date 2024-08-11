import PaymentMode from "./PaymentMode"
import cardImg from "../assets/card.png"
import DataField from "./DataField"
import Buttons from "./Buttons"

const Payment = () => {
  return (
    <div className="xl:flex-[0.54] xl:ml-[85px] xl:mt-0 xl:mx-0 lg:mx-36 md:mx-20 sm:mt-16 sm:mx-2">
        <div className="text-xl">Payment</div>
        <PaymentMode/>
        <img className="my-10" src={cardImg}/>
        <DataField/>
        <Buttons/>
    </div>
  )
}

export default Payment