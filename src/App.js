import React from 'react';
import './App.css';
import Tabs from "./components/Tabs"; 



function App() {

  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs> 
        <div label="Tab 01"> 
          <div className="container">
            EU 
          </div>
        </div> 
        <div label="Tab 02"> 
          <div className="container">
            AMO
          </div>
        </div> 
        <div label="Tab 03"> 
          <div className="container">
            MEU Carrapatinho
          </div>
        </div> 
      </Tabs> 
    </div>
  );
}

export default App;
