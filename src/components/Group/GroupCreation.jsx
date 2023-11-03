import React, { useState } from 'react'

import styles from './GroupCreation.module.css'

function GroupCreation({setGroupCreationScreen,setGroups,groups}) {
    let colors = [
        '#B38BFA',
        '#FF79F2',
        '#43E6FC',
        '#F19576',
        '#0047FF',
        '#6691FF',
    ]
    const [newGroupName, setNewGroupName] = useState('')
    const [newGroupColor, setNewGroupColor] = useState('')
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
      
        let grpNames = []
        
        if(groups){
          grpNames = groups.map(grp => grp['name']);
        }
        
        let grpsData = groups
        let valid = true;
        // Check Error
        if(!(newGroupName.trim().length > 0)){
            setError(true)
            setErrorText('Please Enter Group Name')
            valid = false
        }
        else if(!(newGroupColor.length > 0)){
            setError(true)
            setErrorText('Please Choose Color')
            valid = false
        }
        if(grpNames.includes(newGroupName)){
            setError(true)
            setErrorText('Please Type Unique Group Name')
            valid = false
        }

        if (valid) {
          setError(false)
          setGroupCreationScreen(false)
          if(groups){
            setGroups([...groups,{
              ['name']:newGroupName.trim(),
              ['color']:newGroupColor
            }])
            grpsData = [...grpsData,{
              ['name']:newGroupName.trim(),
              ['color']:newGroupColor
            }]
          }
          else{
            setGroups([{
              ['name']:newGroupName.trim(),
              ['color']:newGroupColor
            }])
            grpsData = [{
              ['name']:newGroupName.trim(),
              ['color']:newGroupColor
            }]
          }
          window.localStorage.setItem('groupsData', JSON.stringify(grpsData));
        }
      }
    
    const onChangeHandler = (e) => {
        if (e.target.name==='name'){
            setNewGroupName(e.target.value)
        }
        else if(e.target.name==='color'){
            setNewGroupColor(e.target.value)
        }
    }
  return (
    <div className={styles.main}>
        <div className={styles.title}>Create New Notes group</div>
        <form>
            <div className={styles.formItem}>
            <label className={styles.label} htmlFor="group_name">Group Name</label>
            <input className={styles.text_field} placeholder='Enter your group name....' type="text" id='group_name' name='name' onChange={onChangeHandler}/>
            </div>
            
            <div className={styles.formItem}>
            <label className={styles.label}>Choose colour</label>
            <div className={styles.options}>
            {colors.map((value,idx)=>(
                <div key={idx}>
                <input className={styles.color} type='radio' id={value} value={value} name ={'color'} onChange={onChangeHandler}/>
                <label className={styles.colorLabel} style={{backgroundColor:value}} htmlFor={value}/>
                </div>
            ))}
            </div>
            </div>
            {error?<div className={styles.errorText}>{errorText}</div>:<br />}
            <button className={styles.button} onClick={onSubmitHandler}>Create</button>
        </form>
    </div>
  )
}

export default GroupCreation