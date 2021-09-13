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
        <div className={styles.educationHeader}>
          <FontAwesomeIcon icon={faLaptopCode} className={styles.readingIcon} />
          <p className={styles.myEducationText}>My Experience</p>
        </div>
        <div className={styles.experienceTimeline}>
          <div className={styles.entry}>
            <div className={styles.title}>
              <h3>Jan, 2020 - Present</h3>
              <p>Associate Software Engineer, Intralinks</p>
            </div>
            <div className={styles.body}>
              <p>Worked as ReactJs developer for a fintech product of Intralinks</p>
              <ul>
                <li>Building components for the designs using React, Redux and Typescript.</li>
                <li>Key contributor and took ownership of a key feature built using React and Redux.</li>
                <li>Writing unit test cases for the designed components using Jest.</li>
              </ul>
            </div>
          </div>

          <div className={styles.entry}>
            <div className={styles.title}>
              <h3>Jan, 2019 - Apr, 2019</h3>
              <p>Intern, Cognizant Technology Solutions</p>
            </div>
            <div className={styles.body}>
              <p>Did an internship on Java Full Stack Development</p>
              <ul>
                <li>Built a dummy project using Angular and Java</li>
                <li>Key contributor in designing the user interface of the project</li>
              </ul>
            </div>
          </div>

        </div>
      </article>

    </section>
  )
}

export default EducationExperience;