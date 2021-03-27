// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../util.js';
import { getComputerThrow } from '../util.js';

const test = QUnit.test;

test('if user and computer choose the same object, returns draw', (expect) => {
    const userChoice = 'rock';
    const compChoice = 'rock';
    const actual = didUserWin(userChoice, compChoice);
    expect.equal(actual, 'draw', 'rock v. rock is a draw');
});

test('if user and computer choose the same object, returns draw', (expect) => {
    const userChoice = 'paper';
    const compChoice = 'paper';
    const actual = didUserWin(userChoice, compChoice);
    expect.equal(actual, 'draw', 'paper v. paper is a draw');
});

test('if user and computer choose the same object, returns draw', (expect) => {
    const userChoice = 'scissors';
    const compChoice = 'scissors';
    const actual = didUserWin(userChoice, compChoice);
    expect.equal(actual, 'draw', 'scissor v. scissor is a draw');
});

test('if user chooses rock and computer chooses paper, returns lose', (expect) => {
    const userChoice = 'rock';
    const compChoice = 'paper';
    const actual = didUserWin(userChoice, compChoice);
    expect.equal(actual, 'lose', 'rock v. paper is a lose');
});

test('if user chooses rock and computer chooses scissor, returns win', (expect) => {
    const userChoice = 'rock';
    const compChoice = 'scissors';
    const actual = didUserWin(userChoice, compChoice);
    expect.equal(actual, 'win', 'rock v. scissor is a win');
});

test('if user chooses paper and computer chooses rock, returns win', (expect) => {
    const userChoice = 'paper';
    const compChoice = 'rock';
    const actual = didUserWin(userChoice, compChoice);
    expect.equal(actual, 'win', 'paper v. rock is a win');
});

test('if user chooses paper and computer chooses scissor, returns lose', (expect) => {
    const userChoice = 'paper';
    const compChoice = 'scissors';
    const actual = didUserWin(userChoice, compChoice);
    expect.equal(actual, 'lose', 'paper v. scissor is a lose');
});

test('if user chooses scissor and computer chooses rock, returns lose', (expect) => {
    const userChoice = 'scissors';
    const compChoice = 'rock';
    const actual = didUserWin(userChoice, compChoice);
    expect.equal(actual, 'lose', 'scissor v. rock is a lose');
});

test('if user chooses scissor and computer chooses paper, returns win', (expect) => {
    const userChoice = 'scissors';
    const compChoice = 'paper';
    const actual = didUserWin(userChoice, compChoice);
    expect.equal(actual, 'win', 'scissor v. paper is a win');
});

test('if user chooses scissor and computer chooses paper, returns win', (expect) => {
    const userChoice = 'scissors';
    const compChoice = 'paper';
    const actual = didUserWin(userChoice, compChoice);
    expect.equal(actual, 'win', 'scissor v. paper is a win');
});
