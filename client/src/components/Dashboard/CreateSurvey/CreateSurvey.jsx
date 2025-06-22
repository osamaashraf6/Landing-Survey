import { Button } from "@/components";
import HeaderSurv from "../common-Dash/headerSurv";
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
export default function CreateSurvey() {
    return <>
        <HeaderSurv />
        
        <Card className='flex flex-row justify-between'>
            <Checkbox />
            <Button>open</Button>
            <CardHeader className='bg-amber-300 w-full'>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            {/* <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
        </Card>

    </>
}
