import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <div className="row">
          <Button label="1" onClick={() => handleClick('1')} />
          <Button label="2" onClick={() => handleClick('2')} />
          <Button label="3" onClick={() => handleClick('3')} />
          <Button label="+" onClick={() => handleClick('+')} />
        </div>
        <div className="row">
          <Button label="4" onClick={() => handleClick('4')} />
          <Button label="5" onClick={() => handleClick('5')} />
          <Button label="6" onClick={() => handleClick('6')} />
          <Button label="-" onClick={() => handleClick('-')} />
        </div>
        <div className="row">
          <Button label="7" onClick={() => handleClick('7')} />
          <Button label="8" onClick={() => handleClick('8')} />
          <Button label="9" onClick={() => handleClick('9')} />
          <Button label="*" onClick={() => handleClick('*')} />
        </div>
        <div className="row">
          <Button label="C" onClick={handleClear} />
          <Button label="0" onClick={() => handleClick('0')} />
          <Button label="=" onClick={handleCalculate} />
          <Button label="/" onClick={() => handleClick('/')} />
        </div>
      </div>
    </div>
  );
};

const Button = ({ label, onClick }) => (
  <button onClick={onClick} className="button">
    {label}
  </button>
);

const App = () => (
  <div className="App">
    <Calculator />
  </div>
);

export default App;
