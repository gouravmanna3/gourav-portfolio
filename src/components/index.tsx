import React from 'react';
import Intro from './Intro';

import './index.css';
import AboutMe from './aboutMe';

const MainContainer = () => {
  return (
    <div>
      <div className="container" >
        <nav className="navBar">
          <h1 className="myName">GOURAV MANNA</h1>
        </nav>
        <Intro />
      </div>
     <AboutMe />
    </div>
  )
}

export default MainContainer; 