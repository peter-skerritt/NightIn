import React from 'react';
import './App.css'; // You may need to adjust the import based on your project structure and styling preferences
import Navbar from './components/navbar';
import Title from './components/title'


function App() {
  return (
    <div className="homepage">
      <Navbar/>
      <Title />
      <div className="how-to">
        <div className="step-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, beatae maiores praesentium</p>
        </div>
        <div className="step-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, sndae, beatae maiores praesentium</p>
        </div>
        <div className="step-3">
          <p>Lorem ipsum dolor sit amet, consectetur adipisiciandae, beatae maiores praeasdasa</p>
        </div>
      </div> 
    </div>
  );
}

export default App;
