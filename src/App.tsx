import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayData from './components/DisplayData';

function App() {
  return (
    <div className="App">
      <div className='headning'>
      <h1>React Axios</h1>
      </div>
      <DisplayData/>
    </div>
  );
}

export default App;
