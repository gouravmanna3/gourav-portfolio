import React from 'react';
import Intro from './Intro';
import AboutMe from './aboutMe';

import styles from './index.module.scss';

const MainContainer = () => {
  return (
    <div>
      <div className={styles.container}>
        <nav className={styles.navBar}>
          <h1 className={styles.myName}>GOURAV MANNA</h1>
        </nav>
        <Intro />
      </div>
     <AboutMe />
    </div>
  )
}

export default MainContainer; 