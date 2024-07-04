import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const[money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>grandpa money: {money}</small></p>
            <button  onClick={()=>setMoney(money+1000)}>send 1000tk</button>
            <section className='flex'>
                <div  className='border border-orange-400 p-3 m-4'>
                    <Cousin>Sumaiya</Cousin>

                </div>
                <div className='border border-orange-400 p-3 m-4'>
                    <Cousin>Jakaria</Cousin>
                </div>
            </section>
        </div>
    );
};

export default Uncle;