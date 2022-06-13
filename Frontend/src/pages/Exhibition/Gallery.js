import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { FaUber } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getMonthView } from 'rsuite/esm/utils/dateUtils'

function Gallery(props) {
  const { setSearchGallery } = props
  const frameheight = useRef()
  const [active, setActive] = useState(false)

  let select = []
  const [galleryData, setGalleryData] = useState([])
  const fetchGalleryData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/exhibition/galleries`
    )
    const results = await response.json()
    setGalleryData(results)
  }
  useEffect(() => {
    fetchGalleryData()
  }, [])

  for (let i = 0; i < galleryData.length; i++) {
    select.push(0)
  }

  let temp = galleryData.slice(0, 4)
  let thelength = galleryData.length
  let all = galleryData.slice(4, thelength)

  useEffect(() => {
    let thetarget = document.querySelector('.galleryAllText')

    if (active) {
      thetarget.setAttribute('class', 'galleryAllText expand')
    } else {
      thetarget.setAttribute('class', 'galleryAllText')
    }
  }, [active])

  const gallery = temp.map((v, i) => {
    return (
      <div key={i}>
        <Link to="#" className="selectlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare"></div>
            <div>{v.mName}</div>
          </div>
        </Link>
      </div>
    )
  })

  const galleryAll = all.map((v, i) => {
    return (
      <div key={i}>
        <Link to="#" className="selectlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare"></div>
            <div>{v.mName}</div>
          </div>
        </Link>
      </div>
    )
  })

  function optionChange(e) {
    let thetarget = e.target.parentNode.childNodes[0]
    // 找到該層的 <div class="selectsquare"></div>
    if (thetarget.hasChildNodes()) {
      thetarget = thetarget.childNodes[0]
    }

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
      let setGallery = thetarget.parentNode.childNodes[1].innerText
      setSearchGallery(setGallery)
    } else {
      thetarget.setAttribute('class', 'selectsquare')
      setSearchGallery('')
    }
  }

  function expand(e) {
    setActive(!active)
  }

  return (
    <>
      <Link to="#" className="selectlink" onClick={expand}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="h4 my-0">館所</div>

          <div className="option-expand position-relative d-flex justify-content-center align-items-center">
            <div className={active ? 'plusIcon1 expand' : 'plusIcon1'}></div>
            <div className={active ? 'plusIcon2 expand' : 'plusIcon2'}></div>
          </div>
        </div>
      </Link>
      <div className="web-window categoryheight">
        {gallery}
        <div
          className="frameheight"
          ref={frameheight}
          style={
            active
              ? { height: frameheight.current.scrollHeight }
              : { height: frameheight.scrollHeight }
          }
        >
          <div className="galleryAllText">{galleryAll}</div>
        </div>
      </div>

      <div className="mobile-window window-size">{gallery}</div>
    </>
  )
}

export default Gallery
