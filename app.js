// import functions and grab DOM elements
import { handlePlayClick, handleResetClick } from './handler.js';

const playButtonEl = document.getElementById('playButtonEl');
const resetButtonEl = document.getElementById('resetButtonEl');

// set event listeners to update state and DOM
playButtonEl.addEventListener('click', handlePlayClick);
resetButtonEl.addEventListener('click', handleResetClick);
