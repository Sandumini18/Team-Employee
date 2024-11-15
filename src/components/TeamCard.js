import React from 'react'

function TeamCard({teamName, teamLead, memberCount}) {
  return (
    <div className='team-card'>
        <h3>{teamName}</h3>
        <p>{teamLead}</p>
        <p>{memberCount}</p>
    </div>
  )
}

export default TeamCard