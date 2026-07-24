import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './TrainersList';
import TrainerDetails from './TrainerDetails';
import TrainersMock from './TrainersMock';

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ 
          backgroundColor: '#1a365d', 
          padding: '15px 25px', 
          borderRadius: '8px', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{ color: 'white', margin: 0, fontSize: '22px' }}>Academy Trainers portal</h1>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>Home</Link>
            <Link to="/trainers" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>Trainers</Link>
          </nav>
        </header>

        <main style={{ marginTop: '30px', padding: '10px 20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainers" element={<TrainersList trainers={TrainersMock} />} />
            <Route path="/trainers/:id" element={<TrainerDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
