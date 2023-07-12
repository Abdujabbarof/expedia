import React from 'react'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>It Matters Who You Travel With</h1>
        <p>We want you to feel confident in the travel experience you will have with us.</p>
      </div>
    </section>
  )
}

export default Hero