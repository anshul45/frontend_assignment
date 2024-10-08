import { FC } from "react"
interface StepProps {
  data: {
    logo: JSX.Element;
    step: string;
    data: string;
    active: boolean;
  };
  onClick: () => void;
}

const Step:FC<StepProps> = ({data, onClick}) => {

  return (
    <div className="md:flex md:items-center md:gap-2 sm:flex sm:items-center sm:gap-1 cursor-pointer" onClick={onClick}>
        <div className={`${data.active?"bg-black":"bg-[#bcb8b1]"} rounded-full px-1 text-white`}>{data.logo}</div>
        <div className={`${data.active?"text-black":"text-[#bcb8b1]"}`}>
        <div className="text-sm">{data.step}</div>
        <div className="text-xl">{data.data}</div>
        </div>
    </div>
  )
}

export default Step