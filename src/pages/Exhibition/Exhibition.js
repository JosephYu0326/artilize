//展覽
import React from 'react'
import { Link } from 'react-router-dom'

function Exhibition(props) {
  
  return (
    <>
      <div>展覽</div>
      <Link to="/exhibition/mapsearch">展覽地圖搜尋</Link>
      <br />
      <Link to="/booking/cart">購物車</Link>
      <br />
      
    </>
  )
}

export default Exhibition
