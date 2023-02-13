//code for use to get JS to show up on website

//declare global varibales
let currentLeague;
let leagueList = document.querySelector("#individual-leagues");
let leagueImage = document.querySelector("#league-logo");
let leagueName = document.querySelector("#league-name");
let leagueCountry = document.querySelector("#league-country");
let leagueStandings = document.querySelector("#league-standings");
let li = document.createElement("li");



let leagueLogo = document.querySelector("#league-logo")

fetch("http://localhost:3000/leagues")
  .then((response) => response.json())
  .then((leagueData) => {
    console.log(leagueData);


    //Our wishlist for the code
    addLeagues(leagueData)
    setLeague(leagueData[0])
    getLeagueStandings(currentLeague)
})
function addLeagues(leagueData) {
    leagueData.forEach(league => {
        let leagueItem = document.createElement("li");
        leagueItem.textContent = league.name;
        
        leagueList.appendChild(leagueItem);

        leagueItem.addEventListener("click", () => {
            setLeague(league)
            


        })
//adding a mouseover event to change from home to away colors for the logo
        leagueLogo.addEventListener("mouseover", () => {
          setLeague(league);
        });
    });
}
function setLeague(nextLeague) {
 currentLeague = nextLeague;

 leagueName.textContent = nextLeague.name;
 leagueCountry.textContent = nextLeague.country;
 leagueImage.src = nextLeague.leagueLogo;
leagueStandings.textContent = nextLeague.teamStandings;
 
}
function getLeagueStandings(nextLeague) {
    currentLeague = nextLeague;
    
    let table = document.createElement("table")
    table.classList.add("table")

    let standings = document.querySelector("h5")
    standings;
    let tableClass = document.querySelector(".table")
    tableClass;
    let standingsTable = document.createElement("TABLE")
    standingsTable;
    leagues.teamStandings.forEach(teamStandings =>
        console.log(teamStandings));

}
    // li.addEventListener("click", function () {
    //   console.log("clicked")
    // });

