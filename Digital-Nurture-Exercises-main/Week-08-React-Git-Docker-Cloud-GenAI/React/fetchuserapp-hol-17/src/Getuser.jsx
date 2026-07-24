import React, { Component } from 'react';

class Getuser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        // Fetch random user details from the API
        fetch("https://api.randomuser.me/")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                return response.json();
            })
            .then(data => {
                const user = data.results[0];
                this.setState({ user: user, loading: false });
            })
            .catch(error => {
                this.setState({ error: error.message, loading: false });
            });
    }

    render() {
        const { user, loading, error } = this.state;

        if (loading) {
            return (
                <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif', color: '#666' }}>
                    <h3>Loading user details...</h3>
                </div>
            );
        }

        if (error) {
            return (
                <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif', color: '#e53e3e' }}>
                    <h3>Error: {error}</h3>
                </div>
            );
        }

        const { name, picture, email } = user;

        return (
            <div style={{ 
                border: '1px solid #e2e8f0', 
                padding: '30px', 
                borderRadius: '16px', 
                maxWidth: '350px', 
                margin: '40px auto', 
                textAlign: 'center', 
                backgroundColor: '#ffffff', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                fontFamily: 'sans-serif' 
            }}>
                <h2 style={{ color: '#2d3748', borderBottom: '1px solid #edf2f7', paddingBottom: '12px', marginTop: 0 }}>Random User</h2>
                
                <div style={{ margin: '20px 0' }}>
                    <img 
                        src={picture.large} 
                        alt="Random User" 
                        style={{ width: '120px', height: '120px', borderRadius: '50%', border: '4px solid #cbd5e0', objectFit: 'cover' }}
                    />
                </div>

                <div style={{ textAlign: 'left', padding: '10px 20px', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
                    <p style={{ margin: '8px 0', color: '#4a5568' }}><strong>Title:</strong> {name.title}</p>
                    <p style={{ margin: '8px 0', color: '#4a5568' }}><strong>First Name:</strong> {name.first}</p>
                    <p style={{ margin: '8px 0', color: '#4a5568' }}><strong>Last Name:</strong> {name.last}</p>
                    <p style={{ margin: '8px 0', color: '#718096', fontSize: '13px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}><strong>Email:</strong> {email}</p>
                </div>

                <button 
                    onClick={() => window.location.reload()}
                    style={{ 
                        marginTop: '20px', 
                        padding: '10px 20px', 
                        backgroundColor: '#3182ce', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '6px', 
                        cursor: 'pointer', 
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s'
                    }}
                    onMouseOver={e => e.target.style.backgroundColor = '#2b6cb0'}
                    onMouseOut={e => e.target.style.backgroundColor = '#3182ce'}
                >
                    Refresh User
                </button>
            </div>
        );
    }
}

export default Getuser;
