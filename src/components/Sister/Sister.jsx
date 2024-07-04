import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money]=useContext(MoneyContext);
    return (
        <div>
            Sister
            <p><small>grandpa money: {money}</small></p>
        </div>
    );
};

export default Sister;