import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MobileOptionBtn from './MobileOptionBtn'
import Category from './Category'
import Gallery from './Gallery'
import Location from './Location'
import Price from './Price'
import DateTime from './DateTime'
import SearchBarEx from '../../component/SearchBarEx'

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
  const [dateSubmit, setDateSubmit] = useState(false)

  const [whichButton, setWhichButton] = useState([0, 0, 0, 0, 0])

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

  function mobilewindow(e) {
    let array = [0, 0, 0, 0, 0]
    let thetarget = e.target.parentNode.childNodes[1].firstChild
    let openWhich = e.target.parentNode.childNodes[0].innerText

    switch (openWhich) {
      case '價錢':
        array[0] = 1
        break
      case '日期':
        array[1] = 1
        break
      case '館所':
        array[2] = 1
        break
      case '類別':
        array[3] = 1
        break
      default:
        array[4] = 1
        break
    }

    setWhichButton(array)

    thetarget.setAttribute('class', 'window-on')
  }

  return (
    <>
      <form className="searchmargin" onSubmit={handleSubmit}>
        <SearchBarEx setSearch={setSearch} />
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

                    <MobileOptionBtn
                      whichButton={whichButton}
                      setPriceSubmit={setPriceSubmit}
                      setDateSubmit={setDateSubmit}
                    />
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
                    <DateTime
                      setSearchDate={setSearchDate}
                      dateSubmit={dateSubmit}
                      setDateSubmit={setDateSubmit}
                    />

                    <MobileOptionBtn
                      whichButton={whichButton}
                      setPriceSubmit={setPriceSubmit}
                      setDateSubmit={setDateSubmit}
                    />
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

                    <MobileOptionBtn
                      whichButton={whichButton}
                      setPriceSubmit={setPriceSubmit}
                      setDateSubmit={setDateSubmit}
                    />
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
                    <MobileOptionBtn
                      whichButton={whichButton}
                      setPriceSubmit={setPriceSubmit}
                      setDateSubmit={setDateSubmit}
                    />
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

                    <MobileOptionBtn
                      whichButton={whichButton}
                      setPriceSubmit={setPriceSubmit}
                      setDateSubmit={setDateSubmit}
                    />
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

export default MobileNavbar
