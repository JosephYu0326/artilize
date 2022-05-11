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

  const categories = ['古董文物', '油畫', '雕塑', '攝影', '全部']

  const galleries = [
    '故宮博物院',
    '台北市立美術館',
    '台北當代藝術館',
    '奇美博物館',
    '全部',
  ]
  let card = []
  let category = []
  let gallery = []
  let test = []

  const [optionBd, setOptionBd] = useState('selectsquare')

  for (let i = 0; i <= 4; i++) {
    card.push(
      <div className="col">
        <div className="exhibitioncard d-flex">
          <Link className="imgframe-link">
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
    )
  }

  for (let i = 0; i < categories.length; i++) {
    category.push(
      <Link
        className="optionlink"
        onClick={() => {
          setOptionBd('selectsquare PurpleBlue')
        }}
      >
        <div className="d-flex align-items-center selectframe">
          <div className={optionBd}></div>

          <div>{categories[i]}</div>
        </div>
      </Link>
    )
  }

  for (let i = 0; i < galleries.length; i++) {
    gallery.push(
      <Link className="optionlink">
        <div className="d-flex align-items-center selectframe">
          <div className="selectsquare"></div>

          <div>{galleries[i]}</div>
        </div>
      </Link>
    )
  }

  return (
    <>
      <header>Exhibition Header</header>
      <div className="d-flex">
        <aside>
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
            <div className="d-flex justify-content-between priceinput-frame">
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

            <form className="mt-2">
              <div className="justify-content-between d-flex">
                <div>
                  <label for="lowprice" className="form-label">
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
                  <label for="highprice" className="form-label">
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
            <div className="d-flex justify-content-between priceinput-frame">
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
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="areabar">北部</Accordion.Header>
                <Accordion.Body>
                  <Link className="optionlink">
                    <div className="d-flex align-items-center selectframe">
                      <div className="selectsquare PurpleBlue"></div>
                      <div>台北市</div>
                    </div>
                  </Link>
                  <Link className="optionlink">
                    <div className="d-flex align-items-center selectframe">
                      <div className="selectsquare"></div>
                      <div>新北市</div>
                    </div>
                  </Link>
                  <Link className="optionlink">
                    <div className="d-flex align-items-center selectframe">
                      <div className="selectsquare "></div>
                      <div>基隆市</div>
                    </div>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="areabar">中部</Accordion.Header>
                <Accordion.Body>台中</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className="areabar">南部</Accordion.Header>
                <Accordion.Body>高雄</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className="areabar">東部</Accordion.Header>
                <Accordion.Body>花蓮</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header className="areabar">離島</Accordion.Header>
                <Accordion.Body>澎湖</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </aside>
        <main className="container-fluid">
          <div className="container">
            <div className="row row-cols-xxl-3 row-cols-2 ">{card}</div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Exhibition
