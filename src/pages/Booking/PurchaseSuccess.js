//購買完成
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/PurchaseSuccess.scss'
import progressBar from './image/progressBar.png'

function PurchaseSuccess(props) {
  return (
    <>
      <div>購買完成</div>
      <div className="container ">
        <div className="container allTextStep">
          <div className="row d-flex justify-content-center">
            <div className="col-6 mb-5">
              <img src={progressBar} class="img-fluid" alt="progressBar" />
            </div>
          </div>
        </div>
        <div className="row d-flex justitfy-content-center">
          <div className="col p-0">
            {/* <div className="centerSvg">
              <svg
                width="82"
                height="82"
                viewBox="0 0 82 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M82 41C82 63.6437 63.6437 82 41 82C18.3563 82 0 63.6437 0 41C0 18.3563 18.3563 0 41 0C63.6437 0 82 18.3563 82 41ZM36.2576 62.7092L66.6769 32.2898C67.7098 31.2569 67.7098 29.582 66.6769 28.5491L62.9362 24.8083C61.9032 23.7752 60.2283 23.7752 59.1952 24.8083L34.3871 49.6163L22.8048 38.034C21.7718 37.001 20.0969 37.001 19.0638 38.034L15.3231 41.7747C14.2902 42.8076 14.2902 44.4825 15.3231 45.5155L32.5166 62.709C33.5497 63.7421 35.2245 63.7421 36.2576 62.7092Z"
                  fill="#00B569"
                />
              </svg>
            </div> */}
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ">
            <div className="greeting">
              <h3 className="Regular">感謝您的訂購</h3>
              <h3 className="Regular">訂單明細已寄到您的e-mail</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PurchaseSuccess
