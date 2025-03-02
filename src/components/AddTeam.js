import React, { useState } from 'react'

import Modal from 'react-modal'

Modal.setAppElement('#root')

function AddTeam(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [teamData, setTeamData] = useState({id:"",teamName:"",count:""})

  const handleTeamData = (e) => {
    setTeamData({...teamData, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(teamData)
    props.addTeam(teamData)
    setTeamData({id:"",teamName:"",count:""})
    setModalIsOpen(false)
  }

  const cancelForm = () => {
    setTeamData({id:"",teamName:"",count:""})
    setModalIsOpen(false)
  }

  const formClose = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={()=>setModalIsOpen(true)}>Add New Team</button>
        <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
          <div className='modal-header'>
        <h5>Add Team Details</h5>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg close-icon" viewBox="0 0 16 16" onClick={formClose}>
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
</div>

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