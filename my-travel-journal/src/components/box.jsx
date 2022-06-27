import React from "react";

const Box = (props) => {
  const style = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  function toggleIsHeld() {
    props.holdDice();
  }
  return (
    <div onClick={toggleIsHeld} style={style} className="dice">
      <h3 className="dice-num">{props.value}</h3>
    </div>
  );
};

export default Box;
