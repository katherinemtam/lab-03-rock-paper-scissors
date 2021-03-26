// import functions and grab DOM elements
import { didUserWin } from './util.js';
import { getComputerThrow } from './util.js';

const playEl = document.getElementById('playEl');
const winDrawLose = document.getElementById('winDrawLose');
const compThrowEl = document.getElementById('compThrowEl');
const winsEl = document.getElementById('winsEl');
const drawsEl = document.getElementById('drawsEl');
const lossesEl = document.getElementById('lossesEl');
const totalEl = document.getElementById('totalEl');
const resetEl = document.getElementById('resetEl');
const resetNumberEl = document.getElementById('resetNumberEl');

// initialize state
let wins = 0;
let draws = 0;
let losses = 0;
let total = wins + draws + losses;
let reset = 0;

// set event listeners to update state and DOM
playEl.addEventListener('click', () => {
    const randomNumber = Math.random();
    const computerThrow = getComputerThrow(randomNumber);
    const choice = document.querySelector('input:checked');
    const userChoice = choice.value;
    compThrowEl.classList.remove('hidden');
    compThrowEl.textContent = `The computer played ${computerThrow}.`;

    total++;

    if (didUserWin(userChoice, computerThrow) === 'win') {
        wins++;
        winDrawLose.textContent = 'You win!';
    } else if (didUserWin(userChoice, computerThrow) === 'lose') {
        losses++;
        winDrawLose.textContent = 'You lose!';
    } else {
        draws++;
        winDrawLose.textContent = "It's a draw.";
    }

    winsEl.textContent = `Wins: ${wins}`;
    drawsEl.textContent = `Draws: ${draws}`;
    lossesEl.textContent = `Losses: ${losses}`;
    totalEl.textContent = `Total: ${total}`;
});

resetEl.addEventListener('click', () => {
    winDrawLose.textContent = "It's time to test your luck!";
    wins = 0;
    draws = 0;
    losses = 0;
    total = 0;
    reset++;
    compThrowEl.textContent = '';
    resetNumberEl.textContent = `Number of Resets: ${reset}`;
});