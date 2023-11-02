import React from 'react'
import GroupItem from './GroupItem'

import styles from './GroupComponent.module.css'
function GroupComponent({ grps, onCreate, onSelect }) {
  grps = [
    'kjdshfsf', 'asfdad fas', 'asdfas sadfa', 'asfdasd sadas',
    'kjdshfsf', 'asfdad fas', 'asdfas sadfa', 'asfdasd sadas',
    'kjdshfsf', 'asfdad fas', 'asdfas sadfa', 'asfdasd sadas'
  ]
  return (
    <div className={styles.main}>
      <h1>Pocket Notes</h1>
      <div className={styles.content}>
        <button className={styles.button}><span>+</span>Create Notes group</button>
        <div className={styles.group}>
          {grps.map((grp, idx) => (
            <GroupItem className={styles.groupItem} name={grp} key={idx} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default GroupComponent