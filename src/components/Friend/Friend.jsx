import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h2>friend</h2>
            <p>Got <span className='text-cyan-300'>{ring}</span> ring from grandpa </p>
        </div>
    );
};

export default Friend;