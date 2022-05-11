//購物車
import React from 'react'
import { Link } from 'react-router-dom'

function Cart(props) {
  return (
    <>
      <div>購物車</div>
      <Link to="/booking/pay">付款</Link>
      <br />
    </>
  )
}

export default Cart
