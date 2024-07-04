import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children, hasFriend , ring}) => {

    return (
        <div>
            <h2>Cousin </h2>
            <p><small>{children}</small></p>
            {
                hasFriend && 
                <div className='border border-orange-400 p-3'>
                <Friend ring={ring}></Friend>
                </div>
            }
        </div>
    );
};

export default Cousin;