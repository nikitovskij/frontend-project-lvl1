#!/usr/bin/env node
import readline from 'readline-sync';

const randomInteger = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (number) => number % 2 === 0;
const generateQuestion = () => {
  const question = randomInteger(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

const ANSWERS_COUNTER = 3;

const run = () => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let counter = 0; counter < ANSWERS_COUNTER; counter += 1) {
    const { question, answer } = generateQuestion();
    console.log(`Question: ${question}`);

    const playerAnswer = readline.question('Your answer: ');

    if (answer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

run();
