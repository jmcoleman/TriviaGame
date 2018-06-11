// populate data to work with for the trivia game
// sources: https://analyticsweek.com/content/big-data-facts/
//          https://blog.capterra.com/10-surprising-big-data-statistics/
//          http://www.businessinsider.com/12-trillion-photos-to-be-taken-in-2017-thanks-to-smartphones-chart-2017-8
//          https://www.newgenapps.com/blog/iot-statistics-internet-of-things-future-research-data
//          http://www.grabstats.com/stats/2049
//          http://www.engineersireland.ie/EngineersIreland/media/SiteMedia/cpd/training/Seminars%20temp/Data%20Centres/1-Ray-Walshe-Datacentre-Growth.pdf
//          Wikibon
var triviaList = [
    {   id: 0, 
        question: "How many hours of new video do YouTube users upload every minute of the day?", 
        choices: [10, 25, 48, 52, 65], 
        answer: "YouTube users upload 48 hours of new video every minute of the day."
    },
    {   id: 1, 
        question: "How many bytes of user generated data does Facebook store, access, and analyze?", 
        choices: ["60 TB", "85 TB", "10 PB", "30 PB", "80 PB", "5 EB"], 
        answer: "Facebook stores, accesses, and analyzes 30+ Petabytes of user generated data."
    },
    {   id: 2, 
        question: "How many people are calling, texting, tweeting and browsing on mobile phones worldwide?", 
        choices: ["5 billion", "10 billion", "25 billion", "30 billion"], 
        answer: "More than 5 billion people are calling, texting, tweeting and browsing on mobile phones worldwide."
    },
    {   id: 3, 
        question: "Decoding the human genome originally took 10 years to process; now it can be achieved in how long?", 
        choices: ["1 hour", "5 days", "1 week", "2 months"], 
        answer: "Decoding the human genome originally took 10 years to process; now it can be achieved in one week."
    },
    {   id: 4, 
        question: "How many terabytes of data are uploaded daily to Facebook?", 
        choices: ["5 TB", "10 TB", "25 TB", "50 TB", "100 TB"], 
        answer: "100 terabytes of data are uploaded daily to Facebook."
    },
    {   id: 5, 
        question: "The amount of data in the world today is equal to which of the below?", 
        choices: ["Every person in the US tweeting three tweets per minute for 26,976 years.","Every person in the world having more than 215m high-resolution MRI scans a day.","More than 200bn HD movies – which would take a person 47m years to watch.","All of these"], 
        answer: "The amount of data in the world today is equal to: Every person in the US tweeting three tweets per minute for 26,976 years. Every person in the world having more than 215m high-resolution MRI scans a day. More than 200bn HD movies – which would take a person 47m years to watch."
    },
    {   id: 6, 
        question: "How many messages to Facebook users send every minute?", 
        choices: ["20 million", "28.2 million", "31.25 million", "50 million"], 
        answer: "Every minute Facebook users send roughly 31.25 million messages."
    },
    {   id: 7, 
        question: "Approximately how many developers worldwide are currently working on big data and advanced analytics?", 
        choices: ["1 million", "5 million", "6 million", "25 million"], 
        answer: "Six million developers worldwide are currently working on big data and advanced analytics."
    },
    {   id: 8, 
        question: "What percentage of BI software queries will be over search features, natural language processing, or voice recognition by 2020?", 
        choices: ["25%", "50%", "75%", "90%"], 
        answer: "50% of BI software queries will be over search features, natural language processing, or voice recognition by 2020."
    },
    {   id: 9, 
        question: "What is the volume of videos that Facebook users watch every minute?", 
        choices: ["1.3 million", "2 million", "2.77 million", "5 million"], 
        answer: "Every minute Facebook users watch 2.77 million videos."
    },
    {   id: 10, 
        question: "What is a citizen data scientist?", 
        choices: ["a statistician", "a US citizen that has an actuarial degree", "a non-statistician that does the work of a statistician", "None of the options"], 
        answer: "Citizen data scientists are non-statisticians who do the work of statisticians. The term was coined by Gartner, so here’s the IT advisory firm’s formal definition: “a person who creates or generates models that leverage predictive or prescriptive analytics, but whose primary job function is outside of the field of statistics and analytics.”"
    },
    {   id: 11, 
        question: "By 2020, how much data is estimated to be created every second, for every person on earth?", 
        choices: ["1.3 MB", "1.7 MB", "10 MB", "12.5 MB"], 
        answer: "By 2020, 1.7 megabytes of data will be created every second, for every person on earth."
    },
    {   id: 12, 
        question: "How much data does Wal-Mart customers’ transactions provide every hour?", 
        choices: ["2.5 petabytes", "5 petabytes", "10 petabytes", "50 petabytes"], 
        answer: "Every hour, Wal-Mart customers’ transactions provide the company with about 2.5 petabytes of data."
    },
    {   id: 13, 
        question: "What percentage of companies have been successful trying to be data-driven?", 
        choices: ["25%","50%","73%","85%"], 
        answer: "Though 85% of companies are trying to be data-driven, only 37% of that number say they’ve been successful."
    },
    {   id: 14, 
        question: "In Aug 2015, how many people used Facebook in a single day?", 
        choices: ["over 1 million", "over 1 billion", "over 10 billion", "over 100 billion"], 
        answer: "In Aug 2015, over 1 billion people used Facebook FB +0.44% in a single day."
    },
    {   id: 15, 
        question: "What percentage of devices used in 2017 were digital cameras?", 
        choices: ["4.7%", "10.3%", "15.1%", "85%"], 
        answer: "According to Statista, 10.3% of devices used in 2017 were digital cameras."
    },
    {   id: 16, 
        question: "What percentage of devices used in 2017 were tablets?", 
        choices: ["4.7%", "10.3%", "15.1%", "85%"], 
        answer: "According to Statista, 4.7% of devices used in 2017 were tablets."
    },
    {   id: 17, 
        question: "What percentage of devices used in 2017 were smartphones?", 
        choices: ["4.7%", "10.3%", "15.1%", "85%"], 
        answer: "According to Statista, 85.% of devices used in 2017 were smartphones."
    },
    {   id: 18, 
        question: "What percentage of all devices that could leverage IoT are actually doing so?", 
        choices: ["0.06%", "2%", "5%", "10%"], 
        answer: "Only 0.06% of all devices that could potentially leverage IoT are actually doing so. This makes the remaining 99.94% available for optimization."
    },
    {   id: 19, 
        question: "Of all the business who chose to implement IoT, what percentage have already seen a return on their IoT investments?", 
        choices: ["40%", "65%", "82%", "94%"], 
        answer: "Of all the business who chose to implement IoT, 94% have already seen a return on their IoT investments."
    },
    {   id: 20, 
        question: "What percentage of internet connected cars are expected by 2020?", 
        choices: ["60%","70%","80%","90%"], 
        answer: "The market for smart cars and connected cars is a huge market. The percent of internet connected cars is expected to rise from 10% in 2012 to a whopping 90% by 2020."
    },
    {   id: 21, 
        question: "How manyu smart home devices are expected to be shipped by 2019?", 
        choices: ["10 million", "1.3 billion", "1.9 billion", "5 billion"], 
        answer: "By 2019, 1.9 billion smart home devices are expected to be shipped."
    },
    {   id: 22, 
        question: "What volume of IoT enabled clothing is expected by 2021?", 
        choices: ["5 billion", "10.32 billion", "24.75 billion", "48.2 billion"], 
        answer: "Soon IoT technology will become an obvious part of our clothing as well. 968 thousand smart clothes made it to the consumer in 2015. This number is expected to grow to 24.75 billion by 2021."
    },
    {   id: 23, 
        question: "What percentage of consumers aren’t aware of the meaning of “The Internet of Things.”", 
        choices: ["15%", "31%", "87%", "90%"], 
        answer: "Most of the consumers (87%) aren’t aware of the meaning of “The Internet of Things.”"
    },
    {   id: 24, 
        question: "What percentage of growth is expected in the wearable deivce market by 2020?", 
        choices: ["25%", "31%", "41%", "48%"], 
        answer: "The wearable devices market is growing at an exponential rate. In 2016, 28.3 million units of IoT devices made it to the market. According to IDC forecasts, this number will rise to 82.5 million by 2020, showcasing a 31% growth."
    },
    {   id: 25, 
        question: "What percentage of savings is expected in the F&B industry as a result of smart kitchens by 2020?", 
        choices: ["10%","15%","20%","25%"], 
        answer: "Smart kitchens alone will contribute a minimum 15% savings in the F&B industry by 2020."
    },

    {   id: 26, 
        question: "What is the adoption rate of smart thermostats that is expected in the next 5 years?", 
        choices: ["38%","43%","50%", "65%"], 
        answer: "Of all the devices, smart thermostats are projected to make it to 43% adoption rate in the next 5 years."
    },
    {   id: 27, 
        question: "The adoption of connected home devices is expected to be _____ wearables?", 
        choices: ["higher than", "lower than", "equal to"], 
        answer: "The adoption of connected home devices is expected to be higher than wearables."
    },
    {   id: 28, 
        question: "More than _______ of consumers are likely to purchase IoT devices for their homes by 2019?", 
        choices: ["one-fourth", "one-half", "two-thirds"], 
        answer: "More than two-thirds of consumers are likely to purchase IoT devices for their homes by 2019."
    },
    {   id: 29, 
        question: "What is the potential revenue worth for smart home devices by 2019?", 
        choices: ["$275 billion","$490 billion", "$503 billion", "$600 billion"], 
        answer: "By 2019, the expected 1.9 billion smart home devices could bring a potential revenue worth $490 billion."
    },
];

// check the loading of trivia questions
// for (i=0; i < triviaList.length; i++) {
//     triviaList.forEach(element => {
//         console.log(element);
//     });
// }
