
import Layout from '../components/Layout'
import AddEmployee from '../components/AddEmployee'
import EmployeeList from '../components/EmployeeList'
import { useState } from 'react'

function Employees() {
  const [allEmployees, updateAllEmployees] = useState([])

  const addEmployee = (employee) => {
    updateAllEmployees([...allEmployees, employee])
  }

  const deleteEmployee = (id) => {
    updateAllEmployees([...allEmployees].filter((employee)=>employee.id!==id));
  }

  return (
    <div>
      <Layout>
        <AddEmployee onAdd={addEmployee}/>
        <EmployeeList allEmployees={allEmployees} onDelete={deleteEmployee}/>
      </Layout>
    </div>
  )
}

export default Employees