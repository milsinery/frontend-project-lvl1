import readlineSync from 'readline-sync';

export const askNameAndWelcome = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name.length > 0 ? name : 'friend'}!`);
};
