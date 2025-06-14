import {React , useState} from 'react'

import { Button } from '@/components/UI/button';

function pricingHeader() {
    const [billingCycle, setBillingCycle] = useState("monthly");
  return (
    <div>
        <div className="container  pb-[130px]">
        <div className="text-center">
            <h2 className=" text-black pb-[30px] pt-[120px] text-3xl">
                Plans & <span className="text-[#00B7C1]">Pricing</span>
            </h2>
            <p className="text-gray-600 pb-[5px]">Looking for advanced features? Check out our latest plans</p>
            
        </div>
        <div className="flex justify-center bg-white border-grey-300 my-[30px] w-[20%] mx-auto">
            <Button onClick={() => setBillingCycle("monthly")}
            className={`w-[130px] text-white  capitalize h-[45px] rounded-3xl cursor-pointer

                ${billingCycle === "monthly" ? 'bg-[#00B7C1] text-white' : "bg-white text-black hover:!bg-white hover:!text-black"
                }`}
            >
                Monthly
                </Button>

                   <Button onClick={() => setBillingCycle("yearly")}
            className={`w-[130px] text-white  capitalize h-[45px] rounded-3xl   cursor-pointer

                ${billingCycle === "yearly" ? 'bg-[#00B7C1] text-white ' : "bg-white text-black hover:!bg-white hover:!text-black"
                }`}
            >
                yearly
                </Button>
           
        </div>
        </div>
    </div>
  )
}

export default pricingHeader