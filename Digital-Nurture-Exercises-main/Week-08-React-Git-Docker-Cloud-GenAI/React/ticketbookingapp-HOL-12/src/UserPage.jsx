import React from 'react';

function UserPage() {
    const flights = [
        { no: "AI-101", source: "Delhi", dest: "Mumbai", time: "08:00 AM" },
        { no: "6E-202", source: "Bangalore", dest: "Delhi", time: "10:30 AM" },
        { no: "SG-303", source: "Mumbai", dest: "Bangalore", time: "01:15 PM" }
    ];

    const handleBook = (flightNo) => {
        alert(`Successfully booked ticket for flight: ${flightNo}`);
    };

    return (
        <div style={{ textAlign: 'left', padding: '20px', backgroundColor: '#e6fffa', borderRadius: '8px' }}>
            <h3 style={{ color: '#00695c', marginTop: 0 }}>Registered User Portal - Flight Booking</h3>
            <p style={{ color: '#319795', fontWeight: 'bold' }}>* Select a flight to reserve your ticket.</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#81e6d9' }}>
                        <th style={{ padding: '8px', border: '1px solid #4fd1c5', textAlign: 'left', color: '#004d40' }}>Flight No</th>
                        <th style={{ padding: '8px', border: '1px solid #4fd1c5', textAlign: 'left', color: '#004d40' }}>Source</th>
                        <th style={{ padding: '8px', border: '1px solid #4fd1c5', textAlign: 'left', color: '#004d40' }}>Destination</th>
                        <th style={{ padding: '8px', border: '1px solid #4fd1c5', textAlign: 'left', color: '#004d40' }}>Departure</th>
                        <th style={{ padding: '8px', border: '1px solid #4fd1c5', textAlign: 'center', color: '#004d40' }}>Action</th>
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
                                <button 
                                    onClick={() => handleBook(f.no)}
                                    style={{ padding: '6px 12px', backgroundColor: '#319795', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.2s' }}
                                    onMouseOver={e => e.target.style.backgroundColor = '#2c7a7b'}
                                    onMouseOut={e => e.target.style.backgroundColor = '#319795'}
                                >
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

export default UserPage;
