import { didUserWin, getComputerThrow } from './util.js';

const winDrawLose = document.getElementById('winDrawLose');
const compThrowEl = document.getElementById('compThrowEl');
const winsEl = document.getElementById('winsEl');
const drawsEl = document.getElementById('drawsEl');
const lossesEl = document.getElementById('lossesEl');
const totalEl = document.getElementById('totalEl');
const resetNumberEl = document.getElementById('resetNumberEl');

let wins = 0;
let draws = 0;
let total = 0;
let reset = 0;

export function handlePlayClick() {
    const computerThrow = getComputerThrow();
    const choice = document.querySelector('input:checked');
    const userChoice = choice.value;
    compThrowEl.classList.remove('hidden');
    compThrowEl.textContent = `The computer played ${computerThrow}.`;

    total++;

    if (didUserWin(userChoice, computerThrow) === 'win') {
        wins++;
        winDrawLose.textContent = 'You win!';
    } else if (didUserWin(userChoice, computerThrow) === 'lose') {
        winDrawLose.textContent = 'You lose!';
    } else {
        draws++;
        winDrawLose.textContent = "It's a draw.";
    }

    winsEl.textContent = `Wins: ${wins}`;
    drawsEl.textContent = `Draws: ${draws}`;
    lossesEl.textContent = `Losses: ${total - wins - draws}`;
    totalEl.textContent = `Total: ${total}`;
}

export function handleResetClick() {
    winDrawLose.textContent = "It's time to test your luck!";
    wins = 0;
    draws = 0;
    total = 0;
    reset++;
    winsEl.textContent = 'Wins: 0';
    drawsEl.textContent = 'Draws: 0';
    lossesEl.textContent = 'Losses: 0';
    totalEl.textContent = 'Total: 0';
    compThrowEl.textContent = '';
    resetNumberEl.textContent = `Number of Resets: ${reset}`;
}
