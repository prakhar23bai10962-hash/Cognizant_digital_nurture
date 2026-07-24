import React, { useState } from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  // Use state flag to conditionally render components
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center', backgroundColor: '#fcfcfc', minHeight: '100vh' }}>
      <h1>Cricket App</h1>
      <div style={{ margin: '20px 0' }}>
        <button 
          onClick={() => setFlag(!flag)} 
          style={{ 
            padding: '12px 24px', 
            fontSize: '16px', 
            fontWeight: 'bold', 
            color: 'white', 
            backgroundColor: flag ? '#3182ce' : '#319795', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'background-color 0.2s'
          }}
        >
          Toggle Component View (Currently: Flag = {String(flag)})
        </button>
      </div>
      <hr style={{ maxWidth: '600px', margin: '20px auto', borderColor: '#e2e8f0' }} />
      <div style={{ display: 'inline-block', minWidth: '400px' }}>
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </div>
    </div>
  );
}

export default App;
