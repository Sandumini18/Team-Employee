import React from 'react'

function TeamCard({teamLead, teamName, memberCount}) {
  return (
    <div className='team-card'>
        <h3>{teamName}</h3>
        <p>{teamLead}</p>
        <p>{memberCount}</p>
    </div>
  )
}

export default TeamCard