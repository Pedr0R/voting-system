var voteButton1 = document.getElementsByClassName("vote-button1")
var voteButton2 = document.getElementsByClassName("vote-button2")
let votacao = {team1: 0, team2: 0}

voteButton1.addEventListener(click, voting1())
voteButton2.addEventListener(click, voting2())

function voting1() {
  votacao.team1 += 1
  console.log(team1, 'votos para o time 1')
}

function voting2() {
  votacao.team2 += 1
  console.log(team2, 'votos para o time 2')
}