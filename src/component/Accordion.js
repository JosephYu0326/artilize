import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Accordion.scss'

function Accordion() {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState([])

  const title = ['標題1', '標題2', '標題3', '標題4', '標題5', '測試', '嘿嘿嘿']

  const content = {
    0: ['內容1-1', '內容1-2', '內容1-3', '內容1-4', '內容1-5'],
    1: ['內容2-1', '內容2-2', '內容2-4'],
    2: ['內容3-1', '內容3-2', '內容3-3', '內容3-4'],
    3: ['內容4-1', '內容4-4'],
    4: ['內容5-1', '內容5-2', '內容5-3', '內容5-4'],
    5: ['內容5-1', '內容5-2', '內容5-3', '內容5-4'],
    6: ['哈哈哈'],
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
              <div className="h4 my-0">{title[i]}</div>
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
                  <div
                    className={
                      activeState[i] ? 'accordionText expand' : 'accordionText'
                    }
                  >
                    {content[i][j]}
                  </div>
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
      <div className="accordionFrame BoxShadow">{data}</div>
    </>
  )
}

export default Accordion
