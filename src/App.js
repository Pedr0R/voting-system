import { useState } from 'react';
import './App.css';

function App() {

  const[votos1, setCount] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Voting System</h1>
        <div className="container-votacao">
          <div className="votation-option">
            <p>{votos1}</p>
            <button className="vote-button1" onClick={setCount(state => state + 1)}>VOTE</button>
          </div>
          <div className="votation-option">
            <p>#</p>
            <button className="vote-button2" >VOTE</button>
          </div>
        </div>
        <div className="scoreboard-container">
          <h2 className="team1">Vermelho</h2>
          <div className="scoreboard">
          </div>
          <h2 className="team2">Azul</h2>
        </div>
        
      </header>
    </div>
  );
}

export default App;
