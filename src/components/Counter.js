import React, { PropTypes } from 'react';

const Counter = (props) => {
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => props.updatePlayerScore(props.index, -1)}>
         -
      </button>
      <div className="counter-score"> {props.score} </div>
      <button
        className="counter-action increment"
        onClick={() => props.updatePlayerScore(props.index, 1)}>
         +
      </button>
    </div>
  );
}
Counter.propTypes = {
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  updatePlayerScore: PropTypes.func.isRequired,
}

export default Counter;