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
            TAB 01 ATIVA
          </div>
        </div> 
        <div label="Tab 02"> 
          <div className="container">
            TAB 02 ATIVA
          </div>
        </div> 
        <div label="Tab 03"> 
          <div className="container">
            TAB 03 ATIVA
          </div>
        </div> 
      </Tabs> 
    </div>
  );
}

export default App;
