import React from 'react'
import '../styles/AsideBar.scss'
import { FaStar, FaAngleRight } from 'react-icons/fa'
import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'

function AsideBar() {
  const categorys = ['經典藝術', '珍藏瑰寶', '品味生活', '生活禮品']
  const categoryDetails = {
    0: ['陶瓷.青銅器', '琉璃', '山水花鳥人物畫', '雕塑', '書籍'],
    1: ['項鍊.耳環', '絲巾.領巾', '手環.手鍊', '手錶', '包款', '扇子.傘'],
    2: ['茗品茶具', '吊牌/吊飾.卡套', '居家擺飾', '美食.飲品', '益智.玩具'],
    3: ['文房四寶', '織標', '筆.筆記本', '文件收納'],
  }

  const Category = categorys.map((v, i) => {
    return (
      <div key={i}>
        <Accordion defaultActive="0" flush>
          <Accordion.Item eventKey={i}>
            <Accordion.Header>
              <button className="btn asideBtn py-2 px-3">{categorys[i]}</button>
            </Accordion.Header>
            <Accordion.Body>
              {categoryDetails[i].map((v, j) => {
                return (
                  <div key={j}>
                    <Link
                      to="/product/InCategory"
                      className="asideCategoryLink"
                    >
                      <div className="asideBarDetails">
                        <button className="btn asideBtn">
                          {/* <div className="selectsquare"></div> */}
                          <h6>{categoryDetails[i][j]}</h6>
                        </button>
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
      <input type="checkbox" name="" id="sideMenu-switch"></input>
      <aside className="pb-5 px-3 asideBar">
        <label for="sideMenu-switch" className="align-self-end">
          <FaAngleRight className="faAngleRight" />
        </label>
        {/* <button className="btn btn-primary mt-4 mb-4 py-2 px-3 rounded-pill">
          {'商品首頁'}
        </button>
        <button className="btn asideBtn">{'經典藝術'}</button>
        <button className="btn asideBtn">{'珍藏瑰寶'}</button>
        <button className="btn asideBtn">{'品味生活'}</button>
        <button className="btn asideBtn">{'生活禮品'}</button> */}
        <button className="btn btn-primary mt-4 mb-4 py-2 px-3 rounded-pill">
          {'商品首頁'}
        </button>
        {Category}
      </aside>
    </>
  )
}
export default AsideBar
