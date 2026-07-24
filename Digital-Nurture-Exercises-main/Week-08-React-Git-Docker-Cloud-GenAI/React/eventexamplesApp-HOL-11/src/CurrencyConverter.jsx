import React, { useState } from 'react';

function CurrencyConverter() {
    const [inr, setInr] = useState('');
    const [euro, setEuro] = useState(null);

    const handleSubmit = (e) => {
        // Handle form submission using synthetic event
        e.preventDefault();
        const rupees = parseFloat(inr);
        if (!isNaN(rupees)) {
            const converted = (rupees / 90.0).toFixed(2); // Mock rate: 1 Euro = 90 INR
            setEuro(converted);
        } else {
            setEuro(null);
        }
    };

    return (
        <div style={{ border: '1px solid #cbd5e0', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: '20px auto', textAlign: 'left', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#2d3748', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px', marginTop: 0 }}>Currency Converter (INR to Euro)</h3>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#4a5568' }}>Amount in Indian Rupees (INR):</label>
                    <input 
                        type="number" 
                        value={inr} 
                        onChange={(e) => setInr(e.target.value)} 
                        placeholder="Enter Rupees" 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #cbd5e0' }}
                    />
                </div>
                <button 
                    type="submit" 
                    style={{ width: '100%', padding: '10px', backgroundColor: '#38a169', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.2s' }}
                    onMouseOver={e => e.target.style.backgroundColor = '#2f855a'}
                    onMouseOut={e => e.target.style.backgroundColor = '#38a169'}
                >
                    Convert
                </button>
            </form>
            {euro !== null && (
                <div style={{ marginTop: '20px', padding: '12px', backgroundColor: '#f0fff4', border: '1px solid #c6f6d5', borderRadius: '4px', color: '#22543d', fontWeight: 'bold', textAlign: 'center' }}>
                    Equivalent Amount: &euro; {euro}
                </div>
            )}
        </div>
    );
}

export default CurrencyConverter;
