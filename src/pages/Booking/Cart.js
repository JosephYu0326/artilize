//購物車
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Cart.scss'
import step1 from './image/step.png'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { shoppingList } from './Cart-ex'
import CartItem from './CartItem'

function Cart(props) {
  const [productsInorder, setProductsInorder] = useState(shoppingList)

  const setCount = (newCount, i) => {
    const newProductsInorder = [...shoppingList]
    newProductsInorder[i].count = newCount < 1 ? 1 : newCount
    setProductsInorder(newProductsInorder)
  }
  const handleDelete = (id) => {
    const newProductsInorder = [...productsInorder].filter((v, i) => {
      return v.id !== id
    })
    setProductsInorder(newProductsInorder)
  }

  return (
    <>
      <header>header</header>
      {/* <Link to="/booking/pay">付款</Link> */}
      <img className="step1" src={step1} alt="step1"></img>
      <div className="cart-frame">
        <div className="cart-option">
          <div>展覽(2)</div>
          <div>商品(1)</div>
        </div>
        <div className="cart-option-line">
          <div className="cart-option-color select"></div>
          <div className="cart-option-color"></div>
        </div>
      </div>
      <div className="cart-content-frame">
        <div className="cart-option-title">
          <div className="exhibition-title">展覽名稱</div>
          <div className="cart-title-other">
            <div className="style">票種</div>
            <div className="style">數量</div>
            <div className="style">小計</div>
          </div>
        </div>
        {productsInorder.map((v, i) => {
          return (
            <CartItem
              key={v.id}
              id={v.id}
              title={v.title}
              date={v.date}
              category={v.category}
              price={v.price}
              image={v.image}
              count={v.count}
              handleDelete={() => {
                handleDelete(v.id)
              }}
              setCount={(newCount) => {
                setCount(newCount, i)
              }}
            />
          )
        })}

        <div className="input-frame">
          <div>使用優惠券</div>
          <input type="text" className="form-control" placeholder="優惠券" />
        </div>
        <div className="bottom-frame">
          <div className="total-frame">
            <div>小計</div>
            <div>$120</div>
          </div>
          <div className="total-frame">
            <div>優惠券折扣</div>
            <div>-$10</div>
          </div>
          <div className="total-line"></div>
          <div className="total-frame">
            <div className="final-total">總金額</div>
            <div className="final-total-text">$110</div>
          </div>
          <button className="btn btn-primary rounded-pill next-step-btn">
            下一步
          </button>
        </div>
      </div>
    </>
  )
}

export default Cart
