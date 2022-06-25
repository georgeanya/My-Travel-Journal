import React from 'react';
import './App.css';
import Box from './components/box';
// import Navbar from './components/navbar';
// import State from './components/state';
// import TravelCard from './components/travelCard';

function App() {

  const [dice, setDice] = React.useState(allNewDice())
  
  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        {...die, isHeld: !die.isHeld} :
        die
    }))  
  }

  function handleClick(){
    setDice(allNewDice)
  }
  const diceElement = dice.map(die => <Box isHeld={die.isHeld} value = {die.value}  holdDice = {() => holdDice(die.id)}/>
  )


  function allNewDice(){
    const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push({
        value: Math.ceil(Math.random() * 6), 
        isHeld: true
      })
    }
    return newDice
  }
  return (
    <div className="App">
      <div className='body'>
        <div className='dice-container'>
          {diceElement}
        </div>
        <button  className='roll-dice' onClick={handleClick}>ROLL DICE</button>
      </div>
    </div>
  );
}

export default App;
