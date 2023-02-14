//code for use to get JS to show up on website
//declare global varibales
let currentLeague;
let leagueList = document.querySelector("#individual-leagues");
let leagueImage = document.querySelector("#league-logo");
let leagueName = document.querySelector("#league-name");
let leagueCountry = document.querySelector("#league-country");
let leagueStandings = document.querySelector("#league-name");
// let leaguePromo = document.querySelector("#league-



fetch("http://localhost:3000/leagues")
.then(response => response.json())
.then(leagueData => {
    //Our wishlist for the code
    addLeagues(leagueData)
    setLeague(leagueData)
})
function addLeagues(leagueData) {
    leagueData.forEach(league => {
        let leagueItem = document.createElement("ol");
        leagueItem.textContent = league.name;
        leagueList.appendChild(leagueItem);

        leagueList.addEventListener("click", () => {
            setLeague(league)
            


        })
    })     
//adding a mouseover event to change from home to away colors for the logo

}
function displayStandings(leagueData) {
    leagueStandings.forEach(team => {
        let newStandings = document.createElement("ol");
        newStandings.textContent = team.teamStandings;
        leagueStandings.appendChild(newStandings);
        // newStandings.addEventListener("click", () => {
        //     setLeague(team)
        // })
    
    })
}


function setLeague(nextLeague) {
 currentLeague = nextLeague;

 leagueName.textContent = nextLeague.name;
 leagueCountry.textContent = nextLeague.country;
 leagueImage.src = nextLeague.leagueLogo;
leagueStandings.textContent = nextLeague.standings;
 
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


