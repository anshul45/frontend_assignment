import  { useState } from 'react';
import Step from './Step';

const Steps = () => {
  const [allSteps, setAllSteps] = useState([
    { logo: <i className="ri-map-pin-2-fill"></i>, step: "Step 1", data: "Address", active: false },
    { logo: <i className="ri-shopping-cart-2-fill"></i>, step: "Step 2", data: "Shipping", active: false },
    { logo: <i className="ri-secure-payment-line"></i>, step: "Step 3", data: "Payment", active: true },
  ]);

  const handleStepClick = (index:number) => {
    setAllSteps(prevSteps =>
      prevSteps.map((step, i) => ({
        ...step,
        active: i === index, 
      }))
    );
  };

  return (
    <div className='lg:pl-40 lg:pr-48 flex justify-between my-16 md:pl-20 md:pr-24 sm:mx-2'>
      {allSteps.map((data, index) => (
        <Step
          data={data}
          key={index}
          onClick={() => handleStepClick(index)}
        />
      ))}
    </div>
  );
};

export default Steps;
