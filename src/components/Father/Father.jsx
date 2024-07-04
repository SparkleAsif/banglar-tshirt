import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <div  className='border m-3 border-orange-400 p-5'>
                   <MySelf ring={ring}></MySelf>
                </div>
                <div className='border m-3 border-orange-400 p-5'>
                   <Brother ></Brother>
                </div>
                <div className='border m-3 border-orange-400 p-5'>
                    <Sister ></Sister>
                </div>
            </section>
        </div>
    );
};

export default Father;