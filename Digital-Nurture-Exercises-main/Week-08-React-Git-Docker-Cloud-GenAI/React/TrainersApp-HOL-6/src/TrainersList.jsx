import React from 'react';
import { Link } from 'react-router-dom';

function TrainersList({ trainers }) {
    return (
        <div style={{ padding: '20px', textAlign: 'left' }}>
            <h2>Trainers List</h2>
            <ul style={{ paddingLeft: '20px' }}>
                {trainers.map(trainer => (
                    <li key={trainer.TrainerId} style={{ margin: '10px 0', fontSize: '18px' }}>
                        <Link to={`/trainers/${trainer.TrainerId}`} style={{ color: '#2b6cb0', textDecoration: 'none', fontWeight: '500' }}>
                            {trainer.Name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrainersList;
