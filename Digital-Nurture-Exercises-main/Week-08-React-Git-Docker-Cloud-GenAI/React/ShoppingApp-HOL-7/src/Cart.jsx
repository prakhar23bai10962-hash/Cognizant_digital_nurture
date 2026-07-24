import React, { Component } from 'react';

class Cart extends Component {
    render() {
        const { Itemname, Price } = this.props;
        return (
            <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{Itemname}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{Price}</td>
            </tr>
        );
    }
}

export default Cart;
