/* main
--------------------------------------------------------------------- */
/* index
--------------------------------------------------------------------- */
var theGoal;
var theReason;

function insert(){
  theGoal = document.getElementById("goal").value;
  theReason = document.getElementById("reason").value;
  localStorage.setItem("localGoal", theGoal);
  localStorage.setItem("localReason", theReason);
  console.log (theGoal);
  console.log ("hello");
}



/* index 2
--------------------------------------------------------------------- */

var line = document.getElementById("dash");
var timeCount = 0;
var startCount = document.getElementById("started");

startCount.addEventListener("click", timerr);

function timerr(){
  setInterval(function(){timeCount++;}, 1000);
  console.log("hello");
  document.getElementById("stopped").style.visibility = "visible";
  document.getElementById("progress").style.visibility = "visible";
  document.getElementById("dash").style.visibility = "visible";
  document.getElementById("end").style.visibility = "visible";
  document.getElementById("startOne").style.visibility = "hidden";
  startCount.removeEventListener("click", timerr);
}


var dashNumber;

function addDash(){
dashNumber =  document.getElementById("dash").innerText.length;
document.getElementById("started").innerHTML =  "Keep going!";
if (dashNumber != 99) {
  line.textContent += "-";
  dashNumber ++;
} else {
    line.textContent += "-";
    document.getElementById("started").style.visibility = "hidden";
    document.getElementById("stopped").style.visibility = "hidden";
    document.getElementById("congrats").style.visibility = "visible";
    document.getElementById("quoteTime").style.visibility = "visible";
    document.getElementById("dash").style.color = "#74DA40";
    console.log("nice");

}

  console.log(dashNumber);
}



function quit(){
  document.getElementById("minutes").innerHTML = timeCount;
  document.getElementById("started").style.visibility = "hidden";
  document.getElementById("stopped").style.visibility = "hidden";
  document.getElementById("quoteTime").style.visibility = "visible";
  document.getElementById("long").style.visibility = "visible";
}

/* index 3
--------------------------------------------------------------------- */
/* index 4
--------------------------------------------------------------------- */

function insertAgain(){
  document.getElementById("insertOne").innerHTML = localStorage.getItem("localGoal", theGoal);
  document.getElementById("insertTwo").innerHTML = localStorage.getItem("localReason", theReason);
  console.log (theGoal);
  console.log ("hello");
}

var searchPhrase;
var searchPlus;
var completeSearch;

function searchCreate(){
searchPhrase = localStorage.getItem("localGoal", theGoal);
searchPlus = searchPhrase.replace(/\s/g, "+");
completeSearch = "https://www.google.com/search?q=how+do+i+start+"+searchPlus;
}

function googleSearch(){
  window.open(completeSearch);
  console.log(searchPhrase);
  console.log(searchPlus);
  console.log(completeSearch);
  document.getElementById("startTwo").innerHTML = "How about another?";
  document.getElementById("search").innerHTML =  "This might help too!";
  event.target.onclick = secondSearch;
}

var searchPhraseTwo;
var searchPlusTwo;
var completeSearchTwo;

function searchCreateTwo(){
searchPhraseTwo = localStorage.getItem("localReason", theReason);
searchPlusTwo = searchPhraseTwo.replace(/\s/g, "+");
completeSearchTwo = "https://www.google.com/search?q=what+if+"+searchPlusTwo+"+("+searchPlus+")";
}

function secondSearch(){
    window.open(completeSearchTwo);
    window.location = "index5.html";
    // document.getElementById("search").style.visibility = "hidden";
}

document.getElementById("search").onclick = googleSearch;

/* index 5
--------------------------------------------------------------------- */

function insertGoal(){
  document.getElementById("insertOne").innerHTML = localStorage.getItem("localGoal", theGoal);
}
