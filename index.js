function myfunction() {
//generate player random number
var random1 = Math.random() * 6;
random1 =  Math.floor(random1) + 1;

//generate player 2 random number
var random2 = Math.random() * 6;
random2 =  Math.floor(random2) + 1;

//assigning random number to images
document.querySelector(".dice1 img").setAttribute("src","images/dice"+random1+".png");

//assinging random with image to player 2
document.querySelector(".dice2 img").setAttribute("src","images/dice"+random2+".png");

if(random1>random2){
  document.querySelector(".begin h2").innerHTML="<span>&#x1F6A9</span> Player 1 Wins!";
}
else if(random1<random2){
    document.querySelector(".begin h2").innerHTML="Player 2 Wins! <span>&#x1F6A9</span>";
}
else{
    document.querySelector(".begin h2").innerHTML="DRAW!";
}
}
