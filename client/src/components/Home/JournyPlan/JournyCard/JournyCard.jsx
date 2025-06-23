import { Button } from "@/components/UI/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"

export default function JournyCard({ items }) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className="flex justify-center gap-6 flex-wrap">
            {items?.map((item, i) => (
                <Card
                    key={i}
                    className={`w-[250px] h-[312px] flex-shrink-0 flex flex-col justify-center mb-10 lg:mb-0 md:ms-10
                        ${item.highlight
                            ? theme === 'light'
                                ? "bg-[#E6FAFC] [box-shadow:0_4px_16px_#00000814] -mt-6 scale-105 z-10"
                            : "bg-[#A0E4EF] [box-shadow:0_4px_16px_rgba(255,255,255,0.2)] -mt-6 scale-105 z-10 text-black"
                            : theme === 'light'
                                ? "bg-white shadow-md"
                            : "bg-[#111826] shadow-md [box-shadow:0_4px_16px_rgba(255,255,255,0.2)]"
                        }
                        rounded-2xl text-center border-0 transition-all duration-300
                      `}
                      
                >
                    <CardHeader>
                        <CardTitle className=" text-center  font-poppins">
                            <h4 className="text-2xl font-medium leading-8">

                            {item.title}
                            </h4>
                        </CardTitle>
                        {item.subtext && (
                            <CardDescription className="mt-2 text-gray-500 text-sm">
                                {item.subtext}
                            </CardDescription>
                        )}
                    </CardHeader>

                    <CardContent className={''}>
                        {item.price === "Free forever" ? (
                            <p className="text-sm font-medium text-gray-500">{item.price}</p>
                        ) : (
                            <p className="text-3xl leading-8 font-bold  font-poppins flex items-center justify-center gap-2 ">
                                {item.price}
                                <span className="text-sm font-normal text-gray-600 font-inter"> /month</span>
                            </p>
                        )}
                        
                        <p className="mt-1 text-sm text-gray-500 font-inter">{item.responses} responses</p>
                    </CardContent>

                    <CardFooter className="mt-4">
                    
                        
                        <Button text={item.highlight ? "Choose Plus" : item.buttonText}
                            className={`w-full font-poppins text-xl font-semibold py-2 text-white rounded-full ${item.highlight && theme==="light" ? "bg-[#00C2D1] hover:bg-secondary" : "bg-primary  font-semibold font-poppins hover:bg-[#b4eef3]"
                                }`}>{item.buttonText }</Button>
                    
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
