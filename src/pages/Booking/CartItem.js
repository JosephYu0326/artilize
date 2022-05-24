import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function CartItem(props) {
  const {
    id,
    title,
    date,
    category,
    image,
    price,
    count,
    setCount,
    handleDelete,
  } = props

  return (
    <>
      <div className="cart-card-frame">
        <div className="cart-card-left">
          <FontAwesomeIcon
            className="trash"
            icon={faTrashAlt}
            onClick={handleDelete}
          />
          <img
            src={require(`${image}`)}
            className="exhibition-img"
            alt="exhibitionImg"
          />
          <div className="cart-content">
            <div>{title}</div>
            <div className="date-frame">
              <div>{date[0]}</div>
              <div>{date[1]}</div>
              <div className="date-process-icon">~</div>
            </div>
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
                setCount(count + 1)
              }}
            >
              +
            </button>
            <div className="mx-2 cart-count">{count}</div>
            <button
              className="btn count-btn"
              onClick={() => {
                if (count - 1 >= 1) setCount(count - 1)
              }}
            >
              -
            </button>
          </div>
          <div className="total">
            <div>小計</div>
            <div className="total-text">${price}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem