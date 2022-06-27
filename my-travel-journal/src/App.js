import React from "react";
import "./App.css";
import Box from "./components/box";
import { nanoid } from "nanoid";
// import Navbar from './components/navbar';
// import State from './components/state';
// import TravelCard from './components/travelCard';

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(
    () => {

    }, [dice]
  )
  
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }
  function handleClick() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld
          ? die
          : {
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id: nanoid(),
            };
      })
    );
  }

  // function handleClick() {
  //   setDice(allNewDice());
  // }
  const diceElement = dice.map((die) => (
    <Box
      isHeld={die.isHeld}
      value={die.value}
      holdDice={() => holdDice(die.id)}
      key={die.id}
    />
  ));

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }
  return (
    <div className="App">
      <div className="body">
        <div className="dice-container">{diceElement}</div>
        <button className="roll-dice" onClick={handleClick}>
          ROLL DICE
        </button>
      </div>
    </div>
  );
}

export default App;
