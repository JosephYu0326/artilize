import { selectClasses } from '@mui/material'
import { data } from 'jquery'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

function Category(props) {
  const { setSearchCategory } = props
  const frameheight = useRef()
  const [active, setActive] = useState(false)

  let select = []
  const [temp1, setTemp1] = useState(select)

  const [categoryData, setCategoryData] = useState([])
  const fetchCategoryData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/exhibition/categories`
    )
    const results = await response.json()
    setCategoryData(results)
  }
  useEffect(() => {
    fetchCategoryData()
  }, [])

  for (let i = 0; i < categoryData.length; i++) {
    select.push(0)
  }

  let temp = categoryData.slice(0, 4)
  let thelength = categoryData.length
  let all = categoryData.slice(4, thelength)

  useEffect(() => {
    let thetarget = document.querySelector('.categoryAllText')

    if (active) {
      thetarget.setAttribute('class', 'categoryAllText expand')
    } else {
      thetarget.setAttribute('class', 'categoryAllText')
    }
  }, [active])

  const category = temp.map((v, i) => {
    return (
      <div key={v.kid}>
        <Link to="#" className="selectlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare"></div>
            <div>{v.kind}</div>
          </div>
        </Link>
      </div>
    )
  })
  const categoryAll = all.map((v, i) => {
    return (
      <div key={v.kid}>
        <Link to="#" className="selectlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare"></div>
            <div>{v.kind}</div>
          </div>
        </Link>
      </div>
    )
  })

  function expand(e) {
    setActive(!active)
  }

  function optionChange(e) {
    let thetarget = e.target.parentNode.childNodes[0]

    // 找到該層的 <div class="selectsquare"></div>
    if (thetarget.hasChildNodes()) {
      thetarget = thetarget.childNodes[0]
    }

    // 找第幾個
    let temp = thetarget.parentNode.parentNode.parentNode.parentNode
    let tempson = thetarget.parentNode.parentNode.parentNode
    var index
    for (let i = 0; i < 17; i++) {
      if (temp.childNodes[i] === tempson) {
        index = i
        break
      }
    }
    // 設定哪個選項啟動
    if (temp1[index] === 1) {
      select[index] = 0
    } else {
      select[index] = 1
    }
    setTemp1(select)

    let changeicon = thetarget.getAttribute('class')

    if (changeicon === 'selectsquare') {
      // 將其他選的屏蔽掉
      if (document.querySelector('.selectedsquare')) {
        let other = document.querySelectorAll('.selectedsquare')
        for (let i = 0; i < other.length; i++) {
          other[i].setAttribute('class', 'selectsquare')
        }
      }
      thetarget.setAttribute('class', 'selectedsquare')
      let setCategory = thetarget.parentNode.childNodes[1].innerText
      setSearchCategory(setCategory)
    } else {
      thetarget.setAttribute('class', 'selectsquare')
      setSearchCategory('')
    }
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

export default Category
