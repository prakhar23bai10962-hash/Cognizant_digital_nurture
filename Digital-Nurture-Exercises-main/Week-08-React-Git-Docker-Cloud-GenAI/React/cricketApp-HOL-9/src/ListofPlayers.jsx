import React from 'react';

function ListofPlayers() {
    const players = [
        { name: "Virat Kohli", score: 110 },
        { name: "Rohit Sharma", score: 85 },
        { name: "KL Rahul", score: 45 },
        { name: "Shreyas Iyer", score: 65 },
        { name: "Rishabh Pant", score: 72 },
        { name: "Hardik Pandya", score: 58 },
        { name: "Ravindra Jadeja", score: 90 },
        { name: "Ravichandran Ashwin", score: 35 },
        { name: "Jasprit Bumrah", score: 15 },
        { name: "Mohammed Shami", score: 20 },
        { name: "Bhuvneshwar Kumar", score: 28 }
    ];

    // Filter players with scores >= 70 (filtering out players below 70) using arrow functions
    const eligiblePlayers = players.filter(player => player.score >= 70);

    return (
        <div style={{ textAlign: 'left', padding: '20px', maxWidth: '500px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #edf2f7', paddingBottom: '8px' }}>List of Players</h2>
            
            <h3 style={{ color: '#3182ce', marginTop: '20px' }}>All Players</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                {players.map((player, index) => (
                    <li key={index}>
                        <strong>{player.name}</strong> - Score: {player.score}
                    </li>
                ))}
            </ul>

            <h3 style={{ color: '#38a169', marginTop: '20px' }}>Filtered Players (Score &ge; 70)</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                {eligiblePlayers.map((player, index) => (
                    <li key={index} style={{ color: '#276749' }}>
                        <strong>{player.name}</strong> - Score: {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;
