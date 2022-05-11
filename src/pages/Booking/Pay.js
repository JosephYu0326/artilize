//付款
import React from 'react'
import { Link } from 'react-router-dom'

function Pay(props) {
  return (
    <>
      <div>付款</div>
      <Link to="/booking/purchasesuccess">購買完成</Link>
      <br />
    </>
  )
}

export default Pay
