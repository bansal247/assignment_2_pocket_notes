import React, { useEffect, useState } from 'react'

import GroupComponent from '../components/groupsFolder/GroupComponent'
import NotesComponent from '../components/notesForlder/NotesComponent'

import styles from './MainPage.module.css'

function MainPage() {


  const [selectedGroup, setSelectedGroup] = useState(null)
  const [backArraow, setBackArraow] = useState(false)
  const [firstScreen, setFirstScreen] = useState(true)
  const [secondScreen, setSecondScreen] = useState(false)

  useEffect(() => {
    if (selectedGroup) {
      setFirstScreen(false)
      setSecondScreen(true)
      setBackArraow(false)
    }


  }, [selectedGroup])

  useEffect(() => {
    if (backArraow) {
      setSecondScreen(false)
      setBackArraow(false)
      setFirstScreen(true)
    }
  }, [backArraow])


  return (
    <div className={styles.main}>
      <div className={`${firstScreen ? styles.enable : styles.disable}`}>
        <GroupComponent
          setSelectedGroup={setSelectedGroup}
        />
      </div>

      <div className={`${secondScreen ? styles.enable : styles.disable}`}>
        <NotesComponent
          selectedGroup={selectedGroup}
          secondScreen={secondScreen}
          setBackArraow={setBackArraow}
        />
      </div>

    </div>

  )
}

export default MainPage