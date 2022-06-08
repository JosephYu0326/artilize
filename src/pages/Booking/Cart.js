//購物車
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Cart.scss'
import step1 from './image/step.png'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { shoppingListEx } from './Cart-ex'
import { shoppingListPro } from './Cart-pro'
import CartItemEx from './CartItemEx'
import CartItemPro from './CartItemPro'
import Header from '../../component/Header'
import Footer from '../../component/Footer'

import Summary from './Summary'

import _ from 'lodash'

let storage = localStorage

function Cart(props) {
  const [exhibitionInorder, setExhibitionInorder] = useState(shoppingListEx)
  const [productInorder, setProductInorder] = useState(shoppingListPro)
  // 設定展覽數
  const setExCount = (newCount, i) => {
    const newExhibitionInorder = [...shoppingListEx]
    newExhibitionInorder[i].count = newCount < 1 ? 1 : newCount
    setExhibitionInorder(newExhibitionInorder)
  }
  // 設定商品數
  const setProCount = (newCount, i) => {
    const newProductInorder = [...shoppingListPro]
    newProductInorder[i].count = newCount < 1 ? 1 : newCount
    setProductInorder(newProductInorder)
  }
  // 展覽總數
  const totalNumberEx = () => {
    let total = 0
    for (let i = 0; i < exhibitionInorder.length; i++) {
      total += 1
    }
    return total
  }
  // 商品總數
  const totalNumberPro = () => {
    let total = 0
    for (let i = 0; i < productInorder.length; i++) {
      total += 1
    }
    return total
  }

  // 展覽總價
  const totalPriceEx = () => {
    let total = 0
    for (let i = 0; i < exhibitionInorder.length; i++) {
      total += exhibitionInorder[i].count * exhibitionInorder[i].TicketPrice
    }
    return total
  }

  // 商品總價
  const totalPricePro = () => {
    let total = 0
    for (let i = 0; i < productInorder.length; i++) {
      total += productInorder[i].count * productInorder[i].price
    }
    return total
  }

  // 展覽刪除
  const handleDeleteEx = (title) => {
    alert('確定要刪除該筆資料嗎？')

    storage['totalNum'] -= 1
    storage.removeItem(title)
    storage['addItemList'] = storage['addItemList'].replace(`${title},`, '')
    const newExhibitionInorder = [...exhibitionInorder].filter((v, i) => {
      return v.title !== title
    })

    setExhibitionInorder(newExhibitionInorder)
  }
  // 商品刪除
  const handleDeletePro = (id) => {
    alert('確定要刪除該筆資料嗎？')
    const newProductInorder = [...productInorder].filter((v, i) => {
      return v.id !== id
    })
    setProductInorder(newProductInorder)
  }

  return (
    <>
      <Header />
      {/* <Link to="/booking/pay">付款</Link> */}
      <img className="step1" src={step1} alt="step1"></img>
      <div className="cart-frame">
        <div className="cart-option">
          <button className="cart-option-btn select" onClick={showExhibition}>
            展覽({totalNumberEx()})
          </button>
          <button className="cart-option-btn" onClick={showProduct}>
            商品({totalNumberPro()})
          </button>
        </div>
      </div>
      <div className="cart-content-frame">
        <div className="cart-option-title">
          <div className="exhibition-title">展覽名稱 / 商品名稱</div>
          <div className="cart-title-other">
            <div className="style">票種 / 價位</div>
            <div className="style">數量</div>
            <div className="style">小計</div>
          </div>
        </div>
        <div className="selectExhibition">
          {exhibitionInorder.map((v, i) => {
            return (
              <CartItemEx
                key={i}
                title={v.title}
                start={v.start}
                end={v.end}
                buyTime={v.buyTime}
                category={v.TicketKind}
                price={v.TicketPrice}
                image={v.image}
                count={v.count}
                handleDelete={() => {
                  handleDeleteEx(v.title)
                }}
                setExCount={(newCount) => {
                  setExCount(newCount, i)
                }}
              />
            )
          })}
        </div>
        <div className="selectProduct">
          {productInorder.map((v, i) => {
            return (
              <CartItemPro
                key={v.id}
                id={v.id}
                title={v.title}
                price={v.price}
                image={v.image}
                count={v.count}
                handleDelete={() => {
                  handleDeletePro(v.id)
                }}
                setProCount={(newCount) => {
                  setProCount(newCount, i)
                }}
              />
            )
          })}
        </div>

        <div className="input-frame">
          <div className="discountText">使用優惠券</div>
          <input type="text" className="form-control" placeholder="優惠券" />
        </div>
        <Summary
          totalPriceEx={totalPriceEx()}
          totalPricePro={totalPricePro()}
        />
      </div>
      <Footer />
    </>
  )
}

function showExhibition() {
  let temp1 = document.querySelector('.selectProduct')
  let temp2 = document.querySelector('.selectExhibition')
  temp1.style.display = 'none'
  temp2.style.display = 'block'
}

function showProduct() {
  let temp1 = document.querySelector('.selectProduct')
  let temp2 = document.querySelector('.selectExhibition')
  temp1.style.display = 'block'
  temp2.style.display = 'none'
}
export default Cart
