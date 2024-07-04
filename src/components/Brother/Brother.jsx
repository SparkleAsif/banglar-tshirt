import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring =useContext(RingContext)
    return (
        <div>
            Brother <br />
            {ring}

        </div>
    );
};

export default Brother;