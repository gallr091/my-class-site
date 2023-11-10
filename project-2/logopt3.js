setInterval(function(){
  
    //let randomFormula = Math.random() * (100.05 - 30 + 1) + 30
    
    let colors = ['#FFC915','#050606', '#C53E27', '#2E5995']
    
    //SHIP
    let ship = document.getElementById("cls-1")
    
    //SHIP - random shape
    let randomShape = "m6.82,156.29L239.4,9.98c.11-.07.27,0,.28.14," + Math.random() * 10 + ",20.14-.65,36.59-3.04,47.8-3.08,14.49-7.9," + Math.random() * (40 - 10 + 1) + 10 + "-24.85,55.53-3.37,3.9-6.48,6.88-8.74,8.91,0,0,0,0-.01.01-47.9,35.02-95.8," + Math.random() * 100 + "-143.7,105.07-.06.05-.15.05-.21,0-1.93-1.48-29.65-23.38-16.84-47.92-6.87-3-12.81-5.46-20.33-3.95-9.95,1.99-14.81-17.35-15.22-19.08-.02-.07.01-.15.08-.19Z";
    
    ship.setAttribute("d", randomShape);
    
    //SHIP - random color
    let randomColorShip = colors[Math.floor(Math.random() * colors.length)];
    
    ship.style.fill = randomColorShip;
    
    //SHIP - change position+rotation
    let randomTranslateShip = Math.random() * (500 - 100 + 1) + 100;
    //boat.style.transform = "translate(500px,-400px)";
    //boat.style.transform = "translate(" + randomTranslateShip +"px, " + randomTranslateShip + "px)";
    let randomRotationShip = Math.random() * (100 - 30 + 1) + 30;
    //boat.style.transform = "rotate(" + randomRotationShip+"deg)";
    boat.style.transform = "translate(" + randomTranslateShip +"px, " + randomTranslateShip + "px)"+"rotate(" + randomRotationShip + "deg)";
    
    //-------------//
    
    //CHIMNEYS
    let chimney1 = document.getElementById("cls-2");
    let chimney2 = document.getElementById("cls-3");
    let chimney3 = document.getElementById("cls-4");
    
    // CHIMNEYS - random color
    let randomColorCh1 = colors[Math.floor(Math.random() * colors.length)];
    let randomColorCh2 = colors[Math.floor(Math.random() * colors.length)];
    let randomColorCh3 = colors[Math.floor(Math.random() * colors.length)];
    
    chimney1.style.fill = randomColorCh1;
    chimney2.style.fill = randomColorCh2;
    chimney3.style.fill = randomColorCh3;
    
    // CHIMNEYS - change position + rotation
    let randomTranslateChimneys = Math.random() * (500 - 100 + 1) + 100;
    let randomRotationChimneys = Math.random() * (50 - 30 + 1) + 30;
    
    chimney1.style.transform = "translate(" + randomTranslateChimneys +"px, " + randomTranslateChimneys + "px)"+"rotate(" + randomRotationChimneys + "deg)";
    
    chimney2.style.transform = "translate(" + randomTranslateChimneys +"px, " + randomTranslateChimneys + "px)"+"rotate(" + randomRotationChimneys + "deg)";
    
    chimney3.style.transform = "translate(" + randomTranslateChimneys +"px, " + randomTranslateChimneys + "px)"+"rotate(" + randomRotationChimneys + "deg)";
    
    //-------------//
    
    //FLOATIE
    let floatie = document.getElementById("cls-5");
    
    // FLOATIE - random color
    let randomColorFloatie = colors[Math.floor(Math.random() * colors.length)];
    
    floatie.style.fill = randomColorFloatie;
    
    // FLOATIE - change position + rotation
    let randomTranslateFloatie = Math.random() * (-300 - 10 + 1) + 10;
    let randomRotationFloatie = Math.random() * (50 - 30 + 1) + 30;
    
    floatie.style.transform = "translate(" + randomTranslateFloatie +"px, " + randomTranslateFloatie + "px)"+"rotate(" + randomRotationFloatie + "deg)";
    
    //-------------//
    
    //STAR
    let star = document.getElementById("cls-6");
    
    // STAR - random color
    let randomColorStar = colors[Math.floor(Math.random() * colors.length)];
    
    star.style.fill = randomColorStar;
    
    // STAR - change position + rotation
    let randomTranslateStar = Math.random() * (-200 - 10 + 1) + 10;
    let randomRotationStar = Math.random() * (50 - 30 + 1) + 30;
    
    star.style.transform = "translate(" + randomTranslateStar +"px, " + randomTranslateStar + "px)"+"rotate(" + randomRotationStar + "deg)";
      
    }, 5000)
    
    
    
    