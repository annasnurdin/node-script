import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const nama = await rl.question('Siapa namamu? ');

console.log(`Halo! ${nama}`);

rl.close();