import React from 'react'

interface Props {
    cartCount: number
}
const Navbar = ({ cartCount}: Props) => {
  return (
      <div>Cart Items { cartCount}</div>
  )
}

export default Navbar