import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("Unknown Player");
  const handleClick = () => {
    
    setEnteredPlayerName(playerName.current.value); 
     playerName.current.value = '';
  };
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : "New Player"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          placeholder="Enter your Name"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
