var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 ="dice"+ randomNumber1+".png";

var randomDiceImage2 ="dice"+ randomNumber2+".png";

var randomDiceSource1 = "images/" + randomDiceImage1;

var randomDiceSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomDiceSource1);

image2.setAttribute("src",randomDiceSource2);

if (randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML ="🤟Player 1 wins!"
    document.querySelector("h1").style.color="orange"
}
else if(randomNumber1<randomNumber2)
{
      document.querySelector("h1").innerHTML ="Player 2 wins🤟!"
      document.querySelector("h1").style.color="orange"
}
else{
      document.querySelector("h1").innerHTML ="🤝Draw!"
      document.querySelector("h1").style.color="white"
}