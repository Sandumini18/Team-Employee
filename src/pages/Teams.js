import React, { useState } from 'react'
import TeamCard from '../components/TeamCard'
import AddComponent from '../components/AddTeam';
import AddTeam from '../components/AddTeam';

function Teams() {

    const [team, setTeam] = useState(false);

    const handleAddTeam = () => {
        setTeam(true);
    };

  return (
    <div>
        <div>
            <h2>Teams</h2>
            <button onClick={handleAddTeam}>Add Team</button>
            <div>
                <TeamCard teamName="Team Alpha" teamLead="Frank" memberCount={5}/>
                <TeamCard teamName="Team Beta" teamLead="James" memberCount={8}/>
            </div>
        </div>
        <AddTeam onClose={() => setTeam(false)}/>
    </div>
  )
}

export default Teams