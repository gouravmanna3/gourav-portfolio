import React from 'react';
import { downloadResume } from '../../assets/utils/downloadFile';

import './intro.css';

const Intro = () => {
  return (
    <section className="introContainer">
      <h1 className="helloWorld">Hello World!</h1>
      <p className="frontEnd">I am a Front End Developer</p>
      <button type="button" name="download-resume" className="btn" onClick={downloadResume}> 
        Download Resume
      </button>
    </section>
  )
}

export default Intro;