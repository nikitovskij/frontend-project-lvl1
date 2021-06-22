import start from '../index.js';
import * as generator from '../utils/generator.js';

const GAME_RULE = 'What is the result of the expression?';

const OPERATORS = ['+', '-', '*'];

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Invalid operator';
  }
};

const generateQuestion = () => {
  const num1 = generator.randomInteger(0, 100);
  const num2 = generator.randomInteger(0, 100);
  const sign = generator.randomItem(OPERATORS);

  const answer = calc(num1, num2, sign).toString();
  const question = `${num1} ${sign} ${num2}`;

  return { question, answer };
};

const run = () => start({ rule: GAME_RULE, generateQuestion });

export default run;
