
import styles from './About.module.css';
import React from 'react';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}><img src={getImageUrl("about/abotImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage} />
        
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
                <div className={styles.aboutItemText}>
                <h3>FrontEnd Developer</h3>
                <p>
                    I am a Frontend Developer with skills in builidng responsive and scalable web applications using React! 
                </p>
            
            </div>
            </li>

            <li className= {styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="servericon" />
                <div className={styles.aboutItemText}>
                <h3>BackEnd Developer</h3>
                <p>
                    Interested in Backend Development with Node js. and Express js. 
                </p>
            
            </div>
            </li>

            <li className= {styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="servericon" />
                <div className={styles.aboutItemText}>
                <h3>Ui Design</h3>
                <p>
                    Knowledge in UI/UX design and creating mockupdesign in Figma. 
                </p>
            
            </div>
            </li>
            
        </ul>
        </div>
    </section>
  )
}
