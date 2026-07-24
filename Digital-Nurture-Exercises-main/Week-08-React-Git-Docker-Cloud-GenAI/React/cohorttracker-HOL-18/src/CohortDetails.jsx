import React from 'react';

function CohortDetails({ cohort }) {
    if (!cohort) return null;
    return (
        <div className="cohort-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', margin: '10px' }}>
            <h3>{cohort.code}</h3>
            <p><strong>Name:</strong> {cohort.name}</p>
            <p><strong>Start Date:</strong> {cohort.startDate}</p>
            <p><strong>End Date:</strong> {cohort.endDate}</p>
            <p><strong>Status:</strong> {cohort.status}</p>
        </div>
    );
}

export default CohortDetails;
