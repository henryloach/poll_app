import { writable } from 'svelte/store';

const PollStore = writable([
    {
        id: 1,
        question: 'Nim or Crystal?',
        answerA: 'Nim',
        answerB: 'Crystal',
        votesA: 1,
        votesB: 1
    },
    {
        id: 2,
        question: 'Cheese?',
        answerA: 'Yes',
        answerB: 'No',
        votesA: 7,
        votesB: 3
    },
    {
        id: 3,
        question: 'Wine?',
        answerA: 'Red',
        answerB: 'White',
        votesA: 2,
        votesB: 1
    },
    {
        id: 4,
        question: 'Fruit?',
        answerA: 'Apples',
        answerB: 'Oranges',
        votesA: 3,
        votesB: 9
    },
    {
        id: 5,
        question: 'Most aesthetically displeasing programming language logo?',
        answerA: 'LFE',
        answerB: 'PHP',
        votesA: 5,
        votesB: 2
    },
    {
        id: 6,
        question: 'Is it a nice day?',
        answerA: 'Yes',
        answerB: 'No',
        votesA: 1,
        votesB: 11
    }
]);

export default PollStore;