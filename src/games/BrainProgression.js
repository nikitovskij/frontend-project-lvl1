import start from '../index.js';
import * as generator from '../Service/generator.js';

const GAME_RULE = '';

const PROGRESSION_LENGTH = 10;

const getProgression = (num, multiplier, progressionLength) => {
  const result = [num];
  let sum = num;

  for (let i = 0; i < progressionLength; i += 1) {
    sum += multiplier;
    result.push(sum);
  }

  return result;
};

const generateQuestion = () => {
  const num = generator.randomInteger(1, 100);
  const multiplier = generator.randomInteger(1, 10);
  const guessingNumIndex = generator.randomInteger(1, PROGRESSION_LENGTH - 1);

  const progression = getProgression(num, multiplier, PROGRESSION_LENGTH);
  const answer = progression[guessingNumIndex].toString();
  const question = progression.join(' ').replace(answer, '..');

  return { question, answer };
};

const run = () => start({ rule: GAME_RULE, generateQuestion });

export default run;
