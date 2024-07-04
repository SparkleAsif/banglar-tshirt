import React from 'react';

const TShirt = ({tshirt , handleAddToCart }) => {
    const{picture, name ,price}= tshirt;
    return (
        <div className='t-shirt border border-blue-500 rounded-lg p-3 items-center justify-center'>
            <img src={picture} className=' h-[250px] w-full rounded-lg '  alt="" />
            <p>{name}</p>
            <p>${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)} >Buy Now</button>
        </div>
    );
};

export default TShirt;