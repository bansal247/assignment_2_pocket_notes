import React from 'react'

import bgImage from '../../assets/image-removebg-preview 1.png'
import lock from '../../assets/lock.svg'
import styles from './NotesInitialScreen.module.css'

function NotesInitialScreen() {
  return (
    <div className={styles.main}>
      <img src={bgImage} alt="img" />
      <h1 className={styles.title}>Pocket Notes</h1>
      <p className={styles.p1}>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      <p className={styles.p2}><img src={lock} alt="encrypted" />end-to-end encrypted</p>
    </div>
  )
}

export default NotesInitialScreen