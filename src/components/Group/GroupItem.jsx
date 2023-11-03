import React, { useEffect, useState } from 'react'

import styles from './GroupItem.module.css'
function GroupItem({name, grpColor, setSelectedGroup , style={}}) {
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
    
    const onSelect = () => {
      setSelectedGroup({
        'name':name,
        'color':grpColor
      })
    }
    
  return (
    <button onClick={onSelect} className={styles.main} style={style} >
        <div className={styles.icon} style={{backgroundColor:grpColor}}>{f}{l}</div>
        <p className={styles.text}>{name}</p>
    </button>
  )
}

export default GroupItem