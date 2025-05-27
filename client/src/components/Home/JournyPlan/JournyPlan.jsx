import JournyCard from "./JournyCard/JournyCard";

export default function JournyPlan() {
    const plan = [
        {
            title: "Basic",
            price: "Free forever",
            responses: "100",
            buttonText: "Get Started",
            highlight: false,
        },
        {
            title: "Plus",
            price: "$50",
            responses: "1,000",
            buttonText: "Choose Plus",
            highlight: true,
        },
        {
            title: "Business",
            price: "$83",
            responses: "10,000",
            buttonText: "Go Business",
            highlight: false,
        },
    ]
    
    return <>
        
        <section className="mt-8">
            <div className="container mx-auto px-8">

                <div className="flex flex-col gap-16">
                    <div className="flex flex-col items-center justify-center ">
                        <h3 className="font-poppins font-semibold text-3xl capitalize leading-13">A Plan for Every Team's Journey   </h3>
                        <p className="font-medium  text-gray-500">No hidden fees. Choose the plan that fits your needs</p>
                    </div>

                    <div className="flex items-center justify-center gap-30  mb-10">

                        <JournyCard items={plan} />

                    </div>
                </div>
            </div>
        </section>
    </>
}
