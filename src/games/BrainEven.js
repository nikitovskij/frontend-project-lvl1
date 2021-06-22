import start from '../index.js';
import * as generator from '../utils/generator.js';

const GAME_RULE = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const generateQuestion = () => {
  const question = generator.randomInteger(1, 100);

  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

const run = () => start({ rule: GAME_RULE, generateQuestion });

export default run;
