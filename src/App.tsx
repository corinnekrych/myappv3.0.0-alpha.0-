import React from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import { Button } from "@cloudbees/react-honeyui/Button"; // TS ERROR
import { Button as Button2 } from "@cloudbees/react-honeyui";

function App() {
  return (
    <div className="App">
      <Button>HoneyUI Button</Button>
      <Button2>Global import HoneyUI Button</Button2>
    </div>
  );
}

export default App;
