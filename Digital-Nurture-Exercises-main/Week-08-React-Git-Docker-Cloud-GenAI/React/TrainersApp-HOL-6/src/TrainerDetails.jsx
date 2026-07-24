import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TrainersMock from './TrainersMock';

function TrainerDetails() {
    const { id } = useParams();
    const trainer = TrainersMock.find(t => String(t.TrainerId) === String(id));

    if (!trainer) {
        return (
            <div style={{ padding: '20px', textAlign: 'left' }}>
                <h3>Trainer not found!</h3>
                <Link to="/trainers" style={{ color: '#2b6cb0', textDecoration: 'none' }}>Back to Trainers List</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', textAlign: 'left', border: '1px solid #e2e8f0', borderRadius: '8px', maxWidth: '450px', margin: '20px 0', backgroundColor: '#f7fafc' }}>
            <h2 style={{ borderBottom: '1px solid #cbd5e0', paddingBottom: '10px', color: '#2d3748' }}>Trainer Details</h2>
            <p><strong>Trainer ID:</strong> {trainer.TrainerId}</p>
            <p><strong>Name:</strong> {trainer.Name}</p>
            <p><strong>Email:</strong> {trainer.Email}</p>
            <p><strong>Phone:</strong> {trainer.Phone}</p>
            <p><strong>Technology:</strong> {trainer.Technology}</p>
            <p><strong>Skills:</strong> {trainer.Skills}</p>
            <div style={{ marginTop: '20px' }}>
                <Link to="/trainers" style={{ color: '#2b6cb0', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Trainers List</Link>
            </div>
        </div>
    );
}

export default TrainerDetails;
