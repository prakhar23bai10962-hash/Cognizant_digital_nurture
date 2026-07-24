import React from 'react';

function BlogDetails() {
    const blogs = [
        { id: 1, title: "Getting Started with React 19", author: "Sarah Jenkins", reads: "1.2k" },
        { id: 2, title: "Mastering CSS Grid & Flexbox", author: "David Miller", reads: "850" },
        { id: 3, title: "A Guide to Node.js Microservices", author: "Amit Patel", reads: "2k" }
    ];

    return (
        <div style={{ textAlign: 'left', padding: '25px', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <h3 style={{ color: '#dd6b20', marginTop: 0, borderBottom: '1px solid #edf2f7', paddingBottom: '10px' }}>Blog Articles</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                {blogs.map(b => (
                    <li key={b.id}>
                        <strong>{b.title}</strong> by {b.author} &mdash; <span style={{ color: '#718096', fontSize: '14px' }}>({b.reads} reads)</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogDetails;
