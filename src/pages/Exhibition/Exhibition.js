//展覽

import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'

import '../../styles/exhibition.scss'
import '../../styles/style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import exhibitionimg from './images/exhibition1.jpeg'

function Exhibition(props) {
  const imgurl = {
    backgroundImage: `url(${exhibitionimg})`,
  }

  const cards = ['1', '2', '3', '4', '5', '6']

  const categories = ['古董文物', '油畫', '雕塑', '攝影', '全部']

  const galleries = [
    '故宮博物院',
    '台北市立美術館',
    '台北當代藝術館',
    '奇美博物館',
    '全部',
  ]
  const areas = ['北部', '中部', '南部', '東部', '離島']
  const areasObject = {
    0: ['臺北市', '新北市', '基隆市', '新竹市', '桃園市', '新竹縣', '宜蘭縣'],
    1: ['臺中市', '苗栗縣', '彰化縣', '南投縣', '雲林縣'],
    2: ['高雄市', '臺南市', '嘉義市', '嘉義縣', '屏東縣', '澎湖縣'],
    3: ['花蓮縣', '台東縣'],
    4: ['金門縣', '連江縣'],
  }

  const card = cards.map((v, i) => {
    return (
      <div key={i}>
        <div className="col">
          <div className="exhibitioncard d-flex">
            <Link to="#" className="imgframe-link">
              <div style={imgurl} className="imgframe"></div>
            </Link>
            <div className="d-flex content">
              <div className="title mt-2">
                <h5 className="titletext text-web pt-2">
                  《掘光而行│洪瑞麟的展覽-{i}
                </h5>
                <h6 className="pRegular titletext text-mobile my-2">
                  《掘光而行│洪瑞麟的展覽-{i}
                </h6>
              </div>
              <div className="date-area-data">
                <div className="d-flex icon-content">
                  <FontAwesomeIcon
                    className="cardicon me-2"
                    icon={faMapMarkerAlt}
                  />
                  <div className="text-web">台北市立美術館</div>
                  <div className="text-mobile pSmall">台北市立美術館</div>
                </div>
                <div className="my-1 d-flex icon-content">
                  <FontAwesomeIcon
                    className="cardicon me-2"
                    icon={faCalendarAlt}
                  />
                  <div className="text-web">
                    2022-03-19 <br /> 2022-07-31
                  </div>
                  <div className="text-mobile pSmall">
                    2022-03-19 <br /> 2022-07-31
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary book h5 text-web"
              >
                訂票
              </button>
              <button
                type="button"
                className="btn btn-secondary book pRegular text-mobile"
              >
                訂票
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  })

  const category = categories.map((v, i) => {
    return (
      <div key={i}>
        <Link to="#" className="optionlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare" id={`option` + i}></div>
            <div>{categories[i]}</div>
          </div>
        </Link>
      </div>
    )
  })
  const gallery = galleries.map((v, i) => {
    return (
      <div key={i}>
        <Link to="#" className="optionlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare"></div>

            <div>{galleries[i]}</div>
          </div>
        </Link>
      </div>
    )
  })

  const area = areas.map((v, i) => {
    return (
      <div key={i}>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey={i}>
            <Accordion.Header>{areas[i]}</Accordion.Header>
            <Accordion.Body>
              {areasObject[i].map((v, j) => {
                return (
                  <div key={j}>
                    <Link to="#" className="optionlink" onClick={optionChange}>
                      <div className="d-flex align-items-center selectframe">
                        <div className="selectsquare"></div>
                        {areasObject[i][j]}
                      </div>
                    </Link>
                  </div>
                )
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    )
  })

  return (
    <>
      <header>Exhibition Header</header>
      <div className="d-flex theframe">
        <aside className="webaside">
          {/* 搜尋列 */}
          <form className="d-flex searchbar">
            <input
              className="form-control searchinput"
              type="search"
              placeholder="搜尋展覽"
              aria-label="Search"
            />
            <button className="btn searchbtn" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          {/* 地圖搜尋 */}
          <div className="position-relative">
            <img
              src={require('./images/Rectangle 20.png')}
              alt="map"
              className="mapimg"
            />

            <div className="d-flex mapicon-frame position-absolute">
              <FontAwesomeIcon className="mapicon" icon={faMapMarkerAlt} />
            </div>
            <div className="d-flex mapsearch position-absolute">
              <Link
                className="maplink position-absolute"
                to="/exhibition/mapsearch"
              >
                地圖找展覽
              </Link>
            </div>
          </div>

          {/* 價錢 */}
          <div className="d-flex asideframe">
            <div className="d-flex justify-content-between">
              <div className="h4">價錢＄</div>
              <div>0~5000</div>
            </div>
            <input
              type="range"
              className="form-range"
              min="0"
              max="5000"
              step="100"
            />

            <form className="mt-2 position-relative">
              <div className="justify-content-between d-flex">
                <div>
                  <label htmlFor="lowprice" className="form-label">
                    最低
                  </label>
                  <input
                    type="text"
                    className="form-control priceinput"
                    id="lowprice"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label htmlFor="highprice" className="form-label">
                    最高
                  </label>
                  <input
                    type="text"
                    className="form-control priceinput"
                    id="lowprice"
                    placeholder="5000"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* 日期 */}
          <div className="asideframe">
            <div className="d-flex justify-content-between">
              <div className="h4">日期</div>
              <div>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
            </div>
            <div className="d-flex">
              <input type="date" className="dateinput me-1" />
              ~
              <input type="date" className="dateinput ms-1" />
            </div>
          </div>

          {/* 類別 */}
          <div className="asideframe">
            <div className="h4">展覽類別</div>
            <div>{category}</div>
          </div>

          {/* 館所 */}
          <div className="asideframe">
            <div className="h4">館所</div>
            <div>{gallery}</div>
          </div>

          {/* 地區 */}
          <div className="asideframe">
            <div className="h4">區域</div>
            <div>{area}</div>
          </div>
        </aside>

        <nav className="container">
          <form className="d-flex searchbar">
            <div>
              <input
                className="form-control searchinput"
                type="search"
                placeholder="搜尋展覽"
                aria-label="Search"
              />
            </div>
            <button className="btn searchbtn" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <div className="mobileoption-frame">
            <div className="mobileoption">
              {/* 地圖 */}
              <button className="btn btn-light rounded-pill mobile-option-btn">
                <Link className="optionlink" to="/exhibition/mapsearch">
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
                    <div className="window-background window-control-price">
                      <div className="d-flex mobileframe">
                        <div className="d-flex justify-content-between">
                          <div className="h4">價錢＄</div>
                          <div>0~5000</div>
                        </div>
                        <input
                          type="range"
                          className="form-range"
                          min="0"
                          max="5000"
                          step="100"
                        />

                        <form className="mt-2 position-relative">
                          <div className="justify-content-between d-flex">
                            <div>
                              <label htmlFor="lowprice" className="form-label">
                                最低
                              </label>
                              <input
                                type="text"
                                className="form-control priceinput"
                                id="lowprice"
                                placeholder="0"
                              />
                            </div>
                            <div>
                              <label htmlFor="highprice" className="form-label">
                                最高
                              </label>
                              <input
                                type="text"
                                className="form-control priceinput"
                                id="lowprice"
                                placeholder="5000"
                              />
                            </div>
                          </div>
                        </form>
                        <div className="d-flex justify-content-between mt-3">
                          <button
                            className="btn btn-primary rounded-pill mobile-btn"
                            onClick={closewindow}
                          >
                            確定
                          </button>
                          <button
                            className="btn btn-outline-primary rounded-pill mobile-btn"
                            onClick={closewindow}
                          >
                            取消
                          </button>
                        </div>
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
                    <div className="window-background window-control-date">
                      <div className="d-flex mobileframe">
                        <div className="d-flex justify-content-between">
                          <div className="h4">日期</div>
                          <div>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                          </div>
                        </div>
                        <div className="d-flex">
                          <input type="date" className="dateinput me-1" />
                          ~
                          <input type="date" className="dateinput ms-1" />
                        </div>

                        <div className="d-flex justify-content-between mt-3">
                          <button
                            className="btn btn-primary rounded-pill mobile-btn"
                            onClick={closewindow}
                          >
                            確定
                          </button>
                          <button
                            className="btn btn-outline-primary rounded-pill mobile-btn"
                            onClick={closewindow}
                          >
                            取消
                          </button>
                        </div>
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
                    <div className="window-background window-control-category">
                      <div className="d-flex mobileframe">
                        <div className="h4">展覽類別</div>
                        <div>{category}</div>

                        <div className="d-flex justify-content-between mt-3">
                          <button
                            className="btn btn-primary rounded-pill mobile-btn"
                            onClick={closewindow}
                          >
                            確定
                          </button>
                          <button
                            className="btn btn-outline-primary rounded-pill mobile-btn"
                            onClick={closewindow}
                          >
                            取消
                          </button>
                        </div>
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
                    <div className="window-background window-control-gallery">
                      <div className="d-flex mobileframe">
                        <div className="h4">館所</div>
                        <div className="mobile-option-height">{gallery}</div>

                        <div className="d-flex justify-content-between mt-3">
                          <button
                            className="btn btn-primary rounded-pill mobile-btn"
                            onClick={closewindow}
                          >
                            確定
                          </button>
                          <button
                            className="btn btn-outline-primary rounded-pill mobile-btn"
                            onClick={closewindow}
                          >
                            取消
                          </button>
                        </div>
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
                    <div className="window-background window-control-area">
                      <div className="d-flex mobileframe">
                        <div className="h4">區域</div>
                        <div className="mobile-option-height">{area}</div>

                        <div className="d-flex justify-content-between mt-3">
                          <button
                            className="btn btn-primary rounded-pill mobile-btn"
                            onClick={closewindow}
                          >
                            確定
                          </button>
                          <button
                            className="btn btn-outline-primary rounded-pill mobile-btn"
                            onClick={closewindow}
                          >
                            取消
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="container-fluid">
          <div className="container">
            <div className="row row-cols-xxl-3 row-cols-2 ">{card}</div>
          </div>
        </main>
      </div>
    </>
  )
}
function optionChange(e) {
  let thetarget = e.target.parentNode.childNodes[0]
  // 找到該層的 <div class="selectsquare"></div>
  if (thetarget.hasChildNodes()) {
    thetarget = thetarget.childNodes[0]
  }

  let changeicon = thetarget.getAttribute('class')

  if (changeicon === 'selectsquare') {
    thetarget.setAttribute('class', 'selectsquare PurpleBlue')
  } else {
    thetarget.setAttribute('class', 'selectsquare')
  }
}

function mobilewindow(e) {
  let thetarget = e.target.parentNode.childNodes[1].firstChild
  thetarget.setAttribute('class', 'window-on')
}

function closewindow(e) {
  let thetarget = e.target.parentNode.parentNode.parentNode.parentNode
  thetarget.setAttribute('class', 'window-off')
}

export default Exhibition
