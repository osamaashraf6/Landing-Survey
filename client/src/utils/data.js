import * as Img from "@/assets/images/Images";

const cardData = [
  {
    title: "Create Your Survey",
    content:
      "Choose a template or start from scratch using our easy-to-use builder",
  },
  {
    title: "Share With Your Audience",
    content:
      "Send your survey via email, social media, or embed it in your website",
  },
  {
    title: "Analyze Responses",
    content: "Get instant insights with clean charts and downloadable reports",
  },
];
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
    },
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
    },
  ],
  market: [
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
    },
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
    },
  ],
  education: [
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
    },
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
    },
  ],
  events: [
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
    },
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
    },
  ],
};
const plan = [
  {
    title: "Basic",
    price: "Free forever",
    responses: "100",
    buttonText: "Get Started",
    highlight: false,
  },
  {
    title: "Plus",
    price: "$50",
    responses: "1,000",
    buttonText: "Choose Plus",
    highlight: true,
  },
  {
    title: "Business",
    price: "$83",
    responses: "10,000",
    buttonText: "Go Business",
    highlight: false,
  },
];

const plans = [
  {
    title: "Basic",
    description: "Create interactive forms that connect to your workflow",
    price: 25,
    subText: "What’s included",
    features: [
      "100 responses",
      "1 user",
      "Unlimited surveyland",
      "unlimited questions",
    ],
    highlighted: false,
  },
  {
    title: "Plus",
    description:
      "Make your forms more beautiful and on-brand and more features",
    price: 50,
    subText: "What’s included",
    features: [
      "1000 responses",
      "3 user",
      "Everything in Basic",
      "Drop-off rates",
    ],
    highlighted: true,
  },
  {
    title: "Business",
    description: "Analyze performance and do more with your data",
    price: 83,
    subText: "What’s included",
    features: [
      "10,000 responses",
      "5 user",
      "Everything in Plus",
      "Conversion tracking",
    ],
    highlighted: false,
  },
];

 const formTypes = [
  "Registration Forms", "Application Forms", "Contact Forms", "Request Forms", "Order Forms", "Feedback Forms",
  "Survey Templates", "Signup Forms", "Evaluation Forms", "Event Registration Forms", "Booking Forms", "Petition Forms",
  "Report Forms", "Reservation Forms", "Employment Forms", "Tracking Forms", "Membership Forms", "Upload Forms",
  "Quote Forms", "Appointment Forms", "Enrollment Forms", "Volunteer Forms", "Payment Forms", "Wedding Forms",
  "Calculation Forms", "Content Forms", "Lead Generation Forms", "Consent Forms", "Award Forms", "Subscription Forms",
  "Recommendation Forms", "Poll Templates", "Donation Forms", "RSVP Forms", "Sponsorship Forms", "Abstract Forms"
];

/* const faqs = [
  {
    title: "What is SurveyLand ?",
    text: `SurveyLand is a powerful online application that allows anyone to quickly create custom 
online forms. Its intuitive drag-and-drop user interface makes form building incredibly 
simple, and doesn't require you to write a single line of code. Using SurveyLand, you can create 
and publish forms, integrate them into your site, and receive responses by email.`,
  },
  {
    title: "Why SurveyLand?",
    text: `     SurveyLand will have your forms up and running in seconds! We're the easiest form builder 
            with the most advanced capabilities, including the industry's top design and customization 
            tools. Don't know where to start? We have thousands of ready-made templates to get your 
            form rockin'. Need your forms to show different questions based on your customers answers? 
            Our conditions tool can show or hide whatever form fields you choose, depending on how 
            people answer previous questions. SurveyLand also lets you add your company logo, custom 
            color schemes, and stunning background images.`,
  },
  {
    title: "Do I need coding experience to create a form ?",
    text: ` Not at all! WithSurveyLand's drag-and-drop builder, you don't need any coding experience to 
            create the perfect form for your needs. Advanced users can go directly into the HTML code 
            and make adjustments, but it's absolutely not necessary. With our Theme Designer, you can 
            change the style of your form with just a few clicks.`,
  },
  {
    title: "Is SurveyLand free ?",
    text: `SurveyLand has multiple subscription options, including a free plan. Free users have access 
            to all of the same features as paid users, but with lower limits on form counts, form 
            submissions, form views, upload space and submission storage. To check out the different 
            options,visit our Pricing page.`,
  },
  {
    title: "How do I add SurveyLand forms to my website ?",
    text: `When you publish your online form, you'll have the option to use it as a standalone link, or to 
            embed it directly into your website. Embedding simply requires you to copy and paste the 
            embed code we provide.`,
  },
  {
    title: "How secure is my data with SurveyLand ?",
    text: `SurveyLand takes the security of your data very seriously. All SurveyLand standalone form 
            links and embed codes are secure (SSL) by default, and we give all users the option to 
            encrypt their data. SurveyLand also adheres to strict European data protection laws by 
            allowing users to store their data on secure German servers if they choose.`,
  },
  {
    title: "What happens to my data when I downgrade my account ?",
    text: `If you decide to downgrade your account, your data will still be securely stored like it always 
            has been and as long as it does not go over the total submission storage on free accounts 
            which is 100MB. Also, your forms will be disabled if you go over the monthly submission limit on 
            your downgraded plan or any other limit, such as the number of forms. You can check your 
            submission and data storage levels by clicking on the account icon on the top right of your 
            page when logged in and reviewing the progress bars.`,
  },
  {
    title: "How does SurveyLand work ?",
    text: `It’s a no-code form builder with templates and drag-and-drop. Share your form via link, email, QR code, or embed. You also get tools like e-signatures, charts, and more.`,
  },
  {
    title: "What can I use SurveyLand for ?",
    text: `You can collect customer feedback, payments, event registrations, and more — all with powerful data tools like SurveyLand Tables and PDF Editor.`,
  },
];
 */
export { cardData, cardDetails, plan, plans ,formTypes , faqs};
