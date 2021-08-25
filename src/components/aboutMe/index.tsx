import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import gouravImage from '../../assets/images/gourav.jpg'
import { FACEBOOK_URL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from '../../assets/utils/links';

import styles from './aboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faUser} size="2x"/>
      <p className={styles.aboutMeText}>About me</p>
      <section className={styles.subContainer}>
        <article className={styles.imageInfo}>
          <img src={gouravImage} alt="gouravImage" />
          <figcaption>Gourav Manna</figcaption>
            <div>
              <a href={LINKEDIN_URL} target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className={`${styles.fa} ${styles.faLinkedin}`} />
              </a>
              <a href={GITHUB_URL} target="_blank">
                <FontAwesomeIcon icon={faGithub} className={`${styles.fa} ${styles.faGithub}`} />
              </a>
              <a href={FACEBOOK_URL} target="_blank">
                <FontAwesomeIcon icon={faFacebook} className={`${styles.fa} ${styles.faFacebook}`} />
              </a>
              <a href={INSTAGRAM_URL} target="_blank">
                <FontAwesomeIcon icon={faInstagram} className={`${styles.fa} ${styles.faInstagram}`} />
              </a>
            </div> 
        </article>
        <article className={styles.aboutMeParah}>
          <h1>Who am I?</h1>
          <p>Hello, my name is Gourav, I'm a Front End Developer with 1.7 years of experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan elementum nunc.</p>
          <p>I have an eye for what the front end of a good website should look like.. Sed pellentesque nisi a magna gravida, vel aliquet arcu imperdiet.</p>
        </article>
      </section>
    </div>
  )
}

export default AboutMe;