import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function TeamCard(props) {

  const [editTeamData, setEditTeamData] = useState({id:"",teamName:"",count:""})
  const [editId, setEditId] = useState()

  const handleEditTeam = (teamId, currentData) => {
    setEditId(teamId)
    setEditTeamData(currentData)
    props.setModal(true)
  }

  const changeHandler = (e) => {
    setEditTeamData({...editTeamData, [e.target.name]:[e.target.value]})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    props.edit(editId, editTeamData)
    console.log({editTeamData})
    props.setModal(false)
    setEditId()
    setEditTeamData({id:"",teamName:"",count:""})
  }

  return (
    <div className='team-card'>
      <h1 className='titleEmp'>Teams Details</h1>
      <div>
      
          {props.teamList.map((t) => (
            <div key={t.id} className="card">
              <div>
                <Modal isOpen={props.modal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg close-icon" viewBox="0 0 16 16" onClick={props.close}>
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
                  <form onSubmit={submitHandler}>
                    <input className="form-control" type='text' id='id' placeholder='id' name='id' value={editTeamData.id} onChange={changeHandler} required/>
                    <input className="form-control" type='text' id='teamName' placeholder='Team Name' name='teamName' value={editTeamData.teamName} onChange={changeHandler} required/>
                    <input className="form-control" type='text' id='count' placeholder='No of Employees' name='count' value={editTeamData.count} onChange={changeHandler} required/>
                    <button className="btn btn-primary" type='submit'>Update</button>
                    <button className="btn btn-primary" type='submit'>Cancel</button>
                  </form>
                </Modal>
              </div>
                <div>
                  <div>{t.id} </div>
                  <div>{t.teamName}</div> 
                  <div>{t.count}</div>
                  <div className='action'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil edit" viewBox="0 0 16 16" onClick={() => handleEditTeam(t.id, t)}>
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" onClick={()=>props.delete(t.id)}>
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
                  </div>
                </div>
            </div>
          ))}
        
      </div>
    </div>
  )
}

export default TeamCard