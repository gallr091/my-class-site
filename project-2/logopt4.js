let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
    
let colors = ['#FFC915','#050606', '#C53E27'];

//SHIP
    let ship = document.getElementById("boat")
    
    //SHIP - random color
    let randomColorShip = colors[Math.floor(Math.random() * colors.length)];
    
    ship.style.fill = randomColorShip;
    
       
//CHIMNEYS
    let chimney1 = document.getElementById("chimney1");
    let chimney2 = document.getElementById("chimney2");
    let chimney3 = document.getElementById("chimney3");
    
    //CHIMNEYS - random color
    let randomColorCh1 = colors[Math.floor(Math.random() * colors.length)];
    let randomColorCh2 = colors[Math.floor(Math.random() * colors.length)];
    let randomColorCh3 = colors[Math.floor(Math.random() * colors.length)];
    
    chimney1.style.fill = randomColorCh1;
    chimney2.style.fill = randomColorCh2;
    chimney3.style.fill = randomColorCh3;
    
        
//FLOATIE
    let floatie = document.getElementById("floatie");
    
    //FLOATIE - random color
    let randomColorFloatie = colors[Math.floor(Math.random() * colors.length)];
    
    floatie.style.fill = randomColorFloatie;
    
        
//STAR
    let star = document.getElementById("star");
    
    //STAR - random color
    let randomColorStar = colors[Math.floor(Math.random() * colors.length)];
    
    star.style.fill = randomColorStar;


// FUNCTION: RANDOM COLOR //

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
    function changeColors() {
    ship.style.fill = getRandomColor();
    chimney1.style.fill = getRandomColor();
    chimney2.style.fill = getRandomColor();
    chimney3.style.fill = getRandomColor();
    floatie.style.fill = getRandomColor();
    star.style.fill = getRandomColor();
}


// FUNCTION: RANDOM POSITION //

function changePosition(){
  
    //SHIP - translate + rotation
    let randomTranslateShipX = Math.random() * (80 + 10 + 1) - 10;
    let randomTranslateShipY = Math.random() * (60 - 5 + 1) + 5;
    let randomRotationShip = Math.random() * (150 - 10 + 1) + 10;
  
    //CHIMNEYS - translate + rotation
    let randomTranslateChimneysX = Math.random() * (70 - 10 + 1) + 10;
    let randomTranslateChimneysY = Math.random() * (70 - 10 + 1) + 10;
    let randomRotationChimneys = Math.random() * (200 - 30 + 1) + 30;
  
    //FLOATIE - translate + rotation
    let randomTranslateFloatieX = Math.random() * (70 + 30 + 1) -30;
    let randomTranslateFloatieY = Math.random() * (80 -40 + 1) -40;
    let randomRotationFloatie = Math.random() * (80 +40 + 1) -40;
    
    //STAR - translate + rotation
    let randomTranslateStarX = Math.random() * (60 + 30 + 1) -30;
    let randomTranslateStarY = Math.random() * (80 -40 + 1) -40;
     let randomRotationStar = Math.random() * (360 - 10 + 1) + 10;
  

  //APPLY TRANSFORMATIONS
  ship.style.transform = "translate(" + randomTranslateShipX +"%, " + randomTranslateShipY + "%)"+"rotate(" + randomRotationShip + "deg)" + " scale(0.5)";
  
  chimney1.style.transform = "translate(" + randomTranslateChimneysX +"%, " + randomTranslateChimneysY + "%)"+"rotate(" + randomRotationChimneys + "deg)" + "scale(0.5)";
  chimney2.style.transform = "translate(" + randomTranslateChimneysX +"%, " + randomTranslateChimneysY + "%)"+"rotate(" + randomRotationChimneys + "deg)" + "scale(0.5)";
  chimney3.style.transform = "translate(" + randomTranslateChimneysX +"%, " + randomTranslateChimneysY + "%)"+"rotate(" + randomRotationChimneys + "deg)" + "scale(0.5)";
  
  floatie.style.transform = "translate(" + randomTranslateFloatieX +"%, " + randomTranslateFloatieY + "%)"+ "rotate(" + randomRotationFloatie + "deg)" + "scale(0.5)";

  star.style.transform = "translate(" + randomTranslateStarX + "%, " + randomTranslateStarY + "%)" + "rotate(" + randomRotationStar + "deg)" + "scale(0.5)";
};


// FUNCTION: RANDOMIZE ALL //
function randomizeAll() {
    changeColors();     
    changePosition();  
}


// BUTTONS FOR CHANGING INDIVIDUAL COLORS //
document.getElementById('btnChangeShipColor1').addEventListener('click', function () {
    changeShipColor(colors[0]); 
});
document.getElementById('btnChangeShipColor2').addEventListener('click', function () {
    changeShipColor(colors[1]); 
});
document.getElementById('btnChangeShipColor3').addEventListener('click', function () {
    changeShipColor(colors[2]); 
});
document.getElementById('btnChangeShipOutline').addEventListener('click', function () {
        toggleOutline(ship);
    });


document.getElementById('btnChangeChimneyColor1').addEventListener('click', function () {
    changeChimneyColor(colors[0]); 
});
document.getElementById('btnChangeChimneyColor2').addEventListener('click', function () {
    changeChimneyColor(colors[1]); 
});
document.getElementById('btnChangeChimneyColor3').addEventListener('click', function () {
    changeChimneyColor(colors[2]); 
});
document.getElementById('btnChangeChimneyOutline').addEventListener('click', function () {
        toggleOutline(chimney1);
        toggleOutline(chimney2);
        toggleOutline(chimney3);
    });

document.getElementById('btnChangeFloatieColor1').addEventListener('click', function () {
    changeFloatieColor(colors[0]); 
});
document.getElementById('btnChangeFloatieColor2').addEventListener('click', function () {
    changeFloatieColor(colors[1]); 
});
document.getElementById('btnChangeFloatieColor3').addEventListener('click', function () {
    changeFloatieColor(colors[2]); 
});
document.getElementById('btnChangeFloatieOutline').addEventListener('click', function () {
        toggleOutline(floatie);
    });

document.getElementById('btnChangeStarColor1').addEventListener('click', function () {
    changeStarColor(colors[0]); 
});
document.getElementById('btnChangeStarColor2').addEventListener('click', function () {
    changeStarColor(colors[1]); 
});
document.getElementById('btnChangeStarColor3').addEventListener('click', function () {
    changeStarColor(colors[2]);
});
document.getElementById('btnChangeStarOutline').addEventListener('click', function () {
        toggleOutline(star);
    });


// FUNCTION: CHANGE COLORS //
function changeShipColor(color) {
    ship.style.fill = color;
}

function changeChimneyColor(color) {
    chimney1.style.fill = color;
    chimney2.style.fill = color;
    chimney3.style.fill = color;
}

function changeFloatieColor(color) {
    floatie.style.fill = color;
}

function changeStarColor(color) {
    star.style.fill = color;
}

 //FUNCTION: TOGGLE OUTLINE
     function toggleOutline(element) {
        if (element.style.fill === 'none') {
            
            element.style.fill = '';  
            element.style.stroke = '';  
            element.style.strokeWidth = '';  
        } else {
            element.style.fill = 'none';  
            element.style.stroke = 'black';  
            element.style.strokeWidth = '5px';  
        }
    }


// FUNCTION: DRAG WORDMARK //
dragElement(document.getElementById("wordmark"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// FUNCTION: TOGGLE WORDMARK //
function toggleWordmark() {
  var x = document.getElementById("wordmark");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//FUNCTION: ANIMATE //
let animate = document.getElementById("button5");

let myInterval;

animate.onclick = function(){if(!myInterval){
myInterval = setInterval(function(){
  changePosition();
changeColors();}, 2500);
animate.innerHTML = "Stop";}
else{
  clearInterval(myInterval);
myInterval = null;
animate.innerHTML = "Animate";
}
}