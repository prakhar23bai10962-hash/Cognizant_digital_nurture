import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import EmployeesList from './EmployeesList';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ 
        backgroundColor: theme === 'light' ? '#f7fafc' : '#1a202c', 
        minHeight: '100vh', 
        padding: '40px 20px', 
        fontFamily: 'sans-serif',
        color: theme === 'light' ? '#2d3748' : '#fff',
        transition: 'all 0.2s'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ margin: '0 0 10px 0' }}>Apps Centric Solutions</h1>
          <p style={{ color: theme === 'light' ? '#718096' : '#a0aec0' }}>Employee Directory Dashboard (Context API Theme Integration)</p>
          <div style={{ margin: '20px 0' }}>
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              style={{
                padding: '10px 20px',
                fontSize: '15px',
                fontWeight: 'bold',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: theme === 'light' ? '#2d3748' : '#e2e8f0',
                color: theme === 'light' ? '#fff' : '#1a202c',
                transition: 'all 0.2s'
              }}
            >
              Toggle theme context (Current: {theme})
            </button>
          </div>
          <hr style={{ borderColor: theme === 'light' ? '#e2e8f0' : '#4a5568', margin: '30px 0' }} />
          <EmployeesList />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
