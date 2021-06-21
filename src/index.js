import readline from 'readline-sync';

const ANSWERS_COUNTER = 3;

const start = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(game.rule);

  for (let counter = 0; counter < ANSWERS_COUNTER; counter += 1) {
    const { question, answer } = game.generateQuestion();
    console.log(`Question: ${question}`);

    const playerAnswer = readline.question('Your answer: ');

    if (answer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default start;
