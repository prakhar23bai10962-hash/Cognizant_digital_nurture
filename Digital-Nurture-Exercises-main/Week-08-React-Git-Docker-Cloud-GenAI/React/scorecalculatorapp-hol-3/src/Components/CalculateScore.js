import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = (props) => {
    // Casing fallback to support both capitalized and camelCase prop names
    const name = props.Name || props.name || "N/A";
    const school = props.School || props.school || "N/A";
    const total = props.Total || props.total || 0;
    const goal = props.goal || props.Goal || 1; // avoid division by zero

    const average = (total / goal).toFixed(2);

    return (
        <div className="score-calculator">
            <h2 className="title">Student Details</h2>
            <div className="details">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>School:</strong> {school}</p>
                <p><strong>Total Marks:</strong> {total}</p>
                <p><strong>Goal:</strong> {goal}</p>
                <h3 className="average-score">Average Score: {average}</h3>
            </div>
        </div>
    );
};

export default CalculateScore;
