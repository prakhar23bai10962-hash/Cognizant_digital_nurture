import React, { useState } from 'react';

function Register() {
    const [formValues, setFormValues] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateField = (fieldName, value) => {
        let errorMsg = '';
        if (fieldName === 'name') {
            if (value.trim().length < 5) {
                errorMsg = 'Name should have at least 5 characters';
            }
        } else if (fieldName === 'email') {
            if (!value.includes('@') || !value.includes('.')) {
                errorMsg = 'Email should contain both "@" and "."';
            }
        } else if (fieldName === 'password') {
            if (value.length < 8) {
                errorMsg = 'Password should have at least 8 characters';
            }
        }

        setErrors(prevErrors => ({ ...prevErrors, [fieldName]: errorMsg }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform final check on all fields
        const finalErrors = {};
        if (formValues.name.trim().length < 5) {
            finalErrors.name = 'Name should have at least 5 characters';
        }
        if (!formValues.email.includes('@') || !formValues.email.includes('.')) {
            finalErrors.email = 'Email should contain both "@" and "."';
        }
        if (formValues.password.length < 8) {
            finalErrors.password = 'Password should have at least 8 characters';
        }

        setErrors(finalErrors);

        // Check if any error messages exist
        const hasErrors = Object.values(finalErrors).some(error => error !== '');
        if (!hasErrors) {
            setSubmitted(true);
            alert("Registration successful!");
        } else {
            setSubmitted(false);
        }
    };

    return (
        <div style={{ border: '1px solid #cbd5e0', padding: '30px', borderRadius: '12px', maxWidth: '400px', margin: '40px auto', backgroundColor: '#fff', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontFamily: 'sans-serif' }}>
            <h2 style={{ color: '#2d3748', borderBottom: '2px solid #edf2f7', paddingBottom: '12px', marginTop: 0, textAlign: 'center' }}>Mail Registration Form</h2>
            
            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                
                {/* Name Field */}
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold', color: '#4a5568' }}>Name:</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '6px', border: errors.name ? '1px solid #e53e3e' : '1px solid #cbd5e0', outline: 'none' }}
                    />
                    {errors.name && <span style={{ color: '#e53e3e', fontSize: '13px', marginTop: '5px', display: 'block' }}>{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold', color: '#4a5568' }}>Email:</label>
                    <input 
                        type="text" 
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '6px', border: errors.email ? '1px solid #e53e3e' : '1px solid #cbd5e0', outline: 'none' }}
                    />
                    {errors.email && <span style={{ color: '#e53e3e', fontSize: '13px', marginTop: '5px', display: 'block' }}>{errors.email}</span>}
                </div>

                {/* Password Field */}
                <div style={{ marginBottom: '25px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold', color: '#4a5568' }}>Password:</label>
                    <input 
                        type="password" 
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '6px', border: errors.password ? '1px solid #e53e3e' : '1px solid #cbd5e0', outline: 'none' }}
                    />
                    {errors.password && <span style={{ color: '#e53e3e', fontSize: '13px', marginTop: '5px', display: 'block' }}>{errors.password}</span>}
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    style={{ width: '100%', padding: '12px', backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', transition: 'background-color 0.2s' }}
                    onMouseOver={e => e.target.style.backgroundColor = '#2b6cb0'}
                    onMouseOut={e => e.target.style.backgroundColor = '#3182ce'}
                >
                    Submit
                </button>

            </form>

            {submitted && (
                <div style={{ marginTop: '25px', padding: '12px', backgroundColor: '#c6f6d5', color: '#22543d', borderRadius: '6px', fontWeight: 'bold', textAlign: 'center', border: '1px solid #38a169' }}>
                    Registration details saved!
                </div>
            )}
        </div>
    );
}

export default Register;
