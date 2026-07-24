import React, { useState, useEffect } from 'react';
import GitClient from './GitClient';

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GitClient.getRepositories('techiesyed')
      .then(names => {
        setRepos(names);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#f7fafc', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        border: '1px solid #cbd5e0',
        padding: '30px',
        borderRadius: '12px',
        maxWidth: '450px',
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2d3748', borderBottom: '2px solid #edf2f7', paddingBottom: '12px', marginTop: 0 }}>
          Repositories for techiesyed
        </h2>

        {loading && <p style={{ color: '#718096', fontWeight: 'bold' }}>Loading repositories...</p>}
        {error && <p style={{ color: '#e53e3e', fontWeight: 'bold' }}>Error: {error}</p>}
        
        {!loading && !error && (
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#4a5568' }}>
            {repos.map((repo, idx) => (
              <li key={idx} style={{ marginBottom: '5px' }}>{repo}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
