import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmatic.css'

const Cosmatic = (props) => {
    const {name, price, _id} = props.cosmatic

    const fakeData = () => addToDb(_id);

    const removeFromCart = () => {
        removeFromDb(_id)
    }

    return (
        <div className='cosmatic'>
            <h2>Buy this: {name}</h2>
            <h3>Price only for: ${price}</h3>
            <h4><small>It's Id: {_id}</small></h4>
            <button style={{border: '1px solid black'}} onClick={fakeData}>Add to cart</button>
            <button style={{border: '1px solid black', marginLeft: '10px'}} onClick={() => removeFromCart(_id)}>Remove item from cart</button>
            {/* <button onClick={() => addToCart(_id)}>Add to cart</button> */}
        </div>
    );
};

export default Cosmatic;