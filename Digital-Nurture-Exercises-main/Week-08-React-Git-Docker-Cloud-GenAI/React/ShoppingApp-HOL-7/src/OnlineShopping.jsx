import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
    render() {
        const items = [
            { Itemname: "Laptop", Price: 75000 },
            { Itemname: "Smartphone", Price: 45000 },
            { Itemname: "Headphones", Price: 3500 },
            { Itemname: "Smartwatch", Price: 12000 },
            { Itemname: "Keyboard", Price: 2500 }
        ];

        return (
            <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '40px auto' }}>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                    <div style={{ backgroundColor: '#2b6cb0', padding: '20px', textAlign: 'center' }}>
                        <h2 style={{ color: 'white', margin: 0, fontSize: '24px' }}>Online Shopping Portal</h2>
                    </div>
                    <div style={{ padding: '20px', backgroundColor: 'white' }}>
                        <h3 style={{ color: '#4a5568', marginTop: 0, marginBottom: '20px' }}>Items in Your Cart</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#edf2f7' }}>
                                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #cbd5e0', color: '#2d3748' }}>Item Name</th>
                                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #cbd5e0', color: '#2d3748' }}>Price (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <Cart key={index} Itemname={item.Itemname} Price={item.Price} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default OnlineShopping;
