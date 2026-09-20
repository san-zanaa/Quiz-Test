const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "Madrid", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Venus", correct: false},
        ]
    },
    {
        question: "How many days are there in a week?",
        answers: [
            {text: "5", correct: false},
            {text: "6", correct: false},
            {text: "7", correct: true},
            {text: "8", correct: false},
        ]
    },
    {
        question: "Which is the largest planet in our solar system?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Saturn", correct: false},
        ]
    },
    {
        question: "Which language is used to style web pages?",
        answers: [
            {text: "HTML", correct: false},
            {text: "CSS", correct: true},
            {text: "JavaScript", correct: false},
            {text: "Python", correct: false},
        ]
    },
    {
        question: "How many continents are there in the world?",
        answers: [
            {text: "5", correct: false},
            {text: "6", correct: false},
            {text: "7", correct: true},
            {text: "8", correct: false},
        ]
    },
    {
        question: "Which organ pumps blood through the human body?",
        answers: [
            {text: "Brain", correct: false},
            {text: "Lungs", correct: false},
            {text: "Heart", correct: true},
            {text: "Stomach", correct: false},
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answers: [
            {text: "Lion", correct: false},
            {text: "Cheetah", correct: true},
            {text: "Tiger", correct: false},
            {text: "Horse", correct: false},
        ]
    },
    {
        question: "Which programming language is mainly used to make web pages interactive?",
        answers: [
            {text: "CSS", correct: false},
            {text: "HTML", correct: false},
            {text: "JavaScript", correct: true},
            {text: "SQL", correct: false},
        ]
    }
];

const quizText = document.getElementsByClassName("quiz");
const answerText = document.getElementsByClassName("answers");
const nextButton = document.getElementById("next");