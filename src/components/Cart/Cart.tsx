import React from 'react'

interface Props {
    cartItems: Array<string>;
    onClear: () => void;
}
const Cart = ({ cartItems, onClear}: Props) => {
  return (
      <div>
          {cartItems.map(item => <li key={item}>{item}</li>)}
          <button onClick={onClear}>Clear</button>
      </div>
      
  )
}

export default Cart