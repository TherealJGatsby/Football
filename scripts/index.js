window.onload = init;

function init() {
    const selectButton = document.getElementById("selectButton")
    selectButton.onclick = buttonClicked;

    populateTeams();
}

function populateTeams() {
    const teamsList = document.getElementById("teamsList");
    const teams = getAllTeams();
   

    for(let team of teams) {

        // console.log(state);
        const option = new Option(team.name, team.code)
        teamsList.appendChild(option)
    }
}


function getAllTeams() {
    return [
        {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
        {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
        {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
        {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"}
    ]
}

function findTeamById(code) {
    const teams = getAllTeams();

    for(let team of teams){
        if(team.code == code) {
            return team;
        }
    }
}

function buttonClicked(event) {
    event.preventDefault();

    // find the select list
    const teamsList = document.getElementById("teamsList");
    
    // get the selected team id
    const teamCode = teamsList.value;
    // find the team with that id
    const selectedTeam = findTeamById(teamCode);

    // display all team information
    document.getElementById("teamName").innerText = selectedTeam.name;
    document.getElementById("teamCode").innerText = selectedTeam.code;
}