
let cards=[]
let sum = 0 
let hasBlackJack=false
let isAlive =false
let message=""
let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame()
{
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    sum=firstCard+secondCard
    cards=[firstCard,secondCard]
    renderGame()
}

function getRandomCard()
{
    let randomeNumber=Math.floor(Math.random()*13)+1
    if(randomeNumber>10)
    {
        return 10
    }
    else if(randomeNumber === 1)
    {
        return 11
    }
    else
    {
        return randomeNumber
    }
    return randomeNumber
}
function renderGame()
{
  
    cardsEl.textContent ="cards :-"

      for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent="Sum :-"+sum
    if(sum<=20)
    {
        message="Do you want to draw a new card?"
        
    
    }
    else if (sum===21)
    {
        message="you win card"
        
        hasBlackJack=true
    
    } else
    {
        isAlive=false
        message="You loss"
    }
    messageEl.textContent=message
}

function addCard(){
   if(isAlive==false || hasBlackJack==true)
   {}
   else
   {
    let newCard=getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
   }

}


