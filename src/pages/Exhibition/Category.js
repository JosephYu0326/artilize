import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

function Category() {
  const frameheight = useRef()
  const [active, setActive] = useState(false)
  const categories = ['古董文物', '油畫', '雕塑', '攝影']

  const moreCategory = ['水彩', '書法']

  useEffect(() => {
    let thetarget = document.querySelector('.categoryAllText')

    if (active) {
      thetarget.setAttribute('class', 'categoryAllText expand')
    } else {
      thetarget.setAttribute('class', 'categoryAllText')
    }
  }, [active])

  const category = categories.map((v, i) => {
    return (
      <div key={i}>
        <Link to="#" className="selectlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare"></div>
            <div>{categories[i]}</div>
          </div>
        </Link>
      </div>
    )
  })
  const categoryAll = moreCategory.map((v, i) => {
    return (
      <div key={i}>
        <Link to="#" className="selectlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare"></div>
            <div>{moreCategory[i]}</div>
          </div>
        </Link>
      </div>
    )
  })

  function expand(e) {
    setActive(!active)
  }

  return (
    <>
      <Link to="#" className="selectlink" onClick={expand}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="h4 my-0">展覽類別</div>

          <div className="option-expand position-relative d-flex justify-content-center align-items-center">
            <div className={active ? 'plusIcon1 expand' : 'plusIcon1'}></div>
            <div className={active ? 'plusIcon2 expand' : 'plusIcon2'}></div>
          </div>
        </div>
      </Link>

      <div className="web-window categoryheight">
        {category}
        <div
          className="frameheight"
          ref={frameheight}
          style={
            active
              ? { height: frameheight.current.scrollHeight }
              : { height: frameheight.scrollHeight }
          }
        >
          <div className="categoryAllText">{categoryAll}</div>
        </div>
      </div>
      <div className="mobile-window window-size">{category}</div>
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

export default Category
