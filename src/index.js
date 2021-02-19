
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
// Modules import
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react function or class (component)
const funk = function () {
  return "Hi There function";
}

function getDate() {
  return (new Date()).toLocaleDateString();

}



const App = () => {
  return (
    <div>
      <div>Current date: {getDate()}</div>

      <label className="label" htmlFor="inputNombre"> Name: </label>
      <input id="inputNombre" type="text" ></input>
      <button style={{ backgroundColor: "black", color: "white" }}> Submit </button>



    </div >


  );
}

// Render the component to the browser 
ReactDOM.render(<App />, document.querySelector('#root'));