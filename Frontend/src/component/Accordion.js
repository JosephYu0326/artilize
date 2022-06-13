import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Accordion.scss'

function Accordion() {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState([])

  const title = ['經典藝術', '珍藏瑰寶', '品味生活', '生活禮品']

  const content = {
    0: ['陶瓷.青銅器', '琉璃', '山水花鳥人物畫', '雕塑', '書籍'],
    1: ['項鍊.耳環', '絲巾.領巾', '手環.手鍊', '手錶', '包款', '扇子.傘'],
    2: ['茗品茶具', '吊牌/吊飾.卡套', '居家擺飾', '美食.飲品', '益智.玩具'],
    3: ['文房四寶', '織標', '筆.筆記本', '文件收納'],
  }

  const [activeState, setActiveState] = useState([])

  useEffect(() => {
    const activeArray = []
    let heightArray = []

    for (let i = 0; i < title.length; i++) {
      activeArray.push(0)
      let height = document.querySelectorAll('.optionheight')[i].scrollHeight
      heightArray.push(height)
    }
    setHeight(heightArray)
    setActiveState(activeArray)
  }, [])

  const data = title.map((v, i) => {
    return (
      <div key={i}>
        <div className="position-relative">
          <div>
            <div className="option-frame">
              <div className="h4 my-0 accordionTitle">{title[i]}</div>
              <div className="icon-frame">
                <div className="plusIcon1"></div>
                <div className="plusIcon2"></div>
              </div>
            </div>
          </div>
          <Link to="#" onClick={expand} className="testlink"></Link>
        </div>
        <div
          className="optionheight"
          style={
            activeState[i] ? { height: `${height[i]}px` } : { height: '0px' }
          }
        >
          {content[i] &&
            content[i].map((v, j) => {
              return (
                <div key={j}>
                  <Link
                    to={`/ProductCategory/${content[i][j]}`}
                    className="accordionContentLink"
                  >
                    {' '}
                    <h6
                      className={
                        activeState[i]
                          ? 'accordionText expand'
                          : 'accordionText'
                      }
                    >
                      {content[i][j]}
                    </h6>
                  </Link>
                </div>
              )
            })}
        </div>
      </div>
    )
  })

  function expand(e) {
    setActive(!active)

    // 尋找目標物的父元素
    let thetarget =
      e.target.parentNode.childNodes[0].childNodes[0].childNodes[1]
    // 父元素與子元素
    let object1 = e.target.parentNode.parentNode.parentNode
    let object2 = e.target.parentNode.parentNode
    // 找目標物的指數
    var index
    for (let i = 0; i < title.length; i++) {
      if (object1.childNodes[i] === object2) {
        index = i
        break
      }
    }
    if (!activeState[index]) {
      activeState[index] = 1
    } else {
      activeState[index] = 0
    }

    // 找目標物的高度

    // 設定目標物旁的圖示
    let icon1 = thetarget.childNodes[0]
    let icon2 = thetarget.childNodes[1]
    if (activeState[index]) {
      icon1.setAttribute('class', 'plusIcon1 expand')
      icon2.setAttribute('class', 'plusIcon2 expand')
    } else {
      icon1.setAttribute('class', 'plusIcon1')
      icon2.setAttribute('class', 'plusIcon2')
    }
  }
  return (
    <>
      <div className="accordionFrame BoxShadow">
        <Link to="/product" className="accordionHomeLink">
          <div className="accordionHome">
            <h4>首頁</h4>
          </div>
        </Link>
        <div>{data}</div>
      </div>
    </>
  )
}

export default Accordion
