arr = ["S", "W", "G"];
let runAgain = true;

while (runAgain) 
{
  let yourMove = prompt("Choose anyone between Snake, Water, Gun. Enter S, W or G");

  let computer = arr[Math.floor(Math.random() * arr.length)];

  // let computer = ["S", "W", "G"][computerI];
  
  if(computer === yourMove)
  {
    alert("Draw");
  }
  else if((computer === "S" && yourMove === "W") || (computer === "W" && yourMove === "G") || (computer === "G" && yourMove === "S"))
  {
        alert("Computer Wins");
  }
  else if((computer === "W" && yourMove === "S")  || (computer === "G" && yourMove === "W") || (computer === "S" && yourMove === "G"))
  {
        alert("You wins");
  }

  runAgain = confirm("Do you want to play again?");
}

