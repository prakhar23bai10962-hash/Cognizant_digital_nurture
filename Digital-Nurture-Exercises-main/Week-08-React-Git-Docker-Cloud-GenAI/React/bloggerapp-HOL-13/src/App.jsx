import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState('book'); // 'book' | 'blog' | 'course'
  const [renderMethod, setRenderMethod] = useState('ternary'); // 'ternary' | 'logicalAnd' | 'switchCase'

  // Helper function demonstrating Switch-Case conditional rendering
  const renderWithSwitch = (currentView) => {
    switch (currentView) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return null;
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '30px', backgroundColor: '#f7fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#2d3748', margin: '0 0 10px 0' }}>Blogger Application</h1>
      <p style={{ color: '#718096', margin: '0 0 30px 0' }}>Demonstrating various forms of React Conditional Rendering</p>

      {/* View Selectors */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
        <button 
          onClick={() => setView('book')}
          style={{ padding: '10px 20px', fontSize: '15px', fontWeight: 'bold', color: view === 'book' ? 'white' : '#4a5568', backgroundColor: view === 'book' ? '#2b6cb0' : '#e2e8f0', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Book Details
        </button>
        <button 
          onClick={() => setView('blog')}
          style={{ padding: '10px 20px', fontSize: '15px', fontWeight: 'bold', color: view === 'blog' ? 'white' : '#4a5568', backgroundColor: view === 'blog' ? '#dd6b20' : '#e2e8f0', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Blog Details
        </button>
        <button 
          onClick={() => setView('course')}
          style={{ padding: '10px 20px', fontSize: '15px', fontWeight: 'bold', color: view === 'course' ? 'white' : '#4a5568', backgroundColor: view === 'course' ? '#38a169' : '#e2e8f0', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Course Details
        </button>
      </div>

      {/* Render Method Selectors */}
      <div style={{ marginBottom: '30px', padding: '10px 20px', backgroundColor: '#edf2f7', borderRadius: '8px' }}>
        <span style={{ marginRight: '15px', fontWeight: 'bold', color: '#4a5568' }}>Render Pattern:</span>
        <label style={{ marginRight: '15px', cursor: 'pointer' }}>
          <input 
            type="radio" 
            name="method" 
            checked={renderMethod === 'ternary'} 
            onChange={() => setRenderMethod('ternary')} 
          /> Ternary Operator
        </label>
        <label style={{ marginRight: '15px', cursor: 'pointer' }}>
          <input 
            type="radio" 
            name="method" 
            checked={renderMethod === 'logicalAnd'} 
            onChange={() => setRenderMethod('logicalAnd')} 
          /> Logical AND (&&)
        </label>
        <label style={{ cursor: 'pointer' }}>
          <input 
            type="radio" 
            name="method" 
            checked={renderMethod === 'switchCase'} 
            onChange={() => setRenderMethod('switchCase')} 
          /> Switch-Case Helper
        </label>
      </div>

      {/* Conditional Rendering Area */}
      <div style={{ width: '100%', maxWidth: '500px' }}>
        {/* Method 1: Ternary Operator */}
        {renderMethod === 'ternary' && (
          <div>
            {view === 'book' ? <BookDetails /> : view === 'blog' ? <BlogDetails /> : <CourseDetails />}
          </div>
        )}

        {/* Method 2: Logical AND Operator */}
        {renderMethod === 'logicalAnd' && (
          <div>
            {view === 'book' && <BookDetails />}
            {view === 'blog' && <BlogDetails />}
            {view === 'course' && <CourseDetails />}
          </div>
        )}

        {/* Method 3: Switch Case Helper */}
        {renderMethod === 'switchCase' && (
          <div>
            {renderWithSwitch(view)}
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
