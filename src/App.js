//import React from 'react'
import React, { useState } from 'react'

//import './styles/AddTeam.css'
//import './styles/Teams.css'
//import Dashboard from './pages/Dashboard'
import Teams from './pages/Teams'
import Employees from './pages/Employees'
import { Route, Routes } from 'react-router-dom'
import './App.css';

const App = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  

  const formClose = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <Routes>
        {/*<Route path='/' element={<Dashboard/>}/>*/}
        <Route path='/' element={<Employees close={formClose} modal={modalIsOpen} setModal={setModalIsOpen}/>}/>
        <Route path='/teams' element={<Teams close={formClose} modal={modalIsOpen} setModal={setModalIsOpen}/>}/>
      </Routes>
    </div>
  )
    
  
}

export default App
