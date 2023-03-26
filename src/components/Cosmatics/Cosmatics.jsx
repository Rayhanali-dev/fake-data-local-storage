import React, { useState } from 'react';
import { useEffect } from 'react';
import Cosmatic from '../Cosmatic/Cosmatic';

const Cosmatics = () => {
    const [cosmatics, setCosmatics] = useState([]);
    useEffect ( () => {
        fetch ('data.json')
        .then(res => res.json())
        .then(data => setCosmatics(data))
    }, [] )
    return (
        <div>
            <h1>Welcome to my cosmatics store</h1>
            {
                cosmatics.map(cosmatic => <Cosmatic key={cosmatic._id} cosmatic={cosmatic}></Cosmatic>)
            }
        </div>
    );
};

export default Cosmatics;