import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl} from '../../utils'

export const Hero = () => {
  return (
    <section className = {styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi!! I am Imrul Kayes.</h1>
        <p className={styles.description}>I am a Fronend Developer with knowledge of React </p>
        <a className={styles.contactBtn} href="mailto: asmimrul@gmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage1.png")} alt=""  className={styles.heroImg} />

        <div className={styles.topBlur}> </div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
