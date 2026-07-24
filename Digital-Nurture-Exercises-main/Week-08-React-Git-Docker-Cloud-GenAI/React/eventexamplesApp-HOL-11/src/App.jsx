import React from 'react';
import EventExamples from './EventExamples';
import CurrencyConverter from './CurrencyConverter';

function App() {
  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#1a202c', marginBottom: '40px' }}>React Event Examples</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <EventExamples />
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
