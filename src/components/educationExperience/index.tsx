import React from 'react';
import { faBookReader, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './educationExperience.module.scss';

const EducationExperience = () => {
  return (
    <section className={styles.container}>
      <article className={styles.educationContainer}>
        <div className={styles.educationHeader}>
          <FontAwesomeIcon icon={faBookReader} className={styles.readingIcon} />
          <p className={styles.myEducationText}>My Education</p>
        </div>
        <div className={styles.educationList}>
          <div>
            <h4>B.Tech IT</h4>
            <p>Sreenidhi Institute of Science and Technology</p>
          </div>
          <div>
            <h4>Intermediate</h4>
            <p>Narayana Junior College</p>
          </div>
          <div>
            <h4>High School</h4>
            <p>St Martin's High School</p>
          </div>
        </div>
      </article>
      <article className={styles.experienceContainer}> 
        <FontAwesomeIcon icon={faLaptopCode} className={styles.readingIcon} />
      </article>

    </section>
  )
}

export default EducationExperience;