import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function CartItemPro(props) {
  const { id, title, image, price, count, setProCount, handleDelete } = props

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

          <img
            src={`${process.env.REACT_APP_API_URL}/stylesheets/images/${image}`}
            className="exhibition-img"
            alt="exhibitionImg"
            style={{ width: 200, height: 200 }}
          />
          <div className="cart-content">
            <div>{title}</div>
          </div>
        </div>
        <div className="cart-card-right">
          <div className="ticket-kind">
            <div>${price}</div>
          </div>
          <div className="count">
            <button
              className="btn count-btn"
              onClick={() => {
                setProCount(count + 1)
              }}
            >
              +
            </button>
            <div className="mx-2 cart-count">{count}</div>
            <button
              className="btn count-btn"
              onClick={() => {
                if (count - 1 >= 1) setProCount(count - 1)
              }}
            >
              -
            </button>
          </div>
          <div className="total">
            <div>小計</div>
            <div className="total-text">${price * count}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItemPro
