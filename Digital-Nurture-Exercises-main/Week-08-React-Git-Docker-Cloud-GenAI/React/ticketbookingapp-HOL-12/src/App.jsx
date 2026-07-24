import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function LoginButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{ padding: '10px 20px', backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.2s' }}
      onMouseOver={e => e.target.style.backgroundColor = '#2b6cb0'}
      onMouseOut={e => e.target.style.backgroundColor = '#3182ce'}
    >
      Login
    </button>
  );
}

function LogoutButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{ padding: '10px 20px', backgroundColor: '#e53e3e', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.2s' }}
      onMouseOver={e => e.target.style.backgroundColor = '#c53030'}
      onMouseOut={e => e.target.style.backgroundColor = '#e53e3e'}
    >
      Logout
    </button>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  // Element Variable conditional rendering
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '30px', backgroundColor: '#f7fafc', minHeight: '100vh' }}>
      <header style={{ 
        maxWidth: '800px', 
        margin: '0 auto 30px auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '15px 25px', 
        backgroundColor: 'white', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ margin: 0, color: '#2d3748' }}>Flight Ticket Booking App</h2>
        {button}
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        {isLoggedIn ? <UserPage /> : <GuestPage />}
      </main>
    </div>
  );
}

export default App;
