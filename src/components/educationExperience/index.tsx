import React from 'react';
import { faBookReader, faLaptopCode, faUserGraduate, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons';
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
        <div className={styles.timeline}>
          <div className={styles.education}>
            <div className={styles.educationYear}>
              <FontAwesomeIcon icon={faUserGraduate} className={styles.icon} />
              <div>2015-2019</div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                B.Tech IT
              </div>
              <div className={styles.school}>
                <p>Sreenidhi Institute of Science and Technology</p>
              </div>
            </div>
          </div>

          <div className={styles.education}>
            <div className={styles.educationYear}>
              <FontAwesomeIcon icon={faUniversity} className={styles.icon} />
              <div>2013-2015</div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                Intermediate
              </div>
              <div className={styles.school}>
              <p>Narayana Junior College</p>
              </div>
            </div>
          </div>

          <div className={styles.education}>
            <div className={styles.educationYear}>
              <FontAwesomeIcon icon={faSchool} className={styles.icon} />
              <div>2013</div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                High School
              </div>
              <div className={styles.school}>
              <p>St Martin's High School</p>
              </div>
            </div>
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