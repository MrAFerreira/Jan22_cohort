const chalk = require('chalk');

const pokemon = require('pokemon');

const catme = require('cat-me');
//import chalk from 'chalk';

console.log(chalk.red(catme()));
console.log(chalk.bgBlue(pokemon.random()));
