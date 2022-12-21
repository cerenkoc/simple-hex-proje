const colors = ["blue", "yellow", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // console.log(document.body);

    const randomNumber = getRandomNumber();// random renk çağırma
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})
function getRandomNumber (){  // random renk döndürme
    return Math.floor(Math.random()*colors.length);
}
