//商品
import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {
  return (
    <>
      <div>商品</div>
      <Link to="/product/introduce">商品介紹</Link>
      <br />
      <Link to="/booking/cart">購物車</Link>
      <br />
    </>
  )
}

export default Product
