import start from '../index.js';
import * as generator from '../Service/generator.js';

const GAME_RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestion = () => {
  const question = generator.randomInteger(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};
const run = () => start({ rule: GAME_RULE, generateQuestion });

export default run;
