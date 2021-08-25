import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import gouravImage from '../../assets/images/gourav.jpg'

import styles from './aboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faUser} size="2x"/>
      <p className={styles.aboutMeText}><span>About me</span></p>
      <section className={styles.subContainer}>
        <article className={styles.imageInfo}>
          <img src={gouravImage} alt="gouravImage" />
          <figcaption>Gourav Manna</figcaption>
        </article>
        <article className={styles.aboutMeParah}>

        </article>
      </section>
    </div>
  )
}

export default AboutMe;