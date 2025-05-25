import heroImg from '@/assets/images/heroImage.png';
// import ButtonCom from '@/components/UI/button';


export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-6 items-center gap-8">

                    {/* Left Content */}
                    <div className="col-span-3 ">
                        <div className="flex flex-col justify-center h-full space-y-4 text-black ">
                            <h2 className="text-3xl font-bold leading-snug font-poppins ">
                                Turn <span className="text-yellow-300">Questions</span> into Clarity<br />
                                and Transform <span className="text-yellow-300">Responses</span> into Valuable Insights
                            </h2>
                            <p className="text-lg">
                                Effortlessly build surveys that deliver the answers you need to grow, improve, and connect with your audience.
                            </p>
                        </div>

                        {/* <Button/> */}
                        {/* <ButtonCom/> */}
                        {/* <buttonVariants/> */}
                    </div>

                    {/* Right Image */}
                    <div className="col-span-3  overflow-hidden">
                        <img
                            src={heroImg}
                            alt="Hero"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
