import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>please add some products</p>;
  } else {
    message = (
      <div>
        <h2>Thanks for Purchase</h2>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length >=1? 'bg-teal-600' : 'bg-cyan-400' }>order summary{cart.length}</h2>
      <p className={`font-bold text-4xl text-white ${cart.length ===2? 'bg-slate-500': 'bg-purple-400'}`}>Something</p>
      {cart.length > 2 ? <span className="bg-purple-500 text-white">Aro kino</span> : <span>Fokir</span>}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {" "}
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}> X</button>
        </p>
      ))}
      {cart.length >= 3 && <p>Get 10% Free</p>}
      {cart.length < 3 || <h2>Limit Exceeded</h2>}
    </div>
  );
};

export default Cart;

// conditional rendering
/**
 * 1. use if else to set a variable that will contain an element/ div/ content
 * 2. ternary operator: condition? "for true" : 'false'
 * 3. logical && : (if condition is true then the next thing will be displayed)
 * 4. Logical || (if the condition is false the thing will be displayed)
 * 
 */

/** 
 * Conditional CSS class
 * 1. use ternary 
 * 2. ternary inside template string ``
*/
