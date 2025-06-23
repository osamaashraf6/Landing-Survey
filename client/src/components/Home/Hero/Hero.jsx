import heroImg from '@/assets/images/heroImgMd.png';
import Btn from '@/components/common/Btn';
import { Button } from '@/components/UI/button';


export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-cente py-4  md:mt-0  bg-white">
            <div className=" container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-6 items-center  gap-8  md:gap-4 lg:gap-8 ">

                    {/* Left Content */}
                    <div className="col-span-3 text-center   md:text-start ">
                        <div className="flex flex-col justify-center items-center md:items-start h-full space-y-4 text-black font-poppins ">
                            <h2 className="text-4xl leading-13 md:text-2xl lg:text-4xl font-semibold md:leading-10 lg:leading-13 font-poppins ">
                                Turn <span className="text-primryBtn">Questions</span> into Clarity<br />
                                and Transform <span className="text-primryBtn">Responses</span> into Valuable Insights
                            </h2>
                            <p className="text-lg leading-8 md:text-sm md:leading-6 lg:text-lg text-gray-400 lg:leading-8 font-normal">
                                Effortlessly build surveys that deliver the answers you need to grow, improve, and connect with your audience.
                            </p>
                            <div className=' flex gap-3 '>

                                <Btn text='Create Your Survey' />
                                <Button className={`bg-white border-2 border-primryBtn text-xs md:text-lg w-30 lg:w-52 py-3 px-5 rounded-xl text-primryBtn font-bold leading-8 capitalize transition-all  hover:bg-primryBtn hover:text-white `} >See How It Works</Button>
                            </div>
                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="col-span-3   ">
                        <div className=' w-full flex items-center justify-center overflow-hidden'>
                            <img
                                src={heroImg}
                                alt="Hero"
                                className="max-w-full h-auto object-contain"
                            />
                        </div>

                    </div> 

                </div>
            </div>
        </section>
    );
}
