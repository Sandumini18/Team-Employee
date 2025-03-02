import React, { useState } from 'react'
import Layout from '../components/Layout';
import AddTeam from '../components/AddTeam';
import TeamCard from '../components/TeamCard';

function Teams() {

  const [allTeams, setAllTeams] = useState([])

  const handleAddTeam = (team) => {
    setAllTeams([...allTeams, team])
  }

  const deleteTeam = (id) => {
    setAllTeams([...allTeams].filter((team)=>team.id!==id));
  }

  return (
    <div>
        <Layout>
          <div>
            <AddTeam addTeam={handleAddTeam}/>
            <TeamCard teamList={allTeams} delete={deleteTeam}/>
          </div>
        </Layout>
    </div>
  )
}

export default Teams