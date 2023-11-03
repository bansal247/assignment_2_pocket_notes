import React, { useEffect, useState } from 'react'

import GroupItem from './GroupItem'
import GroupCreation from './GroupCreation'
import styles from './GroupComponent.module.css'

function GroupComponent({ 
  setSelectedGroup,
}) {

  
  const [GroupCreationScreen, setGroupCreationScreen] = useState(false)
  const [groups, setGroups] = useState([])

  useEffect(() => {
    setGroups(JSON.parse(localStorage.getItem('groupsData')))
  },[])

  const onCreateHandler = (e) => {
    setGroupCreationScreen(true)
  }

  const outsideClickHandler = () => {
    setGroupCreationScreen(false)
  }

  
  
  
  return (
    <>
    <div className={styles.main}>
      <h1>Pocket Notes</h1>
      <div className={styles.content}>
        <button className={styles.button} onClick={onCreateHandler}><span>+</span>Create Notes group</button>
        <div className={styles.group}>
          {groups?groups.map((grp, idx) => (
            <GroupItem setSelectedGroup={setSelectedGroup} className={styles.groupItem} name={grp['name']} grpColor={grp['color']} key={idx} />
          )):<></>}
        </div>
      </div>
    </div>
    {GroupCreationScreen ? 
    <div className={styles.outerGroupCreate}>
    <div className={styles.createGroupBackGround} onClick={outsideClickHandler}>
    </div>
    <div className={styles.createGroup}>
      <GroupCreation 
      setGroupCreationScreen = {setGroupCreationScreen}
      groups={groups}
      setGroups={setGroups}
      />
    </div>
    </div>
    :
    <></>}
    </>
  )
}

export default GroupComponent