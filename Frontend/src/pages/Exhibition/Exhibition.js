//展覽
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import '../../styles/exhibition-list.scss'
import '../../styles/style.scss'

import SearchBarEx from '../../component/SearchBarEx'
import MobileNavbar from './MobileNavbar'
import Category from './Category'
import Gallery from './Gallery'
import Location from './Location'
import Price from './Price'
import Map from './Map'
import DateTime from './DateTime'
import Card from './Card'
import Accordion from '../../component/Accordion'
import Header from '../../component/Header'
import Footer from '../../component/Footer'

function Exhibition(props) {
  const [search, setSearch] = useState('')
  const [datas, setDatas] = useState([])
  const [searchData, setSearchData] = useState('')
  const [priceSearch, setPriceSearch] = useState(false)
  const [lowPrice, setLowPrice] = useState('')
  const [highPrice, setHighPrice] = useState('')
  const [searchDate, setSearchDate] = useState('')
  const [searchGallery, setSearchGallery] = useState('')
  const [searchCategory, setSearchCategory] = useState('')
  const [searchLocation, setSearchLocation] = useState('')

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/exhibition`)
    const results = await response.json()
    setDatas(results)
  }
  // console.log(test)

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
      <Header />
      <div className="d-flex exlist-frame">
        <aside>
          {/* 搜尋列 */}
          <form className="searchmargin" onSubmit={handleSubmit}>
            <SearchBarEx setSearch={setSearch} />
          </form>

          {/* 地圖搜尋 */}
          <Map />

          {/* 價錢 */}
          <div className="d-flex asideframe BoxShadow">
            <Price
              setLowPrice={setLowPrice}
              lowPrice={lowPrice}
              setHighPrice={setHighPrice}
              highPrice={highPrice}
              setPriceSearch={setPriceSearch}
            />
          </div>

          {/* 日期 */}
          <div className="asideframe BoxShadow">
            <DateTime setSearchDate={setSearchDate} />
          </div>

          {/* 館所 */}
          <div className="asideframe BoxShadow">
            <Gallery setSearchGallery={setSearchGallery} />
          </div>

          {/* 類別 */}
          <div className="asideframe BoxShadow">
            <Category setSearchCategory={setSearchCategory} />
          </div>

          {/* 地區 */}
          <div className="asideframe BoxShadow">
            <Location setSearchLocation={setSearchLocation} />
          </div>
        </aside>

        <nav className="container">
          <MobileNavbar
            search={search}
            setSearch={setSearch}
            setSearchData={setSearchData}
            setLowPrice={setLowPrice}
            lowPrice={lowPrice}
            setHighPrice={setHighPrice}
            highPrice={highPrice}
            setPriceSearch={setPriceSearch}
            setSearchDate={setSearchDate}
            setSearchGallery={setSearchGallery}
            setSearchCategory={setSearchCategory}
            setSearchLocation={setSearchLocation}
          />
        </nav>

        <main className="container-fluid">
          <div className="container">
            <div className="row row-cols-xxl-4 row-cols-xl-3 row-cols-2 mb-3">
              <Card
                searchData={searchData}
                lowPrice={lowPrice}
                highPrice={highPrice}
                searchDate={searchDate}
                searchGallery={searchGallery}
                searchCategory={searchCategory}
                searchLocation={searchLocation}
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Exhibition
