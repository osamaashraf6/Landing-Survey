import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Btn from "./Btn"


export default function CardCommon({items}) {


      
    return <>
        
        {items?.map((item, i) => (
            <Card key={i} className="  w-[60%] h-[96%] border-0 shadow-xl py-10 ">
                <CardHeader className="text-center">
                        <img
                            src={item.img}
                            alt="item"
                            className="w-[280px] h-[200px] rounded-xl object-cover"
                        />

                    <CardTitle className="mt-4 text-lg font-semibold font-poppins">
                        {item.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm  text-gray-600">
                    <p>{item.content}</p>
                </CardContent>
                <CardFooter className={'flex justify-center items-center '}>
                    <Btn text={'Use Templet'}/>
                </CardFooter>
            </Card>
        ))}


    </>
}
