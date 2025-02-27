import React, { useState } from 'react'

import Modal from 'react-modal'

Modal.setAppElement('#root')

function AddTeam() {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [teamData, setTeamData] = useState({id:"",teamName:"",count:""})

  const handleTeamData = (e) => {
    setTeamData({...teamData, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(teamData)
    setTeamData({id:"",teamName:"",count:""})
    setModalIsOpen(false)
  }

  const cancelForm = () => {
    setTeamData({id:"",teamName:"",count:""})
    setModalIsOpen(false)
  }

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={()=>setModalIsOpen(true)}>Add New Team</button>
        <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
        <h5>Add Team Details</h5>

          <form onSubmit={handleSubmit}>
            <input className="form-control" type='text' id='id' placeholder='id' name='id' value={teamData.id} onChange={handleTeamData} required/>
            <input className="form-control" type='text' id='teamName' placeholder='Team Name' name='teamName' value={teamData.teamName} onChange={handleTeamData} required/>
            <input className="form-control" type='text' id='count' placeholder='No of Employees' name='count' value={teamData.count} onChange={handleTeamData} required/>
            <button className="btn btn-primary" type='submit'>Add</button>
            <button className="btn btn-primary" onClick={cancelForm}>Cancel</button>

          </form>
        </Modal>
    </div>
  )
}

export default AddTeam