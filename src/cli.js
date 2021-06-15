import readline from 'readline-sync';

export const greet = () => {
    console.log("Welcome to the Brain Games!");
    const name = readline.question("May I have your name? ");

    return `Hello, ${name}!`;
};