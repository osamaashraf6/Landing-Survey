import CardCommon from '@/components/common/CardCommon'
import React from 'react'

import feedback1 from '@/assets/images/feedback1.png';
import feedback2 from '@/assets/images/feedback2.png';
import feedback3 from '@/assets/images/feedback3.png';
import feedback4 from '@/assets/images/feedback4.png';
export default function Templets() {

        const cardDetails = {
            feedBack: [
                {
                    img: feedback1,
                    title: "Customer Satisfaction",
                    content: "Evaluates satisfaction with a specific interaction or purchase",
                },
                {
                    img: feedback2,
                    title: "Net Promoter Score (NPS)",
                    content: "Measures likelihood of customers recommending your brand",
                },
                {
                    img: feedback3,
                    title: "Service Quality Survey",
                    content: "Assesses customer service interactions",
                },
                {
                    img: feedback4,
                    title: "Post-Purchase Feedback",
                    content: "Gathers feedback after a transaction",
                },
            ],
            custom: [
                {
                    img: feedback1,
                    title: "Customer Satisfaction",
                    content: "Evaluates satisfaction with a specific interaction or purchase",
                },
                {
                    img: feedback2,
                    title: "Net Promoter Score (NPS)",
                    content: "Measures likelihood of customers recommending your brand",
                },
                {
                    img: feedback3,
                    title: "Service Quality Survey",
                    content: "Assesses customer service interactions",
                },
                {
                    img: feedback4,
                    title: "Post-Purchase Feedback",
                    content: "Gathers feedback after a transaction",
                },
            ],
        };
    return <>
        <section>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-col-6">
                    <div className="col-span-2 overflow-x-auto">
                        <div className="flex gap-10 min-w-max">
                            <CardCommon items={cardDetails.feedBack} />
                        </div>
                    </div>
                    {/* ...other code */}
                </div>
            </div>
        </section>

    </>
}
