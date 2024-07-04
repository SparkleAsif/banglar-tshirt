import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
                <p className='border border-orange-400'>My grandpa give <span className='text-cyan-300'>{`${ring}`} and {angti}</span></p>
        </div>
    );
};

export default Special;