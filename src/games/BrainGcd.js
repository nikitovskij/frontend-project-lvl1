import start from '../index.js';
import * as generator from '../Service/generator.js';

const GAME_RULE = 'Find the greatest common divisor of given numbers.';
const findGcd = (num1, num2) => (num2 === 0 ? num1 : findGcd(num2, num1 % num2));
const generateQuestion = () => {
  const num1 = generator.randomInteger(0, 100);
  const num2 = generator.randomInteger(0, 100);

  const question = `${num1} ${num2}`;
  const answer = findGcd(num1, num2).toString();

  return { question, answer };
};

const run = () => start({ rule: GAME_RULE, generateQuestion });

export default run;
