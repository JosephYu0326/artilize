//展覽

import React, { useState } from 'react'
import { useEffect } from 'react'
import DatePicker from 'react-datepicker'
import Slider from '@mui/material/Slider'

import 'react-rangeslider/lib/index.css'
import 'react-datepicker/dist/react-datepicker.css'

import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'

import '../../styles/exhibition-list.scss'
import '../../styles/style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import SearchBar from '../../component/SearchBar'


import exhibitionimg from './images/exhibition1.jpeg'

function Exhibition(props) {
  const [value, setValue] = useState([20, 800])

  const cards = ['1', '2', '3', '4', '5', '6']

  const areas = ['北部', '中部', '南部', '東部', '離島']
  const areasObject = {
    0: ['臺北市', '新北市', '基隆市', '新竹市', '桃園市', '新竹縣', '宜蘭縣'],
    1: ['臺中市', '苗栗縣', '彰化縣', '南投縣', '雲林縣'],
    2: ['高雄市', '臺南市', '嘉義市', '嘉義縣', '屏東縣', '澎湖縣'],
    3: ['花蓮縣', '台東縣'],
    4: ['金門縣', '連江縣'],
  }

  const categories = {
    0: ['古董文物', '油畫', '雕塑', '攝影'],
    1: ['古董文物', '油畫', '雕塑', '攝影', '水彩', '書法'],
  }
  const galleries = {
    0: ['故宮博物院', '台北市立美術館', '台北當代藝術館', '奇美博物館'],
    1: [
      '故宮博物院',
      '台北市立美術館',
      '台北當代藝術館',
      '奇美博物館',
      '高雄市立美術館',
      '台中市立美術館',
      '台南市立美術館',
    ],
  }

  const [categoryAngle, setCategoryAngle] = useState(0)
  const [categoryIcon, setCategoryIcon] = useState('block')
  const [categoryState, setCategoryState] = useState(categories[0])

  const [galleryAngle, setGalleryAngle] = useState(0)
  const [galleryIcon, setGalleryIcon] = useState('block')
  const [galleryState, setGalleryState] = useState(galleries[0])

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const imgurl = {
    backgroundImage: `url(${exhibitionimg})`,
  }

  const categoryicon1 = {
    height: '20px',
    width: '5px',
    background: 'black',
    transform: `rotate(${categoryAngle}deg)`,
    transition: '0.3s',
  }

  const categoryicon2 = {
    height: '20px',
    width: '5px',
    background: 'black',
    transform: 'rotate(90deg)',
    position: 'absolute',
    transition: '0.3s',
    display: `${categoryIcon}`,
  }

  const galleryicon1 = {
    height: '20px',
    width: '5px',
    background: 'black',
    transform: `rotate(${galleryAngle}deg)`,
    transition: '0.3s',
  }

  const galleryicon2 = {
    height: '20px',
    width: '5px',
    background: 'black',
    transform: 'rotate(90deg)',
    position: 'absolute',
    transition: '0.3s',
    display: `${galleryIcon}`,
  }

  const [testHeight, setTestHeight] = useState(200)

  const categoryOption = {
    height: `${testHeight}px`,
    transition: 'height 0.4s cubic-bezier(0.1, 0.4, 0.4, 0.1)',
  }

  const card = cards.map((v, i) => {
    return (
      <div key={i}>
        <div className="col d-flex justify-content-center">
          <div className="exhibitioncard d-flex BoxShadow">
            <Link to="/exhibition/introduce" className="imgframe-link">
              <div style={imgurl} className="imgframe"></div>
            </Link>
            <div className="d-flex content">
              <div className="title mt-2">
                <Link to="/exhibition/introduce" className="selectlink">
                  <h5 className="titletext text-web pt-2">
                    《掘光而行│洪瑞麟的展覽-{i}
                  </h5>
                </Link>
                <Link to="/exhibition/introduce" className="selectlink">
                  <h6 className="pRegular titletext text-mobile my-2">
                    《掘光而行│洪瑞麟的展覽-{i}
                  </h6>
                </Link>
              </div>
              <div className="date-area-data">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    className="cardicon me-2"
                    icon={faMapMarkerAlt}
                  />
                  <div className="text-web">台北市立美術館</div>
                  <div className="text-mobile pSmall">台北市立美術館</div>
                </div>
                <div className="my-1 d-flex align-items-center">
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

  const category = categoryState.map((v, i) => {
    return (
      <div key={i}>
        <Link to="#" className="selectlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare" id={`option` + i}></div>
            <div>{categoryState[i]}</div>
          </div>
        </Link>
      </div>
    )
  })
  const gallery = galleryState.map((v, i) => {
    return (
      <div key={i}>
        <Link to="#" className="selectlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare"></div>

            <div>{galleryState[i]}</div>
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
                    <Link to="#" className="selectlink" onClick={optionChange}>
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

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function expandCategory(num) {
    let angle = categoryAngle

    if (angle === 0) {
      setCategoryAngle(-90)
      setCategoryIcon('none')
      setCategoryState(categories[1])
      setTestHeight(num)
    } else {
      setCategoryAngle(0)
      setCategoryIcon('block')
      setCategoryState(categories[0])
      setTestHeight(num)
    }
  }
  function testExpand(el) {
    setTestHeight(el)
    console.log(el)
  }
  function expandGallery() {
    let angle = galleryAngle
    if (angle === 0) {
      setGalleryAngle(-90)
      setGalleryIcon('none')
      setGalleryState(galleries[1])
    } else {
      setGalleryAngle(0)
      setGalleryIcon('block')
      setGalleryState(galleries[0])
    }
  }
  useEffect(() => {
    var el = document.querySelector('.categoryOption').scrollHeight
    expandCategory(el)
  }, [])

  return (
    <>
      <header>Exhibition Header</header>
      <div className="d-flex exlist-frame">
        <aside>
          {/* 搜尋列 */}
          <form className="d-flex searchbar">
            <SearchBar />
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
          <div className="d-flex asideframe BoxShadow">
            <div className="d-flex justify-content-between align-items-center">
              <div className="h4 my-0">價錢＄</div>
              {value[0]}~{value[1]}
            </div>
            <Slider
              getAriaLabel={() => 'Temperature'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={2000}
              step={50}
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
                    id="highprice"
                    placeholder="2000"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* 日期 */}
          <div className="asideframe BoxShadow">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="h4 my-0">日期</div>
              <div>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
            </div>
            <div className="d-flex">
              {/* <input type="date" id="datestart" className="dateinput me-1" /> */}
              <DatePicker
                className="dateinput"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              ~
              <DatePicker
                className="dateinput"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={startDate}
              />
              {/* <input type="date" id="dateend" className="dateinput ms-1" /> */}
            </div>
          </div>

          {/* 類別 */}
          <div className="asideframe BoxShadow">
            <div className="d-flex justify-content-between align-items-center">
              <div className="h4 my-0">展覽類別</div>
              <div className="option-expand">
                <Link to="#" className="expand-link" onClick={expandCategory}>
                  <div className="option-expand position-relative d-flex justify-content-center align-items-center">
                    <div style={categoryicon1}></div>
                    <div style={categoryicon2}></div>
                  </div>
                </Link>
              </div>
            </div>

            <div style={categoryOption} className="categoryOption">
              {category}
            </div>
          </div>

          {/* 館所 */}
          <div className="asideframe BoxShadow">
            <div className="d-flex justify-content-between align-items-center">
              <div className="h4 my-0">館所</div>
              <div className="option-expand">
                <Link to="#" className="expand-link" onClick={expandGallery}>
                  <div className="option-expand position-relative d-flex justify-content-center align-items-center">
                    <div style={galleryicon1}></div>
                    <div style={galleryicon2}></div>
                  </div>
                </Link>
              </div>
            </div>
            <div>{gallery}</div>
          </div>

          {/* 地區 */}
          <div className="asideframe BoxShadow">
            <div className="h4 my-0">區域</div>
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
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="h4 my-0">價錢＄</div>
                          {value[0]}~{value[1]}
                        </div>
                        <form>
                          <Slider
                            getAriaLabel={() => 'Temperature'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={0}
                            max={2000}
                            step={50}
                          />
                        </form>

                        <form className="mt-2 position-relative">
                          <div className="justify-content-between align-items-center d-flex">
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
                                id="highprice"
                                placeholder="2000"
                              />
                            </div>
                          </div>
                        </form>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <button
                            className="btn btn-primary rounded-pill window-btn"
                            onClick={closewindow}
                          >
                            確定
                          </button>
                          <button
                            className="btn btn-outline-primary rounded-pill window-btn"
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
                    <div className="window-background">
                      <div className="d-flex mobileframe">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="h4 my-0">日期</div>
                          <div>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                          </div>
                        </div>
                        <div className="d-flex">
                          <input type="date" className="dateinput me-1" />
                          ~
                          <input type="date" className="dateinput ms-1" />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <button
                            className="btn btn-primary rounded-pill window-btn"
                            onClick={closewindow}
                          >
                            確定
                          </button>
                          <button
                            className="btn btn-outline-primary rounded-pill window-btn"
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
                    <div className="window-background">
                      <div className="d-flex mobileframe">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="h4 my-0">展覽類別</div>
                          <div className="option-expand">
                            <Link
                              to="#"
                              className="expand-link"
                              onClick={expandCategory}
                            >
                              <div className="option-expand position-relative d-flex justify-content-center align-items-center">
                                <div style={categoryicon1}></div>
                                <div style={categoryicon2}></div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        <div className="window-size">{category}</div>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <button
                            className="btn btn-primary rounded-pill window-btn"
                            onClick={closewindow}
                          >
                            確定
                          </button>
                          <button
                            className="btn btn-outline-primary rounded-pill window-btn"
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
                    <div className="window-background">
                      <div className="d-flex mobileframe">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="h4 my-0">館所</div>
                          <div className="option-expand">
                            <Link
                              to="#"
                              className="expand-link"
                              onClick={expandGallery}
                            >
                              <div className="option-expand position-relative d-flex justify-content-center align-items-center">
                                <div style={galleryicon1}></div>
                                <div style={galleryicon2}></div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        <div className="window-size">{gallery}</div>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <button
                            className="btn btn-primary rounded-pill window-btn"
                            onClick={closewindow}
                          >
                            確定
                          </button>
                          <button
                            className="btn btn-outline-primary rounded-pill window-btn"
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
                    <div className="window-background">
                      <div className="d-flex mobileframe">
                        <div className="h4 my-0">區域</div>
                        <div className="window-size pt-2">{area}</div>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <button
                            className="btn btn-primary rounded-pill window-btn"
                            onClick={closewindow}
                          >
                            確定
                          </button>
                          <button
                            className="btn btn-outline-primary rounded-pill window-btn"
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
            <div className="row row-cols-xxl-4 row-cols-xl-3 row-cols-2">{card}</div>
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
    thetarget.setAttribute('class', 'selectedsquare')
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

function valuetext(value) {
  return `${value}$`
}

export default Exhibition
