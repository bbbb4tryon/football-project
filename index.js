//code for use to get JS to show up on website
let leagueItem = document.createElement("li");
    
//declare global varibales


let currentLeague;
let leagueList = document.querySelector("#individual-leagues");
let leagueImage = document.querySelector("#league-logo");
let leagueName = document.querySelector("#league-name");
let leagueCountry = document.querySelector("#league-country");
let leagueStandings1 = document.querySelector("#team-1");
let leagueStandings2 = document.querySelector("#team-2");
let leagueStandings3 = document.querySelector("#team-3");
let leagueStandings4 = document.querySelector("#team-4");
let leagueStandings5 = document.querySelector("#team-5");
let leagueStandings6 = document.querySelector("#team-6");
let leagueStandings7 = document.querySelector("#team-7");
let leagueStandings8 = document.querySelector("#team-8");
let leagueStandings9 = document.querySelector("#team-9");
let leagueStandings10 = document.querySelector("#team-10");
let leagueStandings11 = document.querySelector("#team-11");
let leagueStandings12 = document.querySelector("#team-12");
let leagueStandings13 = document.querySelector("#team-13");
let leagueStandings14 = document.querySelector("#team-14");
let leagueStandings15 = document.querySelector("#team-15");
let leagueStandings16 = document.querySelector("#team-16");
let leagueStandings17 = document.querySelector("#team-17");
let leagueStandings18 = document.querySelector("#team-18");
let leagueStandings19 = document.querySelector("#team-19");
let leagueStandings20 = document.querySelector("#team-20");










let teamLeagueList = document.querySelector("#individual-teams");
let mouseOver = document.getElementById("title");
let mouseOut = document.getElementById("title");
let firstPlace = document.querySelector("#team-1");
let secondPlace = document.querySelector("#team-2");
let thirdPlace = document.querySelector("#team-3");
let fourthPlace = document.querySelector("#team-4");
let fifthPlace = document.querySelector("#team-5");
let sixthPlace = document.querySelector("#team-6");
let seventhPlace = document.querySelector("#team-7");
let eighthPlace = document.querySelector("#team-8");
let ninthPlace = document.querySelector("#team-9");
let tenthPlace = document.querySelector("#team-10");
// let leaguePromo = document.querySelector("#league-

// for(let i = 1; i <= 20; i++) {
//     let team = "team" + i
//     let teamItems = document.createElement("li");
//     // console.log(league[team])   
//     teamItems.textContent = obj[team];
//     leagueListNew.append(teamItems);
// }


fetch("http://localhost:3000/leagues")
.then(response => response.json())
.then(leagueData => { 
    

    //Our wishlist for the code
   
    displayInformation(leagueData);
    addComment()
    setLeague(leagueData)
    // mouseOverFunction()
    // mouseOutFunction()
    
    // displayLeagueStandings()
   

})

function displayInformation(leagueData) {
  let displayLeagueInformation = document.querySelector("#individual-leagues");  
  leagueData.forEach(league => {
    let newFootballLeague = document.createElement("li");
    newFootballLeague.textContent = league.name;
    displayLeagueInformation.append(newFootballLeague);

    newFootballLeague.addEventListener("click", () => {
        setLeague(league)
    })
  })
}



function setLeague(nextLeague) {
 currentLeague = nextLeague;

 leagueName.textContent = nextLeague.name;
 leagueCountry.textContent = nextLeague.country;
 leagueImage.src = nextLeague.leagueLogo;
 leagueStandings1.textContent = nextLeague.team1;
 leagueStandings2.textContent = nextLeague.team2;
 leagueStandings3.textContent = nextLeague.team3;
 leagueStandings4.textContent = nextLeague.team4;
 leagueStandings5.textContent = nextLeague.team5;
 leagueStandings6.textContent = nextLeague.team6;
 leagueStandings7.textContent = nextLeague.team7;
 leagueStandings8.textContent = nextLeague.team8;
 leagueStandings9.textContent = nextLeague.team9;
 leagueStandings10.textContent = nextLeague.team10;
 leagueStandings11.textContent = nextLeague.team11;
 leagueStandings12.textContent = nextLeague.team12;
 leagueStandings13.textContent = nextLeague.team13;
 leagueStandings14.textContent = nextLeague.team14;
 leagueStandings15.textContent = nextLeague.team15;
 leagueStandings16.textContent = nextLeague.team16;
 leagueStandings17.textContent = nextLeague.team17;
 leagueStandings18.textContent = nextLeague.team18;
 leagueStandings19.textContent = nextLeague.team19;
 leagueStandings20.textContent = nextLeague.team20;
 

}
function addComment() {
    let newComment = document.querySelector("#comment-form")
    newComment.addEventListener("submit", (event) => {
        event.preventDefault();

        const newCommentAdded = {
            "content" : event.target["comment"].value
        }
        const newSoccerComment = document.createElement("li");
        newSoccerComment.textContent = newCommentAdded.content;
        newComment.appendChild(newSoccerComment);

        addLeagues(newCommentAdded)
    })
}
function mouseOverFunction(){
    mouseOver.addEventListener("mouseover", () => {
        document.getElementById("title").style.color = "red"
        let playAnthem = document.getElementById("controls")

    })
}
function mouseOutFunction(){
    mouseOut.addEventListener("mouseout", () => {
        document.getElementById("title").style.color = "black"
    })
}
// function displayLeagueStandings (leagueData) {
//     for (const teamStandings in leagues)

//     console.log(leagues[teamStandings].teamStandings)
// }
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


