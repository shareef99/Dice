var randomNumber1 = Math.floor((Math.random()*6)+1);
// console.log(randomNumber1);
if(randomNumber1 === 1){
    document.querySelectorAll("img")[0].src = "images/dice1.png";
}
else if (randomNumber1 === 2)
{
    document.querySelectorAll("img")[0].src = "images/dice2.png";    
}
else if (randomNumber1 === 3)
{
    document.querySelectorAll("img")[0].src = "images/dice3.png";    
}
else if (randomNumber1 === 4)
{
    document.querySelectorAll("img")[0].src = "images/dice4.png";    
}
else if (randomNumber1 === 5)
{
    document.querySelectorAll("img")[0].src = "images/dice5.png";    
}
else if (randomNumber1 === 6)
{
    document.querySelectorAll("img")[0].src = "images/dice6.png";    
}
else
{
    console.log(randomNumber1);
}
// second random dice

var randomNumber2 = Math.floor((Math.random()*6)+1);

if(randomNumber2 === 1){
    document.querySelectorAll("img")[1].src = "images/dice1.png";
}
else if (randomNumber2 === 2)
{
    document.querySelectorAll("img")[1].src = "images/dice2.png";    
}
else if (randomNumber2 === 3)
{
    document.querySelectorAll("img")[1].src = "images/dice3.png";    
}
else if (randomNumber2 === 4)
{
    document.querySelectorAll("img")[1].src = "images/dice4.png";    
}
else if (randomNumber2 === 5)
{
    document.querySelectorAll("img")[1].src = "images/dice5.png";    
}
else if (randomNumber2 === 6)
{
    document.querySelectorAll("img")[1].src = "images/dice6.png";    
}
else
{
    console.log(randomNumber1);
} 

// condition 

function result() {
    if (randomNumber1 === randomNumber2)
    {
    document.querySelector("h1").innerText = "Draw!";
    }
    else if (randomNumber1 > randomNumber2)
    {   
    document.querySelector("h1").innerText = "Player 1 wins!";
    }
    else if (randomNumber1 < randomNumber2)
    {
    document.querySelector("h1").innerText = "Player 2 wins!";
    }
}

function start() {
    setTimeout(function () {
        result();
      }, 1000);
}
