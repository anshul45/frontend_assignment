
import Payment from './Payment'
import Summary from './Summary'

const PaymentPage = () => {
  return (
    <div className='pl-40 pr-32 flex mb-16'>
        <Summary/>
        <Payment/> 
    </div>
  )
}

export default PaymentPage