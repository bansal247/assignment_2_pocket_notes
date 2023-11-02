import React from 'react'
import styles from './NotesItem.module.css'

function NotesItem() {
    return (
        <div className={styles.main}>
            <div className={styles.dateTime}>
                <div>10:38 Am</div>
                <div>19 Januaury 2023</div>
            </div>
            <div className={styles.note}>When first building this generator we thought about using computers to generate the paragraphs, but they weren't very good and many times didn't make any sense at all. We therefore took the time to create paragraphs specifically for this generator to make it the best that we could.</div>
        </div>
    )
}

export default NotesItem