
import Payment from './Payment'
import Summary from './Summary'

const PaymentPage = () => {
  return (
    <div className='xl:pl-[140px] xl:pr-[107px] xl:flex xl:flex-row mb-16 md:flex md:flex-col md:gap-20'>
        <Summary/>
        <Payment/> 
    </div>
  )
}

export default PaymentPage