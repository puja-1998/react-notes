import React, {useState} from 'react';
import './App.css';

function App() {
  const [str, setStr] = useState("Change the text");
  

  function handlebutton(){
    setStr("Text change to :Hello Puja");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Change Me using a button</h1>
        <button onClick={handlebutton}>{str}</button>
      </header>
    </div>
  );
}

export default App;
