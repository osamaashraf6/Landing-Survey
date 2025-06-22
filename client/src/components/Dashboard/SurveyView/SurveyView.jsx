import { Button } from "@/components";
import HeaderSurv from "../common-Dash/headerSurv";
import * as Icon from '@/assets/icons/Icons.js'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Checkbox } from "@/components/ui/checkbox"


export default function SurveyView() {
    return <>
        <HeaderSurv />
        
        <Card className='flex flex-row justify-betwee items-centern px-5 border-none [box-shadow:0_4px_16px_#00000814]'>
            <div className=" flex  items-center justify-center gap-4">
            <Checkbox />
            <Button>open</Button>

            </div>
            <CardHeader className='w-full flex- flex-row'>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>


                
                <CardAction className="flex items-center gap-5">
                    <Button className=" w-[150px] text-gray-700 hover:text-white  bg-transparent  border-2 border-primary  cursor-pointer">
                            Send Survey
                    </Button>
                    <Icon.PiDotsThreeOutlineFill className="text-lg"/>
                </CardAction>
            </CardHeader>
        </Card>

    </>
}
