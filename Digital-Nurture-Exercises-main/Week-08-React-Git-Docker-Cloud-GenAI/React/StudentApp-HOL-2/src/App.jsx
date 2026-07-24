import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to Student App</h1>
      <hr />
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App
