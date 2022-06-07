import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MobileOptionBtn from './MobileOptionBtn'
import Category from './Category'
import Gallery from './Gallery'
import Location from './Location'
import Price from './Price'
import DateTime from './DateTime'
import SearchBar from '../../component/SearchBar'

function MobileNavbar(props) {
  const {
    search,
    setSearch,
    setSearchData,
    setLowPrice,
    lowPrice,
    setHighPrice,
    highPrice,
    setPriceSearch,
    setSearchDate,
    setSearchGallery,
    setSearchCategory,
    setSearchLocation,
  } = props

  const [datas, setDatas] = useState([])
  const [priceSubmit, setPriceSubmit] = useState(false)

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/exhibition`)
    const results = await response.json()
    setDatas(results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    let temp = datas.filter(
      (v, i) => v.aName.includes(search) || v.mName.includes(search)
    )
    setSearchData(temp)
  }

  return (
    <>
      <form className="searchmargin" onSubmit={handleSubmit}>
        <SearchBar setSearch={setSearch} />
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
                    <Price
                      setLowPrice={setLowPrice}
                      lowPrice={lowPrice}
                      setHighPrice={setHighPrice}
                      highPrice={highPrice}
                      setPriceSearch={setPriceSearch}
                      priceSubmit={priceSubmit}
                      setPriceSubmit={setPriceSubmit}
                    />

                    <MobileOptionBtn setPriceSubmit={setPriceSubmit} />
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
                    <DateTime setSearchDate={setSearchDate} />

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
                    <Gallery setSearchGallery={setSearchGallery} />

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
                    <Category setSearchCategory={setSearchCategory} />
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
                    <Location setSearchLocation={setSearchLocation} />

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
