import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList() {
    const employees = [
        { id: 1, name: "Alice Johnson", position: "Software Engineer", dept: "Engineering" },
        { id: 2, name: "Bob Smith", position: "Product Manager", dept: "Product" },
        { id: 3, name: "Charlie Davis", position: "HR Manager", dept: "HR" }
    ];

    return (
        <div style={{ padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {employees.map(emp => (
                <EmployeeCard 
                    key={emp.id} 
                    name={emp.name} 
                    position={emp.position} 
                    dept={emp.dept} 
                />
            ))}
        </div>
    );
}

export default EmployeesList;
