import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
        <h1>Employee Management System</h1>
        {/*<Link to="/" className='nav-item'>Dashboard</Link>*/}
        <div className="nav nav-pills nav-justified">
        <Link to="/"  className="nav-link">Employees</Link>
        <Link to="/teams"  className="nav-link">Teams</Link>
        </div>
        
    </nav>
  )
}

export default NavBar