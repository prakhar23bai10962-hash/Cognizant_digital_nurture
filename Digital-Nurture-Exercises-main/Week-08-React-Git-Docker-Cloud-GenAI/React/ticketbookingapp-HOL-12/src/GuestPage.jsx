import React from 'react';

function GuestPage() {
    const flights = [
        { no: "AI-101", source: "Delhi", dest: "Mumbai", time: "08:00 AM" },
        { no: "6E-202", source: "Bangalore", dest: "Delhi", time: "10:30 AM" },
        { no: "SG-303", source: "Mumbai", dest: "Bangalore", time: "01:15 PM" }
    ];

    return (
        <div style={{ textAlign: 'left', padding: '20px', backgroundColor: '#edf2f7', borderRadius: '8px' }}>
            <h3 style={{ color: '#4a5568', marginTop: 0 }}>Guest Portal - Flight Schedules</h3>
            <p style={{ color: '#e53e3e', fontWeight: 'bold' }}>* Please login to book tickets.</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#cbd5e0' }}>
                        <th style={{ padding: '8px', border: '1px solid #a0aec0', textAlign: 'left' }}>Flight No</th>
                        <th style={{ padding: '8px', border: '1px solid #a0aec0', textAlign: 'left' }}>Source</th>
                        <th style={{ padding: '8px', border: '1px solid #a0aec0', textAlign: 'left' }}>Destination</th>
                        <th style={{ padding: '8px', border: '1px solid #a0aec0', textAlign: 'left' }}>Departure</th>
                        <th style={{ padding: '8px', border: '1px solid #a0aec0', textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((f, idx) => (
                        <tr key={idx} style={{ backgroundColor: 'white' }}>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{f.no}</td>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{f.source}</td>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{f.dest}</td>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{f.time}</td>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                                <button disabled style={{ padding: '6px 12px', backgroundColor: '#cbd5e0', color: '#718096', border: 'none', borderRadius: '4px', cursor: 'not-allowed' }}>
                                    Book Now
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GuestPage;
