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
2. Deal two cards each to player and dealer. Dealer shows one card.
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins. Bust = playerScore > 21
5. Dealer turn: hit or stay
   - repeat hit until total >= 17
6. If dealer busts, player wins.
7. If dealer stays, Compare cards and the one closer to 21 wins.

*/

function initializeDeck() {
    let deck = [];
    suits.forEach(suit => {
        values.forEach(value => deck.push(value + " of " + suit));
    })
    return deck;
}

function dealCards(player, dealer, deck) {
    // let deck = initializeDeck() 
    // not required because it should be handled only in the main body
    
    // returns an array of deck after invoking shuffle
    let shuffledDeck = shuffle(deck); 
    // console.log(shuffledDeck);
    //dealer assigns cards to player & dealer
    
    let count = 0;
    while (count < 2) {
        let randomCard = Math.floor(Math.random() * shuffledDeck.length);
        player.push(shuffledDeck[randomCard]);
    
    // remove the card from deckArray after every dealing of card
        shuffledDeck.splice(randomCard, 1);
        count += 1;
    }
    
    count = 0;
    while(count < 2) {
        let randomCard = Math.floor(Math.random() * shuffledDeck.length);
        dealer.push(shuffledDeck[randomCard]);
        shuffledDeck.splice(randomCard, 1);
        count += 1;
    }
    // console.log(shuffledDeck);
    return [player, dealer];
}
/*
splice method in dealCards() takes care of cards left in the deck
function currentDeck(player, dealer, deck){
    //cards left in the deck for dealing: whenever player or dealer opts for hit
    
    // find the index of cards with player & dealer in the deck
    return deck;
}
*/
// Fisher-Yates Shuffle
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}

function findValues(cards) {
    //1. check the value of cards with player and dealer
    //2. split the elements of array into a string, one at a time
    //3. the first element of the resulting array is the value
    //4. store the values in an array
    
    let cardValueArray = [];
    let valueArray = [];
    
    cards.forEach(card => {
        let cardValue = card.split(" ")[0]
        cardValueArray.push(cardValue);
        switch(cardValue) {
            case "King":
                valueArray.push(10);
                break;
            case "Queen":
                valueArray.push(10);
                break;
            case "Jack":
                valueArray.push(10);
                break;
            case "Ace":
                valueArray.push(valueOfAce(valueArray));
                break;
            default:
                valueArray.push(Number(cardValue));
        }
    })
    return valueArray;
}

function scores(player, dealer) {
    // sum of cards in hand
    
    let playerCardValues = findValues(player);
    let dealerCardValues = findValues(dealer);
    
    // console.log("Player Card Values:", playerCardValues);
    // console.log("Dealer Card Values:", dealerCardValues);
    // check sum of cards with player
    let sumPlayerCards = playerCardValues.reduce((a,b) => a + b);
    
    // check sum of cards with dealer
    let sumDealerCards = dealerCardValues.reduce((a,b) => a + b);
    
    return [sumPlayerCards, sumDealerCards];
}


function valueOfAce(array) {
// sum all the values of card based on 1 or 11
// If both the sums are less than 21, the greater sum is the value of Ace
    // let aceIsOne = 1;
    let aceIsEleven = 11;
    // array.push(aceIsOne);
    
    //let sumAceIsOne = array.reduce((a,b) => a + b);
    //removing aceIsOne
    //array.pop();
    
    array.push(aceIsEleven);
    let sumAceIsEleven = array.reduce((a,b) => a + b);
    array.pop();
    
    if (sumAceIsEleven > 21) return 1;
    return 11;
}

function dealerShow(dealer) {
    // a card shown to the player by dealer
    let randomIndex = Math.floor(Math.random() * dealer.length);
    let showCard = dealer[randomIndex];
    return showCard;
}

function hit(player, deck){
    // assign cards when dealer or player calls hit
    let randomIndex = Math.floor(Math.random() * deck.length);
    player.push(deck[randomIndex]);
    // console.log("Dealing a card after hit:", player);
    return player;
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
        console.log(`Result: ${result}`);
        if( result === "PLAYER BUSTED") {
            return "DEALER WINS!";
        }
        if( result === "DEALER BUSTED") {
            return "PLAYER WINS!";
        }
    }
    let [playerScore, dealerScore] = scores(player, dealer);
    if (playerScore === dealerScore) {
        console.log("It's a tie!");
        return;
    }
    playerScore > dealerScore ? console.log("PLAYER WINS!") : console.log("DEALER WINS!");
}

/*
MAIN BODY
=========
*/

const READLINE = require('readline-sync');
const suits = ["Club", "Diamond", "Heart", "Spade"];
const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "King", "Queen", "Jack"];
let player = [];
let dealer = [];
let playerScore = 0;
let dealerScore = 0;

let deck = initializeDeck(); // return an object of deck of 52 cards

// console.log(deck); // initialised
// assign cards to player & dealer

[player, dealer] = dealCards(player, dealer, deck);

console.log('You have:', player);
//console.log('Dealer:', dealer);

// currentDeck(player, dealer); // cards left in the deck

// showDealerCard
console.log(`Dealer shows: ${dealerShow(dealer)}`);

while(true) {
    console.log("Player: hit or stay?");
    let answer = READLINE.question();
    [playerScore, dealerScore] = scores(player, dealer);
    
    if (answer === "stay") {
        console.log("Player Score:", playerScore);
        console.log("Dealer Score:", dealerScore);
        dealerChance();
        break;
    }
    // else deal a card from deck
    // assign it to player
    player = hit(player, deck);
    console.log("Player after hit:", player);
    
    let isBusted = busted(player,dealer);
    if (isBusted) {
        [playerScore, dealerScore] = scores(player, dealer);
        console.log(`Player Score: ${playerScore}`);
        break;
    }
    
    // console.log("Dealer:", dealer);
    // console.log(`Busted?: ${isBusted}`);
    
    // determine the value of ace, each time a card is drawn
    function dealerChance() {
        [playerScore, dealerScore] = scores(player, dealer);
        while (dealerScore < 17) {
            console.log(`Dealer Score not > 17; we will hit the deck for you`);
            dealer = hit(dealer, deck);
            console.log("Dealer: ", dealer);
            [playerScore, dealerScore] = scores(player, dealer);
        }
        
        if (busted(player, dealer)) {
            console.log("Dealer: ", dealer);
            [playerScore, dealerScore] = scores(player, dealer);
            console.log(`Dealer Score: ${dealerScore}`);
            return;
        }
        
        // if (dealerScore > 17) {
        console.log("Player:", player);
        console.log("Player Score:", playerScore);
        console.log("Dealer:", dealer);
        console.log("Dealer Score:", dealerScore);
        return;
        /*} else {
            console.log(`Dealer Score not > 17; we will hit the deck for you`);
            dealer = hit(dealer, deck);
        }*/
        // dealer = hit(dealer, deck);
        // console.log("Dealer after hit:", dealer);
        // console.log("Player:", player);
    }
}

// deal a card to dealer
/*
while(true) {
    // hit(dealer, deck);
    // console.log("Dealer: hit or stay?");
    // let answer = READLINE.question();
    [playerScore, dealerScore] = scores(player, dealer);
    if (dealerScore > 17) {
        console.log("Player:", player);
        console.log("Player Score:", playerScore);
        console.log("Dealer:", dealer);
        console.log("Dealer Score:", dealerScore);
        break;
    } else {
        console.log(`Dealer Score not > 17; we will hit the deck for you`);
        dealer = hit(dealer, deck);
    }
    // dealer = hit(dealer, deck);
    // console.log("Dealer after hit:", dealer);
    // console.log("Player:", player);
    if (busted(player, dealer)) {
        console.log("Dealer: ", dealer);
        //[playerScore, dealerScore] = scores(player, dealer);
        console.log(`Dealer Score: ${dealerScore}`);
        break;
    }
}
*/
displayResult(player, dealer);