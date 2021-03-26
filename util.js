export function getComputerThrow() {
    let randomThrow = Math.random();
    if (randomThrow < 0.33) {
        return 'rock';
    } else if (randomThrow > 0.66) {
        return 'paper';
    } return 'scissor';
}

export function didUserWin(player, computer) {
    if (player === 'rock' && computer === 'paper') {
        return 'lose';
    } else if (player === 'paper' && computer === 'scissor') {
        return 'lose';
    } else if (player === 'scissor' && computer === 'rock') {
        return 'lose';
    } else if (player === 'rock' && computer === 'scissor') {
        return 'win';
    } else if (player === 'paper' && computer === 'rock') {
        return 'win';
    } else if (player === 'scissor' && computer === 'paper') {
        return 'win';
    } else { return 'draw'; }
}