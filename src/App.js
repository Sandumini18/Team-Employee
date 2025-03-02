import React from 'react'
//import './styles/AddTeam.css'
//import './styles/Teams.css'
//import Dashboard from './pages/Dashboard'
import Teams from './pages/Teams'
import Employees from './pages/Employees'
import { Route, Routes } from 'react-router-dom'
import './App.css';

const App = () => {

  return (
    <div>
      <Routes>
        {/*<Route path='/' element={<Dashboard/>}/>*/}
        <Route path='/' element={<Employees/>}/>
        <Route path='/teams' element={<Teams/>}/>
      </Routes>
    </div>
  )
    
  
}

export default App
