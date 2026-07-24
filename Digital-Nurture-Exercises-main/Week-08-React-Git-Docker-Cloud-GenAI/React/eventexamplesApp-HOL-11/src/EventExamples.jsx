import React, { useState } from 'react';

function EventExamples() {
    const [counter, setCounter] = useState(0);

    // Multi-method invocations for Increment
    const increment = () => {
        setCounter(prev => prev + 1);
    };

    const sayHello = () => {
        alert("Hello! This is a static message.");
    };

    const handleIncrementClick = () => {
        increment();
        sayHello();
    };

    const decrement = () => {
        setCounter(prev => prev - 1);
    };

    // Parameterized handler
    const sayWelcome = (message) => {
        alert("Message passed as argument: " + message);
    };

    // Synthetic event handler
    const handlePress = (e) => {
        alert(`Synthetic event trigger - type: ${e.type}. Message: I was clicked`);
    };

    return (
        <div style={{ border: '1px solid #cbd5e0', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: '20px auto', textAlign: 'left', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#2d3748', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px', marginTop: 0 }}>Event Examples</h3>
            
            {/* Section 1: Counter */}
            <div style={{ marginBottom: '20px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#4a5568' }}>1. Counter: {counter}</h4>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        onClick={handleIncrementClick}
                        style={{ padding: '8px 16px', backgroundColor: '#4299e1', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Increment (Multi-Method)
                    </button>
                    <button 
                        onClick={decrement}
                        style={{ padding: '8px 16px', backgroundColor: '#e53e3e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Decrement
                    </button>
                </div>
            </div>

            {/* Section 2: Argument Passing */}
            <div style={{ marginBottom: '20px', borderTop: '1px solid #edf2f7', paddingTop: '15px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#4a5568' }}>2. Parameterized Actions</h4>
                <button 
                    onClick={() => sayWelcome("welcome")}
                    style={{ padding: '8px 16px', backgroundColor: '#ed8936', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    Say Welcome
                </button>
            </div>

            {/* Section 3: Synthetic Event */}
            <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '15px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#4a5568' }}>3. Synthetic Event (onClick/onPress)</h4>
                <button 
                    onClick={handlePress}
                    style={{ padding: '8px 16px', backgroundColor: '#9f7aec', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    Trigger Synthetic Event
                </button>
            </div>
        </div>
    );
}

export default EventExamples;
