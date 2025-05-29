import JournyCard from "./JournyCard/JournyCard";
import { Button } from "@/components/UI/button";
import { plan } from '@/utils/data'


export default function JournyPlan() {

    
    return <>
        
        <section className="mt-8">
            <div className="container mx-auto px-8">

                <div className="flex flex-col gap-16 justify-center items-center">
                    <div className="flex flex-col items-center justify-center ">
                        <h3 className="font-poppins font-semibold text-3xl capitalize leading-13">A Plan for Every Team's Journey   </h3>
                        <p className="font-medium  text-gray-500">No hidden fees. Choose the plan that fits your needs</p>
                    </div>

                    <div className="flex items-center justify-center gap-30  mb-6">

                        <JournyCard items={plan} />

                    </div>
                    <Button className={`bg-primryBtn w-[350px] lg:w-[424px] py-3 px-6 rounded-xl text-white font-bold leading-8  hover:bg-secondary`} ><h5 className="font-popins font-semibold text-lg lg:text-xl">
                        Not sure? See all pricing options
                    </h5></Button>
                </div>
            </div>
        </section>
    </>
}
