import CardComp from "./CardComp/CardComp";

export default function HowItWorks() {
    return <>
        <section className="mb-32 mt-50 md:mt-0">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center text-center">

                    <div className="">
                        <h3 className="font-poppins font-semibold text-3xl capitalize leading-13">How It <span className="text-primryBtn">Works</span> </h3>
                        <p className="text-gray-400 text-lg leading-8 font-medium">Get started in just 3 simple steps</p>
                    </div>
                    <div className=" flex flex-col lg:flex-row gap-10 mt-4">
                        <CardComp/>
                    </div>

                </div>
            </div>
      </section>
  
  </>
}
