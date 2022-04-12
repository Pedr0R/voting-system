import './App.css';
// import Options from './components/Options';
import ProgressBar from './components/progressBar';
import {useState} from 'react';

function App() {

  const [aVotes, setAVotes] = useState(0);
  const [bVotes, setBVotes] = useState(0);

  const aPercent = (100 * aVotes / (aVotes + bVotes)).toFixed(0);
  const bPercent = (100 * bVotes / (aVotes + bVotes)).toFixed(0);

  const teamA = 'PNG  '
  const teamB = 'RED'

  return (
    <div className="App">
      <header className="App-header">
        <h1>Voting System</h1>
        <div className="container-votacao">
          <div className="votation-option1">
            <p className='teamTitle'>{teamA}</p>
            <img src='https://www.ffesportsbr.com.br/wp-content/uploads/2020/02/PAIN-GAMING.png' className='teamLogo'></img><br/>
            <button 
              type="button"
              id="vote-button1"
              name="vote=button1"
              className="vote-button1" 
              onClick={() => setAVotes(aVotes + 1)}>VOTE</button>
          </div>
          <div className="votation-option2">
            <p className='teamTitle'>{teamB}</p>
            <img src='https://upload.wikimedia.org/wikipedia/pt/d/df/RED_Canids_Kalunga.png' className='teamLogo'></img><br/>
            <button type="button"
              id="vote-button2"
              name="vote=button2"
              className="vote-button2" 
              onClick={() => setBVotes(bVotes + 1)}>VOTE</button>
          </div>
        </div>
        <div className="scoreboard-container">
          <label className="teamTitleA">{teamA}</label>
          <ProgressBar bgcolor="#1d29d8" completed={aPercent} remaining={bPercent} />
          <label className="teamTitleB">{teamB}</label>
        </div>
      </header>
    </div>
  );
}

export default App;
