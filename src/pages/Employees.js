
import Layout from '../components/Layout'
import AddEmployee from '../components/AddEmployee'
import EmployeeList from '../components/EmployeeList'
import { useState } from 'react'

function Employees(props) {
  const [allEmployees, updateAllEmployees] = useState([])

  const addEmployee = (employee) => {
    updateAllEmployees([...allEmployees, employee])
  }

  const deleteEmployee = (id) => {
    updateAllEmployees([...allEmployees].filter((employee)=>employee.id!==id));
  }

  const editEmp = (id, newEmpData) => {
    updateAllEmployees(
      allEmployees.map((employee) => (employee.id === id) ? {...employee, ...newEmpData} : employee)
    )
  }

  return (
    <div>
      <Layout>
        <AddEmployee onAdd={addEmployee} modal={props.modal} setModal={props.setModal} close={props.close}/>
        <EmployeeList allEmployees={allEmployees} onDelete={deleteEmployee} onEdit={editEmp} modal={props.modal} setModal={props.setModal} close={props.close}/>
      </Layout>
    </div>
  )
}

export default Employees