const gwagonList = {
    make: "Gwagon",
    model: "range",
    class: "Super Hybrid",
    horsepower: "600HP",
    drivetrain: "Mid-engine / Duel Electric Motors",
    colors: [
        " Red " ,
        " Black " ,
        " Grey " ,
        " White " ,
    ],
};

function gwagonSpec () {
    var thisGwagon = 
    "Make: " + gwagonList.make + "<br>" + 
    "Model: " + gwagonList.model + "<br>" + 
    "Class: " + gwagonList.class + "<br>" + 
    "Horsepower: " + gwagonList.horsepower + "</br>" + 
    "Drivetrain " + gwagonList.drivetrain + "</br>" + 
    "Colors: " + gwagonList.colors;
    document.getElementById("gwagon").innerHTML = thisNSX;
};

function gwagonSpec () {
    var closeList = "Click Learn More to see specs";
    document.getElementById("gwagon").innerHTML = closeList;
};

const roverList = {
    make: "Range Rover",
    model: "Range",
    class: "Electric",
    horsepower: "616HP",
    drivetrain: "Duel Electric Motors",
    colors: [
        " Sky Blue " ,
        " Black " ,
        " Yellow " ,
        " Green " ,
    ],
};

function roverSpec () {
    var thisRange = 
    "Make: " + roverList.make + "<br>" + 
    "Model: " + roverList.model + "<br>" + 
    "Class: " + roverList.class + "<br>" + 
    "Horsepower: " + roverList.horsepower + "</br>" + 
    "Drivetrain: " + roverList.drivetrain + "</br>" + 
    "Colors: " + roverList.colors;
    document.getElementById("rover").innerHTML = thisRange;
};

function roverClose () {
    var closeList = "Click Learn More to see specs";
    document.getElementById("rover").innerHTML = closeList;
};

const BentleyList = {
    make: "Bentley",
    model: "Plaid",
    class: "Electric",
    horsepower: "1020HP",
    drivetrain: "Duel Electric Motors",
    colors: [
        " Blue " ,
        " White " ,
        " Dark Gray " ,
        " Cherry Red " ,
    ],
};

function bentleySpec () {
    var thisBentley = 
    "Make: " + BentleyList.make + "<br>" + 
    "Model: " +  BentleyList.model + "<br>" + 
    "Class: " +  BentleyList.class + "<br>" + 
    "Horsepower: " +  BentleyList.horsepower + "</br>" + 
    "Drivetrain: " +  BentleyList.drivetrain + "</br>" + 
    "Colors: " +  BentleyList.colors;
    document.getElementById(" Bentley_spec").innerHTML = thisBentley;
};

function  BentleyClose() {
    var closeList = "Click Learn More to see specs";
    document.getElementById(" Bentley_spec").innerHTML = closeList;
};