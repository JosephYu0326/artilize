import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

function Gallery() {
  const frameheight = useRef()
  const [active, setActive] = useState(false)

  const galleries = [
    '故宮博物院',
    '台北市立美術館',
    '台北當代藝術館',
    '奇美博物館',
  ]
  const moreGallery = ['高雄市立美術館', '台中市立美術館', '台南市立美術館']

  useEffect(() => {
    let thetarget = document.querySelector('.galleryAllText')

    if (active) {
      thetarget.setAttribute('class', 'galleryAllText expand')
    } else {
      thetarget.setAttribute('class', 'galleryAllText')
    }
  }, [active])

  const gallery = galleries.map((v, i) => {
    return (
      <div key={i}>
        <Link to="#" className="selectlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare"></div>
            <div>{galleries[i]}</div>
          </div>
        </Link>
      </div>
    )
  })

  const galleryAll = moreGallery.map((v, i) => {
    return (
      <div key={i}>
        <Link to="#" className="selectlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare"></div>
            <div>{moreGallery[i]}</div>
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
export default Gallery
