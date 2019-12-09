import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './app/components/Button';

function App() {
  return (
    <div className="App">


      <Button onChange={console.log("this is button!!!")} />

    </div >

  );
}

export default App;
