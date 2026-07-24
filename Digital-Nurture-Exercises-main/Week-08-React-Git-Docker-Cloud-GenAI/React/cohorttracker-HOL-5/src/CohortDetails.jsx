import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ code, name, startDate, endDate, status }) {
    const isOngoing = status.toLowerCase() === 'ongoing';
    const headingStyle = {
        color: isOngoing ? 'green' : 'blue'
    };

    return (
        <div className={styles.box}>
            <h3 style={headingStyle}>{name}</h3>
            <dl>
                <dt>Cohort Code</dt>
                <dd>{code}</dd>
                
                <dt>Start Date</dt>
                <dd>{startDate}</dd>
                
                <dt>End Date</dt>
                <dd>{endDate}</dd>
                
                <dt>Status</dt>
                <dd>{status}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;
