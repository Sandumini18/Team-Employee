import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function AddEmployee(props) {

    const [formData, setFormData] = useState({fname:"", lname:"", dept:"", role:"",id:"",contact:""})
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const formHandler = () => {
      setModalIsOpen(true)
    }

    const formClose = () => {
      setModalIsOpen(false)
    }

    const changeHandler = (e) => {
      setFormData({...formData, [e.target.name]:[e.target.value]})
    }
  
    const submitHandler = (e) => {
      e.preventDefault();
      props.onAdd(formData)
      console.log(formData)
      setFormData({fname:"", lname:"", dept:"", role:"",id:"",contact:""});
      setModalIsOpen(false)
    }

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={formHandler}>Add New Employee</button>
      <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
        <div className="modal-header">
          <h5>Add Employee Details</h5>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={formClose}>
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
        </div>
      <form onSubmit={submitHandler}>
        <input className="form-control" type='text' id='id' placeholder='id' name='id' value={formData.id} onChange={changeHandler} required/>
        <input className="form-control" type='text' id='fname' placeholder='first name' name='fname' value={formData.fname} onChange={changeHandler} required/>
        <input className="form-control" type='text' id='lname' placeholder='last name' name='lname' value={formData.lname} onChange={changeHandler} required/>
        <input className="form-control" type='text' id='contact' placeholder='contact number' name='contact' value={formData.contact} onChange={changeHandler} required/>
        <input className="form-control" type='text' id='dept' placeholder='dept name' name='dept' value={formData.dept} onChange={changeHandler} required/>
        <input className="form-control" type='text' id='role' placeholder='job role' name='role' value={formData.role} onChange={changeHandler} required/>
        <button className="btn btn-primary" type='submit'>Add</button>
      </form>
      </Modal>
        
    </div>
  )
}

export default AddEmployee