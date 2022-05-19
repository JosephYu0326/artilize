import React from 'react'
import { Link } from 'react-router-dom'

import MobileOptionBtn from './MobileOptionBtn'
import Category from './Category'
import Gallery from './Gallery'
import Location from './Location'
import Price from './Price'
import DateTime from './DateTime'
import SearchBar from '../../component/SearchBar'

function MobileNavbar() {
  return (
    <>
      <form className="searchmargin">
        <SearchBar />
      </form>
      <div className="mobileoption-frame">
        <div className="mobileoption">
          {/* 地圖 */}
          <button className="btn btn-light rounded-pill mobile-option-btn">
            <Link className="selectlink" to="/exhibition/mapsearch">
              地圖
            </Link>
          </button>
          {/* 價錢＄ */}
          <div>
            <button
              className="btn btn-light rounded-pill mobile-option-btn"
              onClick={mobilewindow}
            >
              價錢
            </button>
            <div className="mobilewindow">
              <div className="window-off">
                <div className="window-background">
                  <div className="d-flex mobileframe">
                    <Price />

                    <MobileOptionBtn />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 日期 */}
          <div>
            <button
              className="btn btn-light rounded-pill mobile-option-btn"
              onClick={mobilewindow}
            >
              日期
            </button>
            <div className="mobilewindow">
              <div className="window-off">
                <div className="window-background">
                  <div className="d-flex mobileframe">
                    <DateTime />

                    <MobileOptionBtn />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 類別 */}
          <div>
            <button
              className="btn btn-light rounded-pill mobile-option-btn"
              onClick={mobilewindow}
            >
              類別
            </button>
            <div className="mobilewindow">
              <div className="window-off">
                <div className="window-background">
                  <div className="d-flex mobileframe">
                    <Category />
                    <MobileOptionBtn />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 館所 */}
          <div>
            <button
              className="btn btn-light rounded-pill mobile-option-btn"
              onClick={mobilewindow}
            >
              館所
            </button>
            <div className="mobilewindow">
              <div className="window-off">
                <div className="window-background">
                  <div className="d-flex mobileframe">
                    <Gallery />

                    <MobileOptionBtn />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 區域 */}
          <div>
            <button
              className="btn btn-light rounded-pill mobile-option-btn"
              onClick={mobilewindow}
            >
              區域
            </button>
            <div className="mobilewindow">
              <div className="window-off">
                <div className="window-background">
                  <div className="d-flex mobileframe">
                    <Location />

                    <MobileOptionBtn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function mobilewindow(e) {
  let thetarget = e.target.parentNode.childNodes[1].firstChild
  thetarget.setAttribute('class', 'window-on')
}

export default MobileNavbar
