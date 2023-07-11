/*
TWENTY ONE

Rules:
=====
1. Two players: dealer + player
2. Both dealer and player are handed two cards at random from the deck of 52 cards
3. The dealer must show one of the cards 
4. The player decides to stay or hit based on his and the dealer's cards
5. The value of cards is
    - 2-10 : same as face value
    - J,Q,K: 10
    - Ace: 1 or 11
6. The sum of cards in hands should be less than or equal to 21. 
7. Player or dealer loses if sum of cards in either hands is greater than 21. The event is called busted.
8. When a player decides to stay, the dealer must hit until 17
9. When both of them decide to stay, compare the cards. The one closer to 21 wins.

Data Structure:
===============
1. Deck = object
2. Player = array of cards
3. Dealer = array of cards
4. playerScore = number
5. dealerScore = number
4. result = string

Algo:
====
1. Initialize deck : all 52 cards available for deal
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

*/

function initializeDeck() {
    let suits = {
        "spade": values, 
        "club": values, 
        "diamond": values, 
        "heart": values
        };
    let values = {
        "ace": [1,11], 
        "two": 2, 
        "three":3, 
        "four": 4, 
        "five": 5,
        "six": 6, 
        "seven": 7, 
        "eight": 8, 
        "nine": 9, 
        "ten": 10, 
        "jack": 10,
        "queen": 10,
        "king": 10,
        };
    return [suits, values];
}

function deck(player, dealer){
    //cards left in the deck for dealing: whenever player or dealer opts for hit
    return [suits, values];
}

function dealCards(player, dealer, deck) {
    //dealer assigns cards to player & dealer
    return [player, dealer]
}

function hit(player, dealer, deck){
    // assign cards when dealer or player calls hit
}

function scores(player, dealer) {
    // sum of cards in hand
    
    // check sum of cards with player
    let sumPlayerCards = player.reduce((a,b) => a + b);
    
    // check sum of cards with dealer
    let sumDealerCards = dealer.reduce((a,b) => a + b);
    
    return [sumPlayerCards, sumDealerCards];
}

function busted(player, dealer) {
    let [playerScore, dealerScore] = scores(player, dealer);
    if (playerScore > 21) return "PLAYER BUSTED";
    if (dealerScore > 21) return "DEALER BUSTED";
    return;
}

function displayResult(player, dealer) {
    // if either player is busted, the other one wins
    // else, compare the sum of cards in both the hands, the one closer to, but less than, 21 wins.
    let result = busted(player, dealer);
    while(result) {
        if( result === "PLAYER BUSTED") {
            return "DEALER WINS!;
        }
        if( result === "DEALER BUSTED") {
            return "PLAYER WINS!";
        }
    }
    let [playerScore, dealerScore] = scores(player, dealer);
    playerScore > dealerScore ? return "PLAYER WINS!" : return "DEALER WINS!";
}

/*
MAIN BODY
=========
*/

const READLINE = require('readline-sync');
let player = [];
let dealer = [];
let deck = initializeDeck();
