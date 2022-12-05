//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById("ball");
var velocityX = 10;
var positionX = 0;
var reverseX = false;


//write a function that can change the position of the html element "ball"

function moveBall() {
    // two fixed x-axis coordinates (you will use these variable in step 3)
    var Xmin = 0;
    var Xmax = 1000;

  //reverse condition
  if (!reverseX){
  positionX = positionX + velocityX;
  } else positionX = positionX - velocityX;
  
  ball.style.left = positionX + 'px';
  
  if (positionX === Xmax){
    reverseX = true;
  } else if (positionX === Xmin){
    reverseX = false;
  }
  
  }
  
  // This call the moveBall function every 100ms
  setInterval(moveBall, 100);
