import CardCommon from '@/components/common/CardCommon'
import React from 'react'


import * as Icons from '@/assets/icons/Icons';
import * as Img from '@/assets/images/Images';
import Btn from '@/components/common/Btn';
export default function Templets() {
    const cardDetails = {
        feedBack: [
            {
                img: Img.feedback1,
                title: "Customer Satisfaction",
                content: "Evaluates satisfaction with a specific interaction or purchase",
            },
            {
                img: Img.feedback2,
                title: "Net Promoter Score (NPS)",
                content: "Measures likelihood of customers recommending your brand",
            },
            {
                img: Img.feedback3,
                title: "Service Quality Survey",
                content: "Assesses customer service interactions",
            },
            {
                img: Img.feedback4,
                title: "Post-Purchase Feedback",
                content: "Gathers feedback after a transaction",
            }, {
                img: Img.feedback1,
                title: "Customer Satisfaction",
                content: "Evaluates satisfaction with a specific interaction or purchase",
            },
            {
                img: Img.feedback2,
                title: "Net Promoter Score (NPS)",
                content: "Measures likelihood of customers recommending your brand",
            },
            {
                img: Img.feedback3,
                title: "Service Quality Survey",
                content: "Assesses customer service interactions",
            },
            {
                img: Img.feedback4,
                title: "Post-Purchase Feedback",
                content: "Gathers feedback after a transaction",
            },
        ],
        market:[
            {
                img: Img.market1,
                title: "Brand Awareness Survey",
                content: "Measures how familiar people are with your brand",
            },
            {
                img: Img.market2,
                title: "Product Pricing Survey",
                content: "Gathers feedback on pricing acceptability",
            },
            {
                img: Img.market3,
                title: "Consumer Preferences Survey",
                content: "Identifies customer needs and wants",
            },
            {
                img: Img.market4,
                title: "Competitor Analysis Survey",
                content: "Compares your brand to competitors",
            }, {
                img: Img.market1,
                title: "Brand Awareness Survey",
                content: "Measures how familiar people are with your brand",
            },
            {
                img: Img.market2,
                title: "Product Pricing Survey",
                content: "Gathers feedback on pricing acceptability",
            },
            {
                img: Img.market3,
                title: "Consumer Preferences Survey",
                content: "Identifies customer needs and wants",
            },
            {
                img: Img.market4,
                title: "Competitor Analysis Survey",
                content: "Compares your brand to competitors",
            },
        ],
        education:[
            {
                img: Img.edu1,
                title: "Course Evaluation Survey",
                content: "Assesses course content and delivery",
            },
            {
                img: Img.edu2,
                title: "Learning Outcomes Survey",
                content: "Assesses knowledge or skills gained",
            },
            {
                img: Img.edu3,
                title: "Student Satisfaction Survey",
                content: "Measures overall educational experience",
            },
            {
                img: Img.edu4,
                title: "Instructor Feedback Survey",
                content: "Evaluates teacher or trainer performance",
            }, {
                img: Img.edu1,
                title: "Course Evaluation Survey",
                content: "Assesses course content and delivery",
            },
            {
                img: Img.edu2,
                title: "Learning Outcomes Survey",
                content: "Assesses knowledge or skills gained",
            },
            {
                img: Img.edu3,
                title: "Student Satisfaction Survey",
                content: "Measures overall educational experience",
            },
            {
                img: Img.edu4,
                title: "Instructor Feedback Survey",
                content: "Evaluates teacher or trainer performance",
            },
        ],
        events:[
            {
                img: Img.event1,
                title: "Post-Event Satisfaction Survey",
                content: "Evaluates overall event experience",
            },
            {
                img: Img.event2,
                title: "Speaker Feedback Survey",
                content: "Gathers opinions on presenters or speakers",
            },
            {
                img: Img.event3,
                title: "Venue Feedback Survey",
                content: "Assesses event location and facilities",
            },
            {
                img: Img.event4,
                title: "Virtual Event Survey",
                content: "Collects feedback on online events",
            }, {
                img: Img.event1,
                title: "Post-Event Satisfaction Survey",
                content: "Evaluates overall event experience",
            },
            {
                img: Img.event2,
                title: "Speaker Feedback Survey",
                content: "Gathers opinions on presenters or speakers",
            },
            {
                img: Img.event3,
                title: "Venue Feedback Survey",
                content: "Assesses event location and facilities",
            },
            {
                img: Img.event4,
                title: "Virtual Event Survey",
                content: "Collects feedback on online events",
            },
        ],
    };

    return (
        <section>
            <div className="container mx-auto px-8">
                <div className='grid grid-cols-1 gap-6'>
                    <h3 className="font-poppins font-semibold text-3xl capitalize leading-13">Popular  <span className="text-primryBtn">Templates</span> </h3>

                    {/* Scroll container with fixed max width */}

                    <ul className='list-decimal font-poppins font-semibold text-2xl leading-8 '>
                        <li className=''>
                            <div className=' flex justify-between'>

                                <h4 className='font-poppins font-semibold text-2xl '>Customer Feedback <span className='text-primryBtn'>Surveys</span> </h4>
                                <p className='text-xl font-medium font-inter flex items-center'>view all
                                    <Icons.FaArrowRight className='font-inter ml-2 font-normal text-gray-800' />
                                </p>
                            </div>

                    <div className="overflow-x-auto scrollbar-hide max-w-full ">
                        <div className="flex flex-nowrap gap-10 my-9">
                            <CardCommon items={cardDetails.feedBack} />
                        </div>
                    </div>
                        </li>
                        <li>
                            <div className=' flex justify-between'>

                                <h4 className='font-poppins font-semibold text-2xl '>Market  <span className='text-primryBtn'>Research</span> </h4>
                                <p className='text-xl font-medium font-inter flex items-center'>view all
                                    <Icons.FaArrowRight className='font-inter ml-2 font-normal text-gray-800' />
                                </p>
                            </div>
                            <div className="overflow-x-auto scrollbar-hide max-w-full ">
                                <div className="flex flex-nowrap gap-10 my-9">
                                    <CardCommon items={cardDetails.market} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className=' flex justify-between'>

                                <h4 className='font-poppins font-semibold text-2xl '>Education & <span className='text-primryBtn'>Training</span> </h4>
                                <p className='text-xl font-medium font-inter flex items-center'>view all
                                    <Icons.FaArrowRight className='font-inter ml-2 font-normal text-gray-800' />
                                </p>
                            </div>
                            <div className="overflow-x-auto scrollbar-hide max-w-full ">
                                <div className="flex flex-nowrap gap-10 my-9">
                                    <CardCommon items={cardDetails.education} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className=' flex justify-between'>

                                <h4 className='font-poppins font-semibold text-2xl '> Event <span className='text-primryBtn'>Feedback</span> </h4>
                                <p className='text-xl font-medium font-inter flex items-center'>view all
                                    <Icons.FaArrowRight className='font-inter ml-2 font-normal text-gray-800' />
                                </p>
                            </div>
                            <div className="overflow-x-auto scrollbar-hide max-w-full ">
                                <div className="flex flex-nowrap gap-10 my-9">
                                    <CardCommon items={cardDetails.events} />
                                </div>
                            </div>
                        </li>
                    </ul>


                    <div className=' flex items-center justify-center'>

                    <Btn text={'View All Templates'}/>
                    </div>

                </div>
            </div>
        </section>

    )
}
