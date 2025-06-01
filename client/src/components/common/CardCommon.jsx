import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Btn from "./Btn"

export default function CardCommon({ items }) {
    return (
        <>
            {items?.map((item, i) => (
                <Card
                    key={i}
                    className="w-[250px]  lg:w-[300px] lg:h-[470px] border-0 ms-5 [box-shadow:0_4px_16px_#00000814] py-6 flex-shrink-0 flex flex-col  justify-around "
                >
                    <CardHeader className="text-center">
                    {item.img && (
                            <img
                                src={item.img}
                                alt={item.title || "item"}
                                className="w-[200px] md:w-[280px] h-[200px] rounded-xl object-cover mx-auto"
                            />
                        )}

                        <CardTitle className="mt-4 text-lg font-semibold font-poppins">
                            {item.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-sm text-gray-600 font-medium  ">
                        <p>{item.content}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center items-center">
                        <Btn text={'Use Templet'} />
                    </CardFooter>
                </Card>
            ))}
        </>
    )
}
