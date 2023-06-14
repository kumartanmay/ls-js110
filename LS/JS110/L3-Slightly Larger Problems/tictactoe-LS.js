/*
ALGO:
1. Display the current state of the 9x9 board
2. User enters in one of the unoccupied grids
3. Computer enters in one of the unoccupied grids
4. Display the updated board
5. If anyone wins, display the winner
6. If board is full and no one wins, display tie
7. If neither, goto step 2
8. Play again?
9. If yes, goto step 1
10. Good bye.
*/

let readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const USER_MARKER = 'X';
const CPU_MARKER = 'O';
const GAMES_TO_OVERALL_WIN = 5;
const WINNING_LINES = [
        [1,2,3], [4,5,6], [7,8,9],
        [1,4,7], [2,5,8], [3,6,9],
        [1,5,9], [3,5,7]
        ];

function displayBoard(board) {
    
    console.log(`You are ${USER_MARKER} while computer is ${CPU_MARKER}`);
    
    console.log('');
    console.log('     |     |');
    console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`);
    console.log('     |     |');
    console.log('');
}

function initialiseBoard() {
    
    let board = {};
    
    for (let i = 1; i <= 9; i++) {
        board[i] = INITIAL_MARKER;
    }
    return board;
}

function prompt(message) {
    console.log(message);
}

function emptySquares(board) {
    return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function userInput(board) {
    let square; // undefined
    
    while(true) {
        let emptyGrids = emptySquares(board);
        
        prompt(`Please choose a square ${joinOr(emptyGrids)}: `);
        // console.log("Empty grids, ", emptyGrids);
        square = readline.question();
        
        if (emptyGrids.includes(square)) break;
        else {
            prompt('Invalid! Please enter again')
            // square = readline.question();  -> wrong user inputs will alternate between this prompt and `Please choose a square between 1 and 9: `
        }
    }
    
    board[square] = USER_MARKER;
}
/*
The computer currently picks a square at random. That's not very interesting. 
Let's make the computer defensive-minded so that, when an immediate threat exists, it will try to defend the 3rd square. 
An immediate threat occurs when the human player has 2 squares in a row with the 3rd square unoccupied. 
If there's no immediate threat, the computer can pick a random square.

Info:
1. When user has two of the three winning sequence from a winning line, cpu will defend the third square
2. The third square should be unoccupied
3. If the two sequences are not matching with any winning line, then cpu will input randomnly

EXAMPLE:
1. user input = [1,2] / [2,3] / [1,3]
2. cpu input = [3] / [1] / [2] (provided it is unoccupied)

1. user input = [1,4] / [4,7] / [1,7]
2. cpu input = [7] / [1] / [4]

Data structure:
1. Input: current state of the board: grids occupied by user + empty grids
2. Output: cpu marker

Algo:
1. get the sequence of grids occupied by human marker
2. check the sequence matches with two elements in any of the winning lines
    2.1 if yes, check if the third sequence is an empty grid
    2.2 if yes, next computer marker is the empty grid
3. If it is a no in #2/ #2.1/ #2.2 then randomnly assign a grid to cpu
*/
function cpuInput(board) {
    let emptyGrids = emptySquares(board);
    let cpuSquare;

    /*
    CPU OFFENSE
    ===========
    CPU offense will check for two empty grids in winning sequence.
    */
    for (let lines = 0; lines < WINNING_LINES.length; lines++) {
        
        // find the two grids of winning sequence already occupied
        let line = WINNING_LINES[lines];
        let winLine = line.filter(seq => board[seq] === CPU_MARKER); 
        
        // cpu makes a winning move
        if(winLine.length === 2) { 
            // find the unoccupied sequence
            let gridAtTarget = line.filter(seq=> board[seq] === INITIAL_MARKER)[0];
            if(emptyGrids.includes(String(gridAtTarget))) {
                cpuSquare = gridAtTarget;
                console.log("cpuSquare: ", cpuSquare);
                board[cpuSquare] = CPU_MARKER;
                return board;
            }
        }
    }
    
    // CPU Defense
    for (let lines = 0; lines < WINNING_LINES.length; lines++) {
        // let [sq1, sq2, sq3] = WINNING_LINES[lines];
        
        // find the two grids of winning sequence already occupied
        let line = WINNING_LINES[lines];
        let userLine = line.filter(seq => board[seq] === USER_MARKER); 
        // console.log(userLine);
        if(userLine.length === 2) { // game is at risk
            console.log(userLine);
            // find the unoccupied sequence
            let gridAtRisk = line.filter(seq=> board[seq] === INITIAL_MARKER)[0];
            // console.log(emptyGrids.includes(String(gridAtRisk)));
            if(emptyGrids.includes(String(gridAtRisk))) {
                cpuSquare = gridAtRisk;
                console.log("cpuSquare: ", cpuSquare);
                board[cpuSquare] = CPU_MARKER;
                return board;
            }
        }
    }
    
    
    cpuSquare = emptyGrids[Math.floor(Math.random() * emptyGrids.length)];
    board[cpuSquare] = CPU_MARKER;
    return board;
}

function someoOneWon(board) {
    return !!detectWinner(board);
}

// detectWinner will return 'Player' or 'Computer' or 'null'
function detectWinner(board) {
        
    for (let lines = 0; lines < WINNING_LINES.length; lines++) {
        let [sq1, sq2, sq3] = WINNING_LINES[lines];
        if (board[sq1] === USER_MARKER && board[sq2] === USER_MARKER && board[sq3] === USER_MARKER) return 'User';
        if (board[sq1] === CPU_MARKER && board[sq2] === CPU_MARKER && board[sq3] === CPU_MARKER) return 'CPU';
    }
    return null;
}

function boardFull(board) {
    return emptySquares(board).length === 0;
}

function joinOr(array) {
    // ouput: string
    let lastElement = array.pop();
    let result = array.join(", ");
    array.push(lastElement); // so calling array stays the same
    result = result.concat(' or ', lastElement);
    return result;
}

function displayScore(score, board) {
    // detectWinner
    // report score after each game
    // first player to win 5 games wins overall
    // score resets to zero at the beginning of a new match
    
    if (detectWinner(board)) { // if winner is not null
        let winner = detectWinner(board).toLowerCase();
        score[winner] += 1;
    }
    return score;
}

/*
GLOBAL EXECUTABLE BODY
======================
*/
let score = {
        user: 0,
        cpu: 0
    };

while(true) {
    let board = initialiseBoard();
    
    // displayBoard(board);
    
    while(true) {
        displayBoard(board);
        
        userInput(board);
        if(someoOneWon(board) || boardFull(board)) break;
        
        cpuInput(board);
        if(someoOneWon(board) || boardFull(board)) break;
    
    }
    
    displayBoard(board);
    
    if (someoOneWon(board)) {
        prompt(`${detectWinner(board)} won!`);
    } else {
        prompt(`It's a tie!`);
    }
    
    score = displayScore(score, board);
    console.log(`Your Score: ${score.user}`)
    console.log(`Computer Score: ${score.cpu}`)
    
    if(score.user === GAMES_TO_OVERALL_WIN || score.cpu === GAMES_TO_OVERALL_WIN) {
        console.log(`\n GAME OVER! \n`)
        prompt('Do you want to play again (y/n): ');
        let answer = readline.question();
        if(answer.toLowerCase()[0] !== 'y') break;
    }
    /*
    prompt('Do you want to play again (y/n): ');
    let answer = readline.question();
    if(answer.toLowerCase()[0] !== 'y') break;
    */
}

prompt("Thank you for playing TicTacToe!")