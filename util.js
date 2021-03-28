export function getComputerThrow() {
    let randomThrow = Math.random();
    if (randomThrow < 0.33) {
        return 'rock';
    } else if (randomThrow > 0.66) {
        return 'paper';
    } return 'scissors';
}

export function didUserWin(player, computer) {
    const outcome = player + ':' + computer;
    let result = '';

    switch (outcome) {
        case 'rock:paper':
            result = 'lose';
            break;
        case 'paper:scissors':
            result = 'lose';
            break;
        case 'scissors:rock':
            result = 'lose';
            break;
        case 'rock:scissors':
            result = 'win';
            break;
        case 'paper:rock':
            result = 'win';
            break;
        case 'scissors:paper':
            result = 'win';
            break;
        default:
            result = 'draw';
            break;
    }
    return result;
}

// function didUserWin using if...else statement
// export function didUserWin(player, computer) {
//     if (player === 'rock' && computer === 'paper') {
//         return 'lose';
//     } else if (player === 'paper' && computer === 'scissors') {
//         return 'lose';
//     } else if (player === 'scissors' && computer === 'rock') {
//         return 'lose';
//     } else if (player === 'rock' && computer === 'scissors') {
//         return 'win';
//     } else if (player === 'paper' && computer === 'rock') {
//         return 'win';
//     } else if (player === 'scissors' && computer === 'paper') {
//         return 'win';
//     } else { return 'draw'; }
// }
