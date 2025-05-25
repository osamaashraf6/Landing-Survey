import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
  
export default function CardComp() {

    const cardData = [
        {
            title: 'Create Your Survey',
            content:'Choose a template or start from scratch using our easy-to-use builder'
        },
        {
            title: 'Share With Your Audience',
            content:'Send your survey via email, social media, or embed it in your website'
        },
        {
            title: 'Analyze Responses',
            content:'Get instant insights with clean charts and downloadable reports'
        },
    ]
    return <>
        
        {cardData.map((card, i) => (
            
            <Card
                key={i}
                className="rounded-xl border-0 py-10 px-8 shadow-lg gap-3 transition-transform duration-300 hover:translate-y-2"
            >
            <CardHeader>
                    <CardTitle className={``}>
                        <h4 className="text-primryBtn font-poppins font-semibold text-lg">

                        {card.title}
                        </h4>
                    </CardTitle>
            </CardHeader>
            <CardContent>
                    <p className="text-gray-400  leading-6 ">{ card.content}</p>
            </CardContent>
        </Card>
        ))}

    </>
}
