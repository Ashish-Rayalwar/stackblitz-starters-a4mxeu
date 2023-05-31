import React, { useState } from 'react';
import './style.css';

export default function App() {
  let [count, setCount] = useState(0);

  let Incr = () => {
    setCount((c) => c + 1);
  };
  let IncrByTen = () => {
    setCount((c) => c + 10);
  };
  let DecrByTen = () => {
    setCount((c) => c - 10);
  };
  let Decr = () => {
    setCount((c) => c - 1);
  };

  return (
    <div class="container">
      <button onClick={DecrByTen} class="left-btn">
        left
      </button>
      <div class="main">
        <div onClick={Incr} class="arrow-up"></div>
        <div class="count">{count > 9 || count<0 ? count : '0' + count}</div>
        <div onClick={Decr} class="arrow-down"></div>
      </div>
      <button onClick={IncrByTen} class="right-btn">
        right
      </button>
    </div>
  );
}
