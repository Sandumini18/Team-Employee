import React, { useState } from 'react'
import Layout from '../components/Layout';
import AddTeam from '../components/AddTeam';
import TeamCard from '../components/TeamCard';

function Teams(props) {

  const [allTeams, setAllTeams] = useState([])

  const handleAddTeam = (team) => {
    setAllTeams([...allTeams, team])
  }

  const deleteTeam = (id) => {
    setAllTeams([...allTeams].filter((team)=>team.id!==id));
  }

  const editTeam = (id, newTeamData) => {
    setAllTeams(
      allTeams.map((team) => (team.id === id) ? {...team, ...newTeamData} : team)
    )
  }

  return (
    <div>
        <Layout>
          <div>
            <AddTeam addTeam={handleAddTeam} modal={props.modal} setModal={props.setModal} close={props.close}/>
            <TeamCard teamList={allTeams} delete={deleteTeam} edit={editTeam} modal={props.modal} setModal={props.setModal} close={props.close}/>
          </div>
        </Layout>
    </div>
  )
}

export default Teams