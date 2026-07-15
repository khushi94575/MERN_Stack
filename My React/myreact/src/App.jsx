import React from 'react';
import About from './components/About/About';
import Chidren from './components/jsxinChildren/Chidren';


function contact(){
  const display =(e) => {
    e.preventDefault();
    console.log("button clicked");
}

  return (
    <div>
    <h1>Event Handling</h1>
  <input type="text" />
  <button onClick={display}>Click me!</button>
    </div>
  )
}

export default App;
