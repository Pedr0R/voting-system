import {useState} from 'react';

function Options() {
  
  const [aVotes, setAVotes] = useState(0);
  const [bVotes, setBVotes] = useState(0);

  const aPercent = (100 * aVotes / (aVotes + bVotes)).toFixed(0);
  const bPercent = (100 * bVotes / (aVotes + bVotes)).toFixed(0);

  return (
  <>
    <div className="container-votacao">
      <div className="votation-option1">
        <p>team1</p>
        <button 
          type="button"
          id="vote-button1"
          name="vote=button1"
          className="vote-button1" 
          onClick={() => setAVotes(aVotes + 1)}>VOTE</button>

      </div>
      <div className="votation-option2">
        <p>team2</p>
        <button type="button"
          id="vote-button2"
          name="vote=button2"
          className="vote-button2" 
          onClick={() => setBVotes(bVotes + 1)}>VOTE</button>

      </div>
    </div>
    <div className="scoreboard-container"> 
      <div className="scoreboard">
        <label className="team1">team1</label>
        <comment className="teamVotes">({aVotes})</comment>
        <label >{aPercent}%</label>
        <label>{bPercent}%</label>
        <comment className="teamVotes">({bVotes})</comment>
        <label className="team2">team2</label>
      </div>
    </div>
  <div/>
  </>
  )
}

export default Options