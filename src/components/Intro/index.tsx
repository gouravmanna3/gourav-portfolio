import React from 'react';
import { downloadResume } from '../../assets/utils/downloadFile';

import styles from './intro.module.scss';

const Intro = () => {
  return (
    <section className={styles.introContainer}>
      <h1 className={styles.helloWorld}>Hello World!</h1>
      <p className={styles.frontEnd}>I am a Front End Developer</p>
      <button type="button" name="download-resume" className={styles.btn} onClick={downloadResume}> 
        Download Resume
      </button>
    </section>
  )
}

export default Intro;