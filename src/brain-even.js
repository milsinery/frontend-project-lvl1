import { question, setDefaultOptions } from 'readline-sync';

const brainEven = () => {
  let countOfQuestions = 3;
  setDefaultOptions({ defaultInput: 'friend' });

  const name = question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);

  const checkNumberIsEven = (num) => {
    const result = num % 2 === 0 ? 'yes' : 'no';
    return result;
  };

  const game = (num) => {
    console.log(`Question: ${num}`);
    const answer = question('Your answer: ').toLocaleLowerCase();
    const isEvenNumber = checkNumberIsEven(num);

    if (answer === isEvenNumber) {
      console.log('Correct!');
      countOfQuestions -= 1;
      if (countOfQuestions === 0) console.log(`Congratulations, ${name}`);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was ${answer === 'yes' ? '"no"' : '"yes"'}. Let's try again, ${name}!`);
      countOfQuestions = 0;
    }
  };

  do {
    game(getRandomNumber());
  } while (countOfQuestions !== 0);
};

export default brainEven;
