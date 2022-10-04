const strikeButton=document.getElementById("strike");
const resetButton=document.getElementById("reset");
const $team1Score=document.getElementById("score-team1");
const $team1Wickets=document.getElementById("wickets-team1");
const $team2Score=document.getElementById("sccore-team2");
const $team2Wickets=document.getElementById("wickets-team2");

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

const possibleOutcomes=[0,1,2,3,4,5,6,'W'];

var team1Score=0;
var team1wickets=0;
var team2Score=0;
var team2Wickets=0;
var team1BallsFaced=0;
var team2BallsFaced=0;
var turn=1;

function gameOver(){
    gameOverAudio.play();
    if(team1Score>team2Score)
    alert('India Wins');
    if(team2Score>team1Score)
    alert('Pakistan Wins');
    if(team1Score===team2Score)
    alert('Its a tie');
    // {
    //     if(confirm('Its a tie !! Another super over?'))
    // window.location.reload();


    // }
}

function updateScore(){
    $team1Score.textContent=team1Score;
    $team1Wickets.textContent=team1wickets;
    $team2Score.textContent=team2Score;
    $team2Wickets.textContent=team2wickets;
}

resetButton.onclick=()=>{
    window.location.reload();
};

strikeButton.onclick=()=>{
    strikeAudio.pause();
    strikeAudio.currentTime=0;
    strikeAudio.play();
    const randomElement=possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)];
    if (turn===2)
    {
        team2BallsFaced++;
    document.querySelector(`#team2-superover div:nth-child(${team2BallsFaced})`).textContent=randomElement;
    if(randomElement==='W')
    {
        team2Wickets++;
    }
    else{
        team2Score+=randomElement;
    }
    if(team2BallsFaced===6 || team2wickets===2 || team2Score>team1Score)
    {
        turn=3;
        gameOver();
    }

    if(turn===1)
    {
        debugger;
        team1BallsFaced++;
        document.querySelector(`#team1-superover div:nth-child(${team1BallsFaced})`).textContent=randomElement;
        if(randomElement==='W')
        {
            team1wickets++;
        }
        else{
            team1Score+=randomElement;
        }
        if(team1BallsFaced===6 || team1wickets===2)
        turn=2;
    }
    updateScore();
}
};
