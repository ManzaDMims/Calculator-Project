import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(input).toString());
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly className="input-display" />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={handleEqual} className="equal">=</button>
      </div>
    </div>
  );
}

export default App;
