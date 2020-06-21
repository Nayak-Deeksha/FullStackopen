import React, { useState } from 'react';
import Button from "./Components/Button";
import Statistics from "./Components/Statistics"
import Anecdotes from "./Components/Anecdotes";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />
      <h3>Statistics</h3>
      <Statistics good={good} bad={bad} neutral={neutral} />
      <Anecdotes />
    </div>
  );
}

export default App;
