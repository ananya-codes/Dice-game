var p1 =1+(Math.random() * 6);
var p2 =1+(Math.random() * 6);

p1 = Math.floor(p1);
p2 = Math.floor(p2);

var p1L = "./images/dice" + p1 + ".png";
var p2L = "./images/dice" + p2 + ".png";

var link1 = document.querySelector("body > div > div > div:nth-child(1) > img");
link1.setAttribute("src",p1L);

var link = document.querySelector("body > div > div > div:nth-child(2) > img");
link.setAttribute("src",p2L);

if(p1>p2){
    document.querySelector("body > div > h1").innerHTML = "Player 1 Wins!";
}
else if(p2>p1){
    document.querySelector("body > div > h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("body > div > h1").innerHTML = "draw!";
}