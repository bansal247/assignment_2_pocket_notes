import React, { useEffect, useState } from 'react'

import styles from './GroupItem.module.css'
function GroupItem({name, grpColor='#B38BFA'}) {
    const [l, setL] = useState('')
    const [f, setF] = useState('')
    useEffect(() => {
      
      let name_array = name.split(' ');
      if(name_array.length === 1){
        setF(name_array[0][0].toUpperCase())
      }
      else{
        setF(name_array[0][0].toUpperCase())
        setL(name_array[1][0].toUpperCase())
      }
    }, [name])
    
    
    
  return (
    <div className={styles.main}>
        <div className={styles.icon} style={{backgroundColor:grpColor}}>{f}{l}</div>
        <p className={styles.text}>{name}</p>
    </div>
  )
}

export default GroupItem