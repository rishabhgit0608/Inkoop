import { useState, useEffect } from "react";
import "./App.css";
import Round from "./Component/Round";
function App() {
  const [round, setRound] = useState(1);
  const [win1, setWin1] = useState(0);
  const [win2, setWin2] = useState(0);

  const handleRound = (wincount1, wincoun2) => {
    if (wincount1 > wincoun2) {
      setWin1(win1 + 1);
      if (win1 >= 3) {
      } else {
        setRound(round + 1);
      }
    } else if (wincount1 < wincoun2) {
      setWin2(win2 + 1);
      if (win2 >= 3) {
      } else {
        setRound(round + 1);
      }
    }
  };

  return (
    <div>
      {round <= 5 ? <h1>Round---{round}</h1> : <></>}
      {round == 1 ? (
        <Round win={[win1, win2]} handleRound={handleRound}></Round>
      ) : (
        <></>
      )}
      {round == 2 ? (
        <Round win={[win1, win2]} handleRound={handleRound}></Round>
      ) : (
        <></>
      )}
      {round == 3 ? (
        <Round win={[win1, win2]} handleRound={handleRound}></Round>
      ) : (
        <></>
      )}
      {round == 4 ? (
        <Round win={[win1, win2]} handleRound={handleRound}></Round>
      ) : (
        <></>
      )}
      {round == 5 ? (
        <Round win={[win1, win2]} handleRound={handleRound}></Round>
      ) : (
        <></>
      )}
      {win1 >= 3 ? <h1>Player 1 is the winner</h1> : <></>}
      {win2 >= 3 ? <h1>Player 2 is the winner</h1> : <></>}
    </div>
  );
}
export default App;
