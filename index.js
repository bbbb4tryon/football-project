//code for use to get JS to show up on website
//declare global varibales
let currentLeague;
let leagueList = document.querySelector("#individual-leagues");
let leagueImage = document.querySelector("#league-logo");
let leagueName = document.querySelector("#league-name");
let leagueCountry = document.querySelector("#league-country");
let leagueStandings = document.querySelector("#league-standings");
let teamLeagueList = document.querySelector("#individual-teams");
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



fetch("http://localhost:3000/leagues")
.then(response => response.json())
.then(leagueData => {
    //Our wishlist for the code
    addLeagues(leagueData)
    setLeague(leagueData)

    // displayStandings(leagueData)
    addComment()
    mouseOver()
    mouseOut()
    
    // displayLeagueStandings()
    //donationForm()
    //randomizeButton()

})
function addLeagues(leagueData) {
    leagueData.forEach(league => {
        let leagueItem = document.createElement("li");
        leagueItem.textContent = league.name;

        teamLeagueList.append(leagueItem);
        leagueItem.addEventListener("click", () => {
            
            for(let i = 1; i <= 20; i++) {
                let teamItems = document.createElement("li");
                let team = "team" + i
                console.log(league[team])   
                teamItems.textContent = league[team];
                leagueList.append(teamItems);
                
            }

            setLeague(league)
            


        })
        
    })     
//adding a mouseover event to change from home to away colors for the logo

}
// function displayStandings(leagueData) {
//     leagueData.forEach(team => {
        
//         // newStandings.addEventListener("click", () => {
//         //     setLeague(team)
//         // })
    
//     })
// }


function setLeague(nextLeague) {
 currentLeague = nextLeague;

 leagueName.textContent = nextLeague.name;
 leagueCountry.textContent = nextLeague.country;
 leagueImage.src = nextLeague.leagueLogo;

 leagueStandings.textContent = nextLeague.teamStandings;

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


