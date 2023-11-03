import React from 'react'
import styles from './NotesItem.module.css'

function NotesItem({date,time,note}) {
    return (
        <div className={styles.main}>
            <div className={styles.dateTime}>
                <div>{time}</div>
                <div>{date}</div>
            </div>
            <div className={styles.note}>{note}</div>
        </div>
    )
}

export default NotesItem