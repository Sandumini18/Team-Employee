import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar'>
        <h1>Employee Management System</h1>
        <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/teams">Teams</a></li>
            <li><a href="/employees">Employees</a></li>
        </ul>
    </nav>
  )
}

export default NavBar