import React, { useState } from 'react'

function AddTeam({closeModal, handleSubmit}) {

  const [teamLead, setTeamLead] = useState("")
  const [teamName, setTeamName] = useState("")

  return (
    <div>
      <h2>Add New Team</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='teamName'>Team Name:</label>
          <input type='text' id='teamName' name='teamname' placeholder='enter team name' value={teamName} onChange={(e) => setTeamName(e.target.value)}/>

          <label htmlFor='teamLead'>Team Lead:</label>
          <input type='text' id='teamLead' name='teamLead' placeholder='enter team lead' value={teamLead} onChange={(e) => setTeamLead(e.target.value)}/>
          
          <button type='submit' onClick={() => closeModal()}>Submit</button>
        </form>
    </div>
  )
}

export default AddTeam