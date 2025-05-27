import Btn from "@/components/common/Btn"
import { Button } from "@/components/UI/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function JournyCard({ items }) {
    return (
        <div className="flex justify-center gap-6 flex-wrap">
            {items?.map((item, i) => (
                <Card
                    key={i}
                    className={`w-[280px] h-[312px] flex-shrink-0 flex flex-col justify-between   ms-10 py-6 px-6
                        ${item.highlight
                            ? "bg-[#E6FAFC] shadow-xl -mt-6 scale-105 z-10"
                            : "bg-white shadow-lg"
                        } rounded-2xl text-center border-0 transition-all duration-300`}
                >
                    <CardHeader>
                        <CardTitle className="text-xl text-center font-semibold text-gray-950 font-poppins">
                            <h4>

                            {item.title}
                            </h4>
                        </CardTitle>
                        {item.subtext && (
                            <CardDescription className="mt-2 text-gray-500 text-sm">
                                {item.subtext}
                            </CardDescription>
                        )}
                    </CardHeader>

                    <CardContent>
                        {item.price === "Free forever" ? (
                            <p className="text-sm font-medium text-gray-500">{item.price}</p>
                        ) : (
                            <p className="text-3xl font-bold text-black">
                                {item.price}
                                <span className="text-sm font-normal text-gray-600"> /month</span>
                            </p>
                        )}
                        
                        <p className="mt-1 text-sm text-gray-500">{item.responses} responses</p>
                    </CardContent>

                    <CardFooter className="mt-4">
                    
                        
                        <Button text={item.highlight ? "Choose Plus" : item.buttonText}
                            className={`w-full py-2 text-white rounded-full ${item.highlight ? "bg-[#00C2D1] hover:bg-secondary" : "bg-[#DBF8FA] text-gray-900 font-semibold font-poppins hover:bg-[#b4eef3]"
                                }`}>{item.buttonText }</Button>
                    
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
