///////////////////////////////////////////
// Trivia Question Bank
///////////////////////////////////////////
var triviaList = [
    {   id: 0, 
        question: "How many hours of new video do YouTube users upload every minute of the day?", 
        choices: [10, 25, 48, 52, 65], 
        answer: 48,
        answerMessage: "YouTube users upload 48 hours of new video every minute of the day."
    },
    {   id: 1, 
        question: "How many bytes of user generated data does Facebook store, access, and analyze?", 
        choices: ["60 TB", "85 TB", "10 PB", "30 PB", "80 PB", "5 EB"], 
        answer: "30 PB",
        answerMessage:  "Facebook stores, accesses, and analyzes 30+ Petabytes of user generated data."
    },
    {   id: 2, 
        question: "How many people are calling, texting, tweeting and browsing on mobile phones worldwide?", 
        choices: ["5 billion", "10 billion", "25 billion", "30 billion"], 
        answer: "5 billion",
        answerMessage: "More than 5 billion people are calling, texting, tweeting and browsing on mobile phones worldwide."
    },
    {   id: 3, 
        question: "Decoding the human genome originally took 10 years to process; now it can be achieved in how long?", 
        choices: ["1 hour", "5 days", "1 week", "2 months"], 
        answer: "1 week",
        answerMessage: "Decoding the human genome originally took 10 years to process; now it can be achieved in one week."
    },
    {   id: 4, 
        question: "How many terabytes of data are uploaded daily to Facebook?", 
        choices: ["5 TB", "10 TB", "25 TB", "50 TB", "100 TB"], 
        answer: "100 TB",
        answerMessage: "100 terabytes of data are uploaded daily to Facebook."
    },
    {   id: 5, 
        question: "The amount of data in the world today is equal to which of the below?", 
        choices: ["Every person in US tweeting 3 tweets per minute for 26,976 years.","Every person in the world having more than 215m high-resolution MRI scans a day.","More than 200bn HD movies – which would take a person 47m years to watch.","All of these"], 
        answer: "All of these",
        answerMessage: "The amount of data in the world today is equal to: Every person in the US tweeting three tweets per minute for 26,976 years. Every person in the world having more than 215m high-resolution MRI scans a day. More than 200bn HD movies – which would take a person 47m years to watch."
    },
    {   id: 6, 
        question: "How many messages do Facebook users send every minute?", 
        choices: ["20 million", "28.2 million", "31.25 million", "50 million"], 
        answer: "31.25 million",
        answerMessage: "Every minute Facebook users send roughly 31.25 million messages."
    },
    {   id: 7, 
        question: "Approximately how many developers worldwide are currently working on big data and advanced analytics?", 
        choices: ["1 million", "5 million", "6 million", "25 million"], 
        answer: "6 million",
        answerMessage: "Six million developers worldwide are currently working on big data and advanced analytics."
    },
    {   id: 8, 
        question: "What percentage of BI software queries will be over search features, natural language processing, or voice recognition by 2020?", 
        choices: ["25%", "50%", "75%", "90%"], 
        answer: "50%",
        answerMessage: "50% of BI software queries will be over search features, natural language processing, or voice recognition by 2020."
    },
    {   id: 9, 
        question: "What is the volume of videos that Facebook users watch every minute?", 
        choices: ["1.3 million", "2 million", "2.77 million", "5 million"], 
        answer: "2.77 million",
        answerMessage: "Every minute Facebook users watch 2.77 million videos."
    },
    {   id: 10, 
        question: "What is a citizen data scientist?", 
        choices: ["Statistician", "US citizen with an actuarial degree", "Non-statistician that does the work of a statistician", "None of these"], 
        answer: "Non-statistician that does the work of a statistician",
        answerMessage: "Citizen data scientists are non-statisticians who do the work of statisticians. The term was coined by Gartner, so here’s the IT advisory firm’s formal definition: “a person who creates or generates models that leverage predictive or prescriptive analytics, but whose primary job function is outside of the field of statistics and analytics.”"
    },
    {   id: 11, 
        question: "By 2020, how much data is estimated to be created every second, for every person on earth?", 
        choices: ["1.3 MB", "1.7 MB", "10 MB", "12.5 MB"], 
        answer: "1.7 MB",
        answerMessage: "By 2020, 1.7 megabytes of data will be created every second, for every person on earth."
    },
    {   id: 12, 
        question: "How much data does Wal-Mart customers’ transactions provide every hour?", 
        choices: ["2.5 petabytes", "5 petabytes", "10 petabytes", "50 petabytes"], 
        answer: "2.5 petabytes",
        answerMessage: "Every hour, Wal-Mart customers’ transactions provide the company with about 2.5 petabytes of data."
    },
    {   id: 13, 
        question: "Of the 85% of companies that are trying to be data-driven, what percentage have been successful?", 
        choices: ["37%","50%","73%","85%"], 
        answer: "37%",
        answerMessage: "Though 85% of companies are trying to be data-driven, only 37% of that number say they’ve been successful."
    },
    {   id: 14, 
        question: "In Aug 2015, how many people used Facebook in a single day?", 
        choices: ["over 1 million", "over 1 billion", "over 10 billion", "over 100 billion"], 
        answer: "over 1 billion",
        answerMessage: "In Aug 2015, over 1 billion people used Facebook FB +0.44% in a single day."
    },
    {   id: 15, 
        question: "What percentage of devices used in 2017 were digital cameras?", 
        choices: ["4.7%", "10.3%", "15.1%", "85%"], 
        answer: "10.3%",
        answerMessage: "According to Statista, 10.3% of devices used in 2017 were digital cameras."
    },
    {   id: 16, 
        question: "What percentage of devices used in 2017 were tablets?", 
        choices: ["4.7%", "10.3%", "15.1%", "85%"], 
        answer: "4.7%",
        answerMessage: "According to Statista, 4.7% of devices used in 2017 were tablets."
    },
    {   id: 17, 
        question: "What percentage of devices used in 2017 were smartphones?", 
        choices: ["4.7%", "10.3%", "15.1%", "85%"], 
        answer: "85%",
        answerMessage: "According to Statista, 85% of devices used in 2017 were smartphones."
    },
    {   id: 18, 
        question: "What percentage of all devices that could leverage IoT are actually doing so?", 
        choices: ["0.06%", "2%", "5%", "10%"], 
        answer: "0.06%",
        answerMessage: "Only 0.06% of all devices that could potentially leverage IoT are actually doing so. This makes the remaining 99.94% available for optimization."
    },
    {   id: 19, 
        question: "Of all the business who chose to implement IoT, what percentage have already seen a return on their IoT investments?", 
        choices: ["40%", "65%", "82%", "94%"], 
        answer: "94%",
        answerMessage: "Of all the business who chose to implement IoT, 94% have already seen a return on their IoT investments."
    },
    {   id: 20, 
        question: "What percentage of internet connected cars are expected by 2020?", 
        choices: ["60%","70%","80%","90%"], 
        answer: "90%",
        answerMessage: "The market for smart cars and connected cars is a huge market. The percent of internet connected cars is expected to rise from 10% in 2012 to a whopping 90% by 2020."
    },
    {   id: 21, 
        question: "How many smart home devices are expected to be shipped by 2019?", 
        choices: ["10 million", "1.3 billion", "1.9 billion", "5 billion"], 
        answer: "1.9 billion",
        answerMessage: "By 2019, 1.9 billion smart home devices are expected to be shipped."
    },
    {   id: 22, 
        question: "What volume of IoT enabled clothing is expected by 2021?", 
        choices: ["5 billion", "10.32 billion", "24.75 billion", "48.2 billion"], 
        answer: "24.75 billion",
        answerMessage: "Soon IoT technology will become an obvious part of our clothing. 968 thousand smart clothes made it to the consumer in 2015. This number is expected to grow to 24.75 billion by 2021."
    },
    {   id: 23, 
        question: "What percentage of consumers aren’t aware of the meaning of “The Internet of Things.”", 
        choices: ["15%", "31%", "87%", "90%"], 
        answer: "87%",
        answerMessage: "Most of the consumers (87%) aren’t aware of the meaning of “The Internet of Things.”"
    },
    {   id: 24, 
        question: "What percentage of growth is expected in the wearable deivce market by 2020?", 
        choices: ["25%", "31%", "41%", "48%"], 
        answer: "31%",
        answerMessage: "The wearable devices market is growing at an exponential rate. In 2016, 28.3 million units of IoT devices made it to the market. According to IDC forecasts, this number will rise to 82.5 million by 2020, showcasing a 31% growth."
    },
    {   id: 25, 
        question: "What percentage of savings is expected in the F&B industry as a result of smart kitchens by 2020?", 
        choices: ["10%","15%","20%","25%"], 
        answer: "15%",
        answerMessage: "Smart kitchens alone will contribute a minimum 15% savings in the F&B industry by 2020."
    },

    {   id: 26, 
        question: "What is the adoption rate of smart thermostats that is expected in the next 5 years?", 
        choices: ["38%","43%","50%", "65%"], 
        answer: "43%",
        answerMessage: "Of all the devices, smart thermostats are projected to make it to 43% adoption rate in the next 5 years."
    },
    {   id: 27, 
        question: "The adoption of connected home devices is expected to be _____ wearables?", 
        choices: ["higher than", "lower than", "equal to"], 
        answer: "higher than",
        answerMessage: "The adoption of connected home devices is expected to be higher than wearables."
    },
    {   id: 28, 
        question: "More than _______ of consumers are likely to purchase IoT devices for their homes by 2019?", 
        choices: ["one-fourth", "one-half", "two-thirds"], 
        answer: "two-thirds",
        answerMessage: "More than two-thirds of consumers are likely to purchase IoT devices for their homes by 2019."
    },
    {   id: 29, 
        question: "What is the potential revenue worth for smart home devices by 2019?", 
        choices: ["$275 billion","$490 billion", "$503 billion", "$600 billion"], 
        answer: "$490 billion",
        answerMessage: "By 2019, the expected 1.9 billion smart home devices could bring a potential revenue worth $490 billion."
    },
];

// check the loading of trivia questions
// for (i=0; i < triviaList.length; i++) {
//     triviaList.forEach(element => {
//         console.log(element);
//     });
// }

///////////////////////////////////////////
// Constants
///////////////////////////////////////////
const NUMBER_OF_GAME_QUESTIONS = 5;     // Number of questions to ask in a game.
const RESPONSE_TIME_LIMIT = 30000;      // Max time for response (expressed in milliseconds)
const ANSWER_PREVIEW_TIME = 5000;       // Time of interval to show the answer

const ANSWER_WRONG_FLAG = 0;    // answer is wrong state value
const ANSWER_RIGHT_FLAG = 1;    // answer is right state value
const TIME_EXPIRED_FLAG = 2;    // indicaes time has expired

///////////////////////////////////////////
// Global Object(s)
///////////////////////////////////////////
var game = {
    questions: [],
    currentQuestion: 0,
    answerSubmitted: false,
    timeleft: 0,
    self: {},

    start: function() {
        // initialize the game
        var randomNumber = 0;
        var questionObj = {};

        self = this;

        // load up the questions to be used for the game
        for (i=0; i < NUMBER_OF_GAME_QUESTIONS; i++) {
            randomNumber = Math.floor(Math.random() * triviaList.length);            // random number between 0 and 30

            // get the question and default the question properties we'll use
            questionObj = triviaList[randomNumber];
            questionObj.timeExpired = null;
            questionObj.answeredCorrectly = null;

            //console.log(questionObj);
            self.questions.push(questionObj);
        };
        console.log(self.questions);
    },

    resetGame: function() {
        self.questions = [];
        self.currentQuestion = 0;
        self.answerSubmitted = false;
        self.timeleft = 0;
    },

    nextQuestion: function() {
        self.currentQuestion++;
        self.answerSubmitted = false;
    },

    getQuestion: function() {
        return self.questions[self.currentQuestion];
    },

    isAnswerCorrect: function(myAnswer) {
        var ques = self.getQuestion();

        console.log("Answer is: " + ques.answer);

        var result = (myAnswer === ques.answer) ? true : false;
        ques.answeredCorrectly = result;
        self.answerSubmitted = true;

        return result;
    },

    htmlShowQuestion: function() {

        ////////////////////////////////////////////
        // set the question data in the card
        ////////////////////////////////////////////
        $("#question-nbr").text(game.currentQuestion + 1);      // show which question we are on
        $("#question-ttl").text(NUMBER_OF_GAME_QUESTIONS);      // show the total number of questions
    
        var q = self.getQuestion();
        $("#question").text(q.question);                        // show the question
    
        /////////////////////////////////////////////////////
        // loop thru the choices and add the html for each
        /////////////////////////////////////////////////////
        var choicesDiv = $("#choices");
        var j = 0;
    
        choicesDiv.html("");                   // clear out the test data on the html page
    
        q.choices.forEach(function(choice) {
            choicesDiv.append(`<div id='RadioDiv${j}' class="form-radio form-radio-inline"></div>`);
    
            var newRadioDiv = $(`div[id='RadioDiv${j}`);
            newRadioDiv.append(`<input class='form-radio-input' type='radio' id='Radio${j}' name='choice' value='${q.choices[j]}'>`);
            newRadioDiv.append(`<label class='form-radio-label' for='inlineRadio${j}'>${q.choices[j]}</label>`);
    
            j++;
        });
    
        // show the card
        $("#card-question").removeClass("d-none");
    },

    htmlClearAnswer: function() {
        var answerMsg = $("#message-p");
        answerMsg.empty(); 
    },

    gameOver: function() {
        alert("Game Over");         // TODO give results on page

        var nbrCorrect = 0;
        var nbrIncorrect = 0;
        var nbrTimeExpired = 0;

        console.log("Self-->");
        console.log(self.questions.length);
        console.log("Game-->");
        console.log(game.questions.length);

        // show new content on page with stats
        self.questions.forEach(element => {
            console.log(element);

            // if time expired, increment time expire counter
            if (!isEmpty(element.timeExpired) && element.timeExpired) {
                nbrTimeExpired++;
            } else {
                // otherwise check if answer is correct and increment counters 
                if (!isEmpty(element.answeredCorrectly)) {
                    if (element.answeredCorrectly) {
                        nbrCorrect++
                    } else {
                        nbrIncorrect++; 
                    }
                };
            };
        });

        console.log("Correct: " + nbrCorrect);
        console.log("Incorrect: " + nbrIncorrect);
        console.log("Timed Out: " + nbrTimeExpired);
    },

    htmlShowAnswer: function(answerState) {
        var a = self.getQuestion();

        console.log("showAnswer: " + a.answerMessage);

        $("#btn-submit").addClass("d-none");                 // hide the submit button

        /////////////////////////////////////////
        // Show Correct, Incorrect, or Time Up
        /////////////////////////////////////////
        // <div class="text-center display-4 mb-3">
        //     <i class="fas fa-check-circle fa-lg mr-3 text-success"></i>Correct!
        // </div>
        // <div class="text-center display-4 mb-3">
        //     <i class="fas fa-times-circle fa-lg mr-3 text-danger"></i>Um, no.
        // </div>
        // <div class="text-center display-4 mb-3">
        //     <i class="fas fa-hourglass-end fa-lg mr-3 text-warning"></i>Time's Up!
        // </div>
        // <span id="message" class="display-5 lead text-muted">The answer is Item 1.</span>

        var horizElem = $("<hr>");
        var answerElem = $("<div>");
        var answerResponse = $("<i>");              // has whether the answer is right or wrong or time up
        var spanAnswerDetails = $("<span>");        // has the answer details

        answerElem.addClass("text-center my-2");
        answerResponse.addClass("fas fa-lg mr-3 my-4");
        horizElem.addClass("mb-3");

        switch (answerState) {
            case ANSWER_RIGHT_FLAG:
                answerResponse.addClass("fa-check-circle text-success");
                answerElem.text("Correct!");
                break;
            case ANSWER_WRONG_FLAG:
                answerResponse.addClass("fa-times-circle text-danger");
                answerElem.text("Nice try!");
                break;
            case TIME_EXPIRED_FLAG:
                answerResponse.addClass("fa-hourglass-end text-warning");
                answerElem.text("Time's Up!");
                break;
            default:
                console.log("Error: Invalid answer state in logic.");
        }
        answerElem.prepend(answerResponse);

        spanAnswerDetails.attr("id","message");
        spanAnswerDetails.addClass("my-2");
        spanAnswerDetails.text(a.answerMessage);

        self.htmlClearAnswer();                             // clear the answer from the DOM before adding it back
        
        var e = $("#message-p");                            // find where we add it
        e.append(horizElem);                                // add a separator
        e.append(spanAnswerDetails);                        // add the text of the answer
        e.append(answerElem);                               // add the answer image and feedback

        $("#message-p").removeClass("d-none");              // show the answer

    },

};

var userSelectionTimer;
var answerTimer;

///////////////////////////////////////////
// JavaScript
///////////////////////////////////////////
function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
};

///////////////////////////////////////////
// JQuery
///////////////////////////////////////////
$(document).ready (function() {

    ///////////////////////////////////////////
    // Event Handlers
    ///////////////////////////////////////////
    // user clicks button to START GAME
    $("#btn-start").on("click", function() {
        console.log("start button clicked.");
        
        $("#btn-start").addClass("d-none");             // hide the start button

        game.start();                                   // start the game
        game.htmlShowQuestion();                        // show question

        // set the time allowed 
        game.timeleft = RESPONSE_TIME_LIMIT/1000;
        $("#remaining-time").text(game.timeleft);        // max response time to answser
        console.log("Time remaining: " + game.timeleft);

        window.userSelectionTimer = window.setInterval(updateRemainingTime, 1000);  // start timer
    });

    // user clicks to SUBMIT QUESTION
    $("#btn-submit").on("click", function() {
        console.log("submit button clicked.");
        
        // answer received so stop counting down the remaining time
        game.answerSubmitted = true;
        clearInterval(userSelectionTimer);

        // capture the user response
        var userAnswer = $("input[type='radio'][name='choice']:checked").val();
        
        // check that the user provided an answer
        if (!userAnswer) {
            var makeSelectionText = "You must choose a response before submitting!";

            /////////////////////////////
            // populate the answer
            ///////////////////////////// 

            // clear any previous messages
            game.htmlClearAnswer();

            // add DOM element for user feedback
            var spanUserMsg = $("<span>");     
            spanUserMsg.attr("id","message");
            spanUserMsg.addClass("my-2");
            spanUserMsg.text(makeSelectionText);
    
            var e = $("#message-p");           // find where we add it
            e.append(spanUserMsg);             // add the message

            // show the answer
            $("#message-p").removeClass("d-none");

            return;
        }

        console.log("Submitted: " + userAnswer);
        var answerFlag = game.isAnswerCorrect(userAnswer);
        console.log("Result: " + answerFlag);

        /////////////////////////////////////////////// 
        // show the answer
        /////////////////////////////////////////////// 
        game.htmlShowAnswer((answerFlag ? ANSWER_RIGHT_FLAG : ANSWER_WRONG_FLAG));

        /////////////////////////////////////////////////////////////////
        // go to next question after a few seconds
        /////////////////////////////////////////////////////////////////
        window.answerTimer = window.setTimeout(answerPreviewCallback, ANSWER_PREVIEW_TIME);
    });

    ///////////////////////////////////////////
    // Functions
    ///////////////////////////////////////////
    function updateRemainingTime() {
        var timeOver = false;

        // countdown
        game.timeleft--;
        $("#remaining-time").text(game.timeleft);

        // user has run out of time
        if (game.timeleft <=0 && !game.answerSubmitted) {
            timeOver = true;

            clearInterval(userSelectionTimer);
            console.log("Out of Time!!!");
            game.questions[game.currentQuestion].timeExpired = timeOver;

            /////////////////////////////////////////////// 
            // show the answer
            /////////////////////////////////////////////// 
            game.htmlShowAnswer(TIME_EXPIRED_FLAG);

            /////////////////////////////////////////////////////////////////
            // go to next question after a few seconds
            /////////////////////////////////////////////////////////////////
            window.answerTimer = window.setTimeout(answerPreviewCallback, ANSWER_PREVIEW_TIME);

        };
        
    };

    function answerPreviewCallback() {
              
        clearTimeout(answerTimer);

        game.htmlClearAnswer();
        game.nextQuestion();
        console.log("Move to next question (game).");

        if (game.currentQuestion < game.questions.length) {
            console.log("current question: "+ game.currentQuestion);
            console.log(game.questions[game.currentQuestion]);
            console.log("game question length: " + game.questions.length);

            $("#message-p").addClass("d-none");               // hide the answer
            $("#btn-submit").removeClass("d-none");           // show the submit button

            game.htmlShowQuestion();

            /////////////////////////////////////////
            // reset user response timer
            /////////////////////////////////////////
            window.clearInterval(window.userSelectionTimer);

            // set the time allowed 
            game.timeleft = RESPONSE_TIME_LIMIT/1000;
            $("#remaining-time").text(game.timeleft);        // amount of time given to respond to the question
            console.log("Time remaining: " + game.timeleft);

            window.userSelectionTimer = window.setInterval(updateRemainingTime, 1000);      // start the timer
        } else {
            game.gameOver();

            game.resetGame();                               // reset the game variables

            ///////////////////////////////
            // start the game again
            ///////////////////////////////
            game.start();                                   // start the game
            $("#btn-submit").removeClass("d-none");           // show the submit button
            game.htmlShowQuestion();                        // show question
    
            // set the time allowed 
            game.timeleft = RESPONSE_TIME_LIMIT/1000;
            $("#remaining-time").text(game.timeleft);        // max response time to answser
            console.log("Time remaining: " + game.timeleft);
    
            window.userSelectionTimer = window.setInterval(updateRemainingTime, 1000);  // start timer
        }

    }

});


