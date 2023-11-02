import React from 'react'
import NotesInitialScreen from './NotesInitialScreen'

import styles from './NotesComponent.module.css'
import NotesItem from './NotesItem'
import GroupItem from '../Group/GroupItem'
import arrow from '../../assets/arrow.svg'


function NotesComponent({ grpName = 'sdsd sdd' }) {
  return (
    <div className={styles.main}>
      <NotesInitialScreen />
      {/* <div className={styles.bar}><GroupItem style={{backgroundColor:'#E8E8E8',marginLeft:'15px'}} name={grpName}/></div>
        <div className={styles.NotesScreen}>
          <NotesItem/>
          <NotesItem/>
          <NotesItem/>
        </div>
        <div className={styles.noteArea}>
          <textarea className={styles.textarea} name="" id="" placeholder='Enter your text here...........'/>
          <button className={styles.button}><img src={arrow} alt="enter" /></button>
        </div> */}
    </div>
  )
}

export default NotesComponent