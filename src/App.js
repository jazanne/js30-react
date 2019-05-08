import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clock">02 - JS and CSS Clock</Link>
            </li>
            <li>
              <Link to="/flex-panel-gallery">05 - Flex Panel Gallery</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default App;
