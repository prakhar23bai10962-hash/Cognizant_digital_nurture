import React from 'react';

function CourseDetails() {
    const courses = [
        { id: 1, title: "Full Stack Java Developer", instructor: "Rohan Sharma", duration: "12 Weeks" },
        { id: 2, title: "React Frontend Certification", instructor: "Emily Watson", duration: "6 Weeks" },
        { id: 3, title: "Docker & Kubernetes DevOps", instructor: "Carlos Martinez", duration: "8 Weeks" }
    ];

    return (
        <div style={{ textAlign: 'left', padding: '25px', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <h3 style={{ color: '#38a169', marginTop: 0, borderBottom: '1px solid #edf2f7', paddingBottom: '10px' }}>Certified Courses</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                {courses.map(c => (
                    <li key={c.id}>
                        <strong>{c.title}</strong> led by {c.instructor} &mdash; <span style={{ color: '#4a5568' }}>{c.duration}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseDetails;
