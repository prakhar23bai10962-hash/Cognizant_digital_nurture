import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ name, position, dept }) {
    // Retrieve theme value from context using useContext hook
    const theme = useContext(ThemeContext);

    const buttonStyle = {
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: theme === 'light' ? '#3182ce' : '#1a202c',
        color: 'white',
        transition: 'all 0.2s'
    };

    const cardStyle = {
        border: '1px solid #cbd5e0',
        borderRadius: '8px',
        padding: '20px',
        width: '220px',
        textAlign: 'left',
        backgroundColor: theme === 'light' ? '#ffffff' : '#2d3748',
        color: theme === 'light' ? '#2d3748' : '#fff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        transition: 'all 0.2s'
    };

    return (
        <div style={cardStyle}>
            <h3 style={{ margin: '0 0 10px 0' }}>{name}</h3>
            <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>Position:</strong> {position}</p>
            <p style={{ margin: '5px 0 15px 0', fontSize: '14px' }}><strong>Dept:</strong> {dept}</p>
            {/* Dynamic class determination from Theme Context */}
            <button className={`btn btn-${theme}`} style={buttonStyle}>
                View Profile
            </button>
        </div>
    );
}

export default EmployeeCard;
