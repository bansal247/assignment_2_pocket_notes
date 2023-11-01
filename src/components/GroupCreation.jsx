import React from 'react'

import styles from './GroupCreation.module.css'

function GroupCreation({onSubmitHandler, onChangeHandler}) {
    let colors = [
        '#B38BFA',
        '#FF79F2',
        '#43E6FC',
        '#F19576',
        '#0047FF',
        '#6691FF',
    ]

  return (
    <div className={styles.main}>
        <div className={styles.title}>Create New Notes group</div>
        <form>
            <div className={styles.formItem}>
            <label className={styles.label} htmlFor="group_name">Group Name</label>
            <input className={styles.text_field} placeholder='Enter your group name....' type="text" id='group_name' name='name' onChange={onChangeHandler}/>
            </div>
            
            <div className={styles.formItem}>
            <label className={styles.label} htmlFor="">Choose colour</label>
            <div className={styles.options}>
            {colors.map((value,idx)=>(
                <div key={idx}>
                <input className={styles.color} type='radio' id={value} value={value} name ={'color'} onChange={onChangeHandler}/>
                <label className={styles.colorLabel} style={{backgroundColor:value}} htmlFor={value}/>
                </div>
            ))}
            </div>
            </div>
            <br />
            <button className={styles.button} onSubmit={onSubmitHandler}>Create</button>
        </form>
    </div>
  )
}

export default GroupCreation