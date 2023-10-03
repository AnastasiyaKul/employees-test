import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EmployeesList.css';
import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx';

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    axios.get('https://5ca64b8d3a08260014279660.mockapi.io/employees')
      .then(res => {
        setEmployees(res.data)
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  return (
    <>
      {isLoading
        ? <div className="warningText">Loading...</div>
        : error
          ? <div className="warningText redColor">Something went wrong</div>
          : <div className="list">
            {employees.map(employee => {
              return <EmployeeCard employee={employee} key={employee._id} />
            })}
          </div>
      }
    </>
  )
}
