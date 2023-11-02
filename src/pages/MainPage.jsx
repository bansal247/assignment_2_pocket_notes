import React from 'react'
import GroupCreation from '../components/Group/GroupCreation'
import GroupComponent from '../components/Group/GroupComponent'
import NotesComponent from '../components/Notes/NotesComponent'

function MainPage() {
  return (
    <div style={{ display: 'flex' }}>
      {/* <GroupCreation/> */}
      <GroupComponent />
      <NotesComponent />
    </div>

  )
}

export default MainPage