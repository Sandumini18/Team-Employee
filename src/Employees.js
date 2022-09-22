import{useState} from 'react';
import female from './images/female.png';
import male from './images/male.jpg';


const Employees = () => {     
    
    const  [employees, setEmployees] = useState([
        {
            id: 1,
            fullName: "Bob Jones",
            designation: "Javascript Developer",
            gender: "male",
            teamName: "TeamA"
        },
        {
            id: 2,
            fullName: "Jill Baily",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 4,
            fullName: "Sam Reynold",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 5,
            fullName: "David hENRY",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 7,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 8,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 9,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamC"
        },
        {
            id: 10,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 11,
            fullName: "Devin Monroe",
            designation: "Graphic Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 12,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamD"
        },
    ])
    
    return(
        <main className='container' >
            <div class='row justify-content-center mt-3 mb-3'>
                <div class='col-8'>
                    <div className='card-collection'>
                        {
                            employees.map((employees)=>(
                                <div id={employees.id} className='card m-2' style={{cursor:"pointer"}}>
                                    {(employees.gender === 'male')?<img src={male} className='card-img-top'/>
                                                                 :<img src={female} className='card-img-top'/>}
                                    <div className='card-body'>
                                        <h5 className='card-title'>Full Name: {employees.fullName}</h5>
                                        <p className='card-text'><b>Designation:</b>{employees.designation}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Employees;