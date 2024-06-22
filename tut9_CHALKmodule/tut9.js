//here we discuss how to use install any packege and reading documentaion for how to use packege file
// command for install any packege --> npm i pack_name
//here we install CHALK packege 


import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log((chalk.red('Hello', chalk.underline.bgBlue('world') + '!')))

