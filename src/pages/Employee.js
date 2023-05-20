import EmployeeList from "../EmployeeList";
import React, { useState } from "react";


export default function Employee() {
   const [selectedEmployee, setSelectedEmployee] = useState(null);
   const [searchEmployee, setSearchEmployee] = useState("");

  // click each employye to get information
  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };
// back to the page 
  const handleClosePopup = () => {
    setSelectedEmployee(null);
  };
  //search the employee
  const handleSearchChange = (event) => {
    setSearchEmployee(event.target.value);
  };
  //show the employee meet the search 
  const filteredEmployees = EmployeeList.filter((employee) =>
  employee.name.toLowerCase().includes(searchEmployee.toLowerCase())
);
  return (
    <div className="main">
    <div className="employeeDir">
          <h2>Employee Directory</h2>
          <input className="search" type="text" placeholder="Search employee" value={searchEmployee} onChange={handleSearchChange}/>
        <table>
        <tbody>
            <div className="allnames"> 
            {filteredEmployees.map((employee) => {
            return (
              <tr className="rows" key={employee.name}>
               <td onClick={() => handleEmployeeClick(employee)}> <img src={require(`../images/${employee.img}`)} alt="" />
                <p className="onclick"><strong>{employee.name}</strong></p>
                {employee.title}
                </td>
              </tr>
            );
          })}
            </div>
        </tbody>
      </table>
      
      {selectedEmployee && (
        <div className="show">
 <h2 className="back" onClick={handleClosePopup}> &larr; Employee</h2>
        <div className="info">
        <img src={require(`../images/${selectedEmployee.img}`)} alt="" />
         <h3><strong>{selectedEmployee.name}</strong></h3>
         <p>{selectedEmployee.title}</p><br></br><br></br>
     
         <p><strong>Call Office</strong></p>
            <p>{selectedEmployee.call}</p>
         <p><strong>Call mobile</strong></p>
          <p>  {selectedEmployee.mobile}</p>
         <p>SMS</p>
            <p><strong>{selectedEmployee.sms}</strong></p>
         <p>Email</p>
            <p><strong> {selectedEmployee.email}</strong></p>
           
         </div>
        </div>
       
        )}
    </div>
    </div>
  
  );
}

