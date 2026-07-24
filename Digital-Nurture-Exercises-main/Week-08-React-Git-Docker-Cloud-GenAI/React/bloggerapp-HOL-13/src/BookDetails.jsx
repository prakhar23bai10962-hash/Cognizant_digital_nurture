import React from 'react';

function BookDetails() {
    const books = [
        { id: 1, name: "The Alchemist", author: "Paulo Coelho", price: 299 },
        { id: 2, name: "Atomic Habits", author: "James Clear", price: 450 },
        { id: 3, name: "Deep Work", author: "Cal Newport", price: 350 }
    ];

    return (
        <div style={{ textAlign: 'left', padding: '25px', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <h3 style={{ color: '#2b6cb0', marginTop: 0, borderBottom: '1px solid #edf2f7', paddingBottom: '10px' }}>Book Catalog</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                {books.map(b => (
                    <li key={b.id}>
                        <strong>{b.name}</strong> by {b.author} &mdash; <span style={{ color: '#4a5568' }}>INR {b.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookDetails;
