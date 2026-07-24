import React, { Component } from 'react';

class CountPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entrycount: 0,
            exitcount: 0
        };
    }

    // Displays and updates entry count
    UpdateEntry = () => {
        this.setState(prevState => ({
            entrycount: prevState.entrycount + 1
        }));
    }

    // Displays and updates exit count
    UpdateExit = () => {
        this.setState(prevState => ({
            exitcount: prevState.exitcount + 1
        }));
    }

    render() {
        return (
            <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '40px auto', border: '1px solid #ddd', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center', backgroundColor: '#fff' }}>
                <h2 style={{ color: '#2c3e50', marginBottom: '24px' }}>Mall Footfall Tracker</h2>
                
                <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '24px' }}>
                    <div style={{ padding: '15px', backgroundColor: '#ebf8ff', borderRadius: '8px', width: '130px' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#2b6cb0' }}>Entries</h4>
                        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2d3748' }}>{this.state.entrycount}</span>
                        <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#718096' }}>people entered</p>
                    </div>

                    <div style={{ padding: '15px', backgroundColor: '#fff5f5', borderRadius: '8px', width: '130px' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#c53030' }}>Exits</h4>
                        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2d3748' }}>{this.state.exitcount}</span>
                        <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#718096' }}>people exited</p>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <button 
                        onClick={this.UpdateEntry} 
                        style={{ padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', color: 'white', backgroundColor: '#3182ce', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'background-color 0.2s' }}
                        onMouseOver={e => e.target.style.backgroundColor = '#2b6cb0'}
                        onMouseOut={e => e.target.style.backgroundColor = '#3182ce'}
                    >
                        Login
                    </button>
                    <button 
                        onClick={this.UpdateExit} 
                        style={{ padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', color: 'white', backgroundColor: '#e53e3e', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'background-color 0.2s' }}
                        onMouseOver={e => e.target.style.backgroundColor = '#c53030'}
                        onMouseOut={e => e.target.style.backgroundColor = '#e53e3e'}
                    >
                        Exit
                    </button>
                </div>
            </div>
        );
    }
}

export default CountPeople;
