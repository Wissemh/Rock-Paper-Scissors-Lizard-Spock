var win = 0;
var score = 0;
var id;
var idp;
document.getElementById("rules-button").addEventListener("click",() => {
    document.getElementById("rules-container").style.display = "block";
    document.getElementById("rule-overlay").classList.add("overlay");
})
document.getElementById("hide-rules").addEventListener("click",() => {
    document.getElementById("rules-container").style.display = "none";
    document.getElementById("rule-overlay").classList.remove("overlay");
})
function switchingOnetoTwo () {
    document.getElementById("stepOne").style.display="none";
    document.getElementById("stepTwo").style.display="flex";
}
document.getElementById("spock-container").addEventListener("click",()=> {
    switchingOnetoTwo();
    document.getElementById("element-spockp").style.display="flex";
    placeingElement(elespock);

})
document.getElementById("paper-container").addEventListener("click",()=> {
    switchingOnetoTwo();
    document.getElementById("element-paperp").style.display="flex";
    placeingElement(elepaper);

})
document.getElementById("rock-container").addEventListener("click",()=> {
    switchingOnetoTwo();
    document.getElementById("element-rockp").style.display="flex";
    placeingElement(elerock);

})
document.getElementById("lizard-container").addEventListener("click",()=> {
    switchingOnetoTwo();
    document.getElementById("element-lizardp").style.display="flex";
    placeingElement(elelizard);
})
document.getElementById("scissors-container").addEventListener("click",()=> {
    switchingOnetoTwo();
    document.getElementById("element-scissorsp").style.display="flex";
    placeingElement(elescissors);

})
function placeingElement (place) {
    setTimeout(()=>{
        el = randome(place);
        document.getElementById("cercle").style.display = "none";
        document.getElementById(el).style.display = "flex";
    },500);
    setTimeout(()=>{
        if (win == 1 ) {
            document.getElementById("result-winning").style.display = "flex";
        } else if (win == -1) {
            document.getElementById("result-losing").style.display = "flex";
        }
    },1000); 
}
var elescissors = {
    a1 : "paper",
    a2 : "spock",
    a3 : "lizard",
    a4 : "rock",
    losers : ["paper","lizard"],
}
var elelizard = {
    a1 : "paper",
    a2 : "spock",
    a3 : "scissors",
    a4 : "rock",
    losers : ["spock","paper"]
}
var elespock = {
    a1 : "paper",
    a2 : "lizard",
    a3 : "scissors",
    a4 : "rock",
    losers : ["scissors","rock"]
}
var elerock = {
    a1 : "paper",
    a2 : "spock",
    a3 : "scissors",
    a4 : "lizard",
    losers : ["scissors","lizard"]
}
var elepaper = {
    a1 : "lizard",
    a2 : "spock",
    a3 : "scissors",
    a4 : "rock",
    losers : ["rock","spock"]
}
function winOrLose (comp,winOrNot) {
    if (winOrNot.losers.includes(comp)) {
        win = 1;
        score ++; 
    } else {
        win = -1;
        score --;
        }
}
function randome (elem) {
    let indexel =elem['a' + (Math.floor(Math.random() * (4 ) + 1)).toString()];
    if (elem == elescissors) {
        winOrLose(indexel,elem);
    } else if (elem == elelizard) {
        winOrLose(indexel,elem);
    } else if (elem == elespock) {
        winOrLose(indexel,elem);
    } else if (elem == elerock) {
        winOrLose(indexel,elem);
    } else if (elem == elepaper) {
        winOrLose(indexel,elem);
    }
    document.getElementById("up-score").innerHTML = score;
    id =  "element-"+ indexel + "c";
    return id ; 
}
document.getElementById("Restart-losing").addEventListener("click", () => { 
    document.getElementById("stepOne").style.display="flex";
    document.getElementById("stepTwo").style.display="none";
    document.getElementById("result-winning").style.display = "none";
    document.getElementById("result-losing").style.display = "none";
    document.getElementById(id).style.display = "none";
    document.getElementById("element-scissorsp").style.display = "none";
    document.getElementById("element-paperp").style.display = "none";
    document.getElementById("element-lizardp").style.display = "none";
    document.getElementById("element-rockp").style.display = "none";
    document.getElementById("element-spockp").style.display = "none";
    win = 0;
})
document.getElementById("Restart-winning").addEventListener("click", () => { 
    document.getElementById("stepOne").style.display="flex";
    document.getElementById("stepTwo").style.display="none";
    document.getElementById("result-winning").style.display = "none";
    document.getElementById("result-losing").style.display = "none";
    document.getElementById(id).style.display = "none";
    document.getElementById("element-scissorsp").style.display = "none";
    document.getElementById("element-paperp").style.display = "none";
    document.getElementById("element-lizardp").style.display = "none";
    document.getElementById("element-rockp").style.display = "none";
    document.getElementById("element-spockp").style.display = "none";
    win = 0;
})