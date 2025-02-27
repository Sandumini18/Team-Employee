import React, { useState } from 'react'
import Layout from '../components/Layout';
import AddTeam from '../components/AddTeam';
import TeamCard from '../components/TeamCard';

function Teams({teamLead, teamName}) {

  return (
    <div>
        <Layout>
          <div>
            <AddTeam/>
            <TeamCard/>
          </div>
        </Layout>
    </div>
  )
}

export default Teams