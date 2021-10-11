import { useEffect, useState } from "react";
import React from "react";

const Round = (props) => {
  const [player, setPlayer] = useState(true);
  const [progress1, setProgress1] = useState(10);
  const [progress2, setProgress2] = useState(10);
  const [winCount1, setWinCount1] = useState(0);
  const [winCount2, setWinCount2] = useState(0);
  const handleClick = () => {
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    let num = getRandomArbitrary(0, 5);
    if (player) {
      setPlayer(false);
      setProgress2(progress2 - num);
    } else {
      setPlayer(true);
      setProgress1(progress1 - num);
    }
    if (progress1 <= 0.5) {
      setWinCount2(winCount2 + 1);
      document.querySelector(".btn").setAttribute("disabled", "true");
    } else if (progress2 <= 0.5) {
      setWinCount1(winCount1 + 1);

      document.querySelector(".btn").setAttribute("disabled", "true");
    }
  };
  useEffect(() => {
    props.handleRound(winCount1, winCount2);
  }, [winCount2, winCount1]);

  const handleStartGame = () => {
    document.querySelector(".btn").disabled = false;
  };

  return (
    <div>
      <button onClick={handleStartGame}>Start game</button>
      <div>
        <div>Player 1......Wins-{props.win[0]}</div>
        <progress id="1" value={progress1} max="10"></progress>
        <div>Player 2......Wins-{props.win[1]}</div>
        <progress id="2" value={progress2} max="10"></progress>
        <div>
          <button
            onClick={handleClick}
            className="btn btn-danger"
            disabled={false}
          >
            SHOOT player
          </button>
        </div>
        {player ? <p>Player 1 shoot</p> : <p>Player 2 shoot</p>}
      </div>
    </div>
  );
};

export default Round;
