import React from 'react';
import './App.css'; // You may need to adjust the import based on your project structure and styling preferences
import Navbar from './components/navbar';


function App() {
  return (
    <div className="homepage">
      <Navbar/>

      <div className="title">
        <h2>
          Time for a... <span className="underline" id="cycleText">NightIn?</span>
        </h2>
        <script src="./titleCycle.js"></script>
        <div className="button-container">
          <button className="side-button"></button>
          <button className="match-button">Let's Match.</button>
          <button className="side-button"></button>
        </div>
      </div>

      <div className="how-to">
        <div className="step-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, beatae maiores praesentium</p>
        </div>
        <div className="step-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, sndae, beatae maiores praesentium</p>
        </div>
        <div className="step-3">
          <p>Lorem ipum dolor sit amet, consectetur adipisiciandae, beatae maiores praeasdasa</p>
        </div>
      </div> 
    </div>
  );
}

export default App;
