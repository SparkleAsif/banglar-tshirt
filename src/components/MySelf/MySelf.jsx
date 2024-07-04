import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ring}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <div className='border border-orange-400 p-3 m-3'>
                 <Special ring={ring}></Special>
            </div>

        </div>
    );
};

export default MySelf;