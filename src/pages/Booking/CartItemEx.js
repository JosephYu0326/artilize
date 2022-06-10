import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { display } from '@mui/system'
import { shoppingListEx } from './Cart-ex'

let storage = localStorage

function CartItemEx(props) {
  const {
    title,
    start,
    end,
    buyTime,
    image,
    category,
    price,
    count,
    setExCount,
    handleDelete,
  } = props

  return (
    <>
      <div className="cart-card-frame">
        <div className="cart-card-left">
          <button className="trash-btn">
            <FontAwesomeIcon
              className="trash"
              icon={faTrashAlt}
              onClick={handleDelete}
            />
          </button>
          <div className="exhibition-img-frame">
            <img
              src={`${process.env.REACT_APP_API_URL}/stylesheets/images/${image}`}
              className="exhibition-img mx-2"
              alt={image}
            />
          </div>

          <div className="cart-content">
            <div>{title}</div>
            <div className="date-frame">
              <div>{start}</div>
              <div>~</div>
              <div>{end}</div>
            </div>
            <div className="buy-time">購買日期:{buyTime}</div>
          </div>
        </div>
        <div className="cart-card-right">
          <div className="ticket-kind">
            <div>{category}</div>
            <div>${price}</div>
          </div>
          <div className="count">
            <button
              className="btn count-btn"
              onClick={() => {
                setExCount(count + 1)
              }}
            >
              +
            </button>
            <div className="mx-2 cart-count">{count}</div>
            <button
              className="btn count-btn"
              onClick={() => {
                if (count - 1 >= 1) {
                  setExCount(count - 1)
                }
              }}
            >
              -
            </button>
          </div>
          <div className="total">
            <div>小計</div>
            <div className="total-text">${count * price}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItemEx
