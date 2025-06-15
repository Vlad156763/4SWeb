import readline from 'readline';
import { requestSum } from './requester.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введіть два числа через пробіл: ', async (input) => {
  const [a, b] = input.split(' ').map(Number);
  const result = await requestSum(a, b);
  console.log(`Результат: ${result}`);
  rl.close();
});

