import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <div  className='border border-orange-400 p-3 m-4'>
                    <Cousin>Sabbir</Cousin>

                </div>
                <div className='border border-orange-400 p-3 m-4' >
                    <Cousin hasFriend={true} ring={ring}>Bokul</Cousin>
                </div>
            </section>
        </div>
    );
};

export default Aunty;