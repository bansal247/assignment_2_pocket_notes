import React, { useEffect, useState } from 'react'
import NotesInitialScreen from './NotesInitialScreen'

import styles from './NotesComponent.module.css'
import NotesItem from './NotesItem'
import GroupItem from '../Group/GroupItem'
import Arrow from '../../assets/arrow.svg'
import Back from '../../assets/back.svg'


function NotesComponent({ selectedGroup,secondScreen,setBackArraow }) {

  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])

  useEffect(() => {
    if(selectedGroup)
    setNotes(JSON.parse(localStorage.getItem(selectedGroup['name'])))
  }, [selectedGroup])


  const handleChange = (e) => {
    setNote(e.target.value)
  }

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      createNote();
    }
  };


  const getTimeAndDate = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedTime = now.toLocaleTimeString(undefined, options);

    return { date: formattedDate, time: formattedTime };
  }

  const createNote = () => {
    if(note.length<1){
      return
    }
    let {date,time} = getTimeAndDate()

    let newNotes = null
    const data = {
      'date':date,
      'time':time,
      'note':note
    }
    if(notes){
      newNotes = [...notes,data]
      
    }
    else{
      newNotes = [data]
    }
    setNotes(newNotes)
    window.localStorage.setItem(selectedGroup['name'], JSON.stringify(newNotes));
    setNote('')
  }
  return (
    <div className={styles.main}>
      {!selectedGroup ?
        <NotesInitialScreen />
        :
        <>
          <div className={styles.bar}>
          {secondScreen?<div>
            <button onClick={()=>setBackArraow(true)} className={styles.backArrow}><img src={Back} alt="back" /></button>
            </div>:<></>}
            <GroupItem
            style={{
              backgroundColor: '#E8E8E8',
              marginLeft: '15px',
              pointerEvents: 'none'
            }}
            name={selectedGroup['name']} 
            grpColor={selectedGroup['color']}/>
          </div>
          <div className={styles.NotesScreen}>
          {notes?notes.map((n,idx)=>(
            <NotesItem key={idx} date={n['date']} time={n['time']} note={n['note']} />
          )):<></>}
          </div>
          <div className={styles.noteArea}>
            <textarea 
            onChange={handleChange} 
            className={styles.textarea} 
            onKeyDown={handleEnterKey}
            value={note} 
            placeholder='Enter your text here...........' />
            <button onClick={createNote} className={styles.button}><img src={Arrow} alt="enter" /></button>
          </div>
        </>
      }
    </div>
  )
}

export default NotesComponent