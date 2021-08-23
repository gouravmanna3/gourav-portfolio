import React from 'react';
import Intro from './Intro';

import './index.css';

const MainContainer = () => {
  return (
    <div className="container" >
      <nav className="navBar">
        <h1 className="myName">GOURAV MANNA</h1>
      </nav>
      <Intro />
    </div>
  )
}

export default MainContainer; 