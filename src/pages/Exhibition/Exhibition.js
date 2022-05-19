//展覽
import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/exhibition-list.scss'
import '../../styles/style.scss'

import SearchBar from '../../component/SearchBar'
import MobileNavbar from './MobileNavbar'
import Category from './Category'
import Gallery from './Gallery'
import Location from './Location'
import Price from './Price'
import Map from './Map'
import DateTime from './DateTime'
import Card from './Card'

function Exhibition(props) {
  return (
    <>
      <header>Exhibition Header</header>
      <div className="d-flex exlist-frame">
        <aside>
          {/* 搜尋列 */}
          <form className="searchmargin">
            <SearchBar />
          </form>

          {/* 地圖搜尋 */}
          <Map />

          {/* 價錢 */}
          <div className="d-flex asideframe BoxShadow">
            <Price />
          </div>

          {/* 日期 */}
          <div className="asideframe BoxShadow">
            <DateTime />
          </div>

          {/* 類別 */}
          <div className="asideframe BoxShadow">
            <Category />
          </div>

          {/* 館所 */}
          <div className="asideframe BoxShadow">
            <Gallery />
          </div>

          {/* 地區 */}
          <div className="asideframe BoxShadow">
            <Location />
          </div>
        </aside>

        <nav className="container">
          <MobileNavbar />
        </nav>

        <main className="container-fluid">
          <div className="container">
            <div className="row row-cols-xxl-4 row-cols-xl-3 row-cols-2">
              <Card />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Exhibition
