//code for use to get JS to show up on website
fetch("http://localhost:3000/leagues")
.then(response => response.json())
.then(leagueData => {
    console.log(leagueData);
})