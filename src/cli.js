import readline from 'readline-sync';
import run from './index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // TODO: selector of games
  run();
};
