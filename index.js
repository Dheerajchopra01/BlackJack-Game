let player = {
    name: "Guest",
    chips: 200 
}

let betAmount = 20;
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let defaultMessage = "Want to play a round? Bet is $" + betAmount;


messageEl.textContent = defaultMessage;
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    playerEl.textContent = player.name + ": $" + player.chips;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += betAmount;
    } else {
        message = "You're out of the game!"
        isAlive = false
         player.chips -= betAmount;
    }
    messageEl.textContent = message
    playerEl.textContent = player.name + ": $" + player.chips;

    if(player.chips <= 0){
        alert("Please Reset the Game.");
    }
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

function reset(){
     hasBlackJack = false
     isAlive = false

    cards=[];
    cardsEl.textContent ="Cards:";
    sum=0;
    sumEl.textContent="Sum:";
    player.chips = 200;

    messageEl.textContent = defaultMessage;
    playerEl.textContent = player.name + ": $" + player.chips;
}
