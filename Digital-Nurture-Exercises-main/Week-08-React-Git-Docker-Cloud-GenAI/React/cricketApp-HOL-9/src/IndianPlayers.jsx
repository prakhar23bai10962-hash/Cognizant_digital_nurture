import React from 'react';

function IndianPlayers() {
    const indianPlayersList = ["Dhoni", "Kohli", "Rohit", "Rahul", "Jadeja", "Hardik", "Bumrah", "Shami"];

    // Destructuring ES6 feature
    const [first, second, third, fourth, fifth, sixth, seventh, eighth] = indianPlayersList;

    const oddTeam = [first, third, fifth, seventh];
    const evenTeam = [second, fourth, sixth, eighth];

    // Merging ES6 feature
    const T20players = ["Dhoni", "Kohli", "Rohit"];
    const RanjiTrophyPlayers = ["Rahul", "Jadeja", "Bumrah"];
    const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

    return (
        <div style={{ textAlign: 'left', padding: '20px', maxWidth: '500px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #edf2f7', paddingBottom: '8px' }}>Indian Players Details</h2>

            <div style={{ marginTop: '20px' }}>
                <h3 style={{ color: '#dd6b20' }}>Odd Team Players</h3>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                    {oddTeam.map((player, idx) => <li key={idx}><strong>{player}</strong></li>)}
                </ul>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3 style={{ color: '#319795' }}>Even Team Players</h3>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                    {evenTeam.map((player, idx) => <li key={idx}><strong>{player}</strong></li>)}
                </ul>
            </div>

            <div style={{ marginTop: '20px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                <h3 style={{ color: '#805ad5' }}>Merged Squad (T20 &amp; Ranji Trophy)</h3>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                    {mergedPlayers.map((player, idx) => <li key={idx}>{player}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default IndianPlayers;
