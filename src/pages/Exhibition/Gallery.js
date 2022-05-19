import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Gallery() {
  const [active, setActive] = useState(false)

  const galleries = {
    0: ['故宮博物院', '台北市立美術館', '台北當代藝術館', '奇美博物館'],
    1: [
      '故宮博物院',
      '台北市立美術館',
      '台北當代藝術館',
      '奇美博物館',
      '高雄市立美術館',
      '台中市立美術館',
      '台南市立美術館',
    ],
  }

  const [galleryState, setGalleryState] = useState(galleries[0])

  const gallery = galleryState.map((v, i) => {
    return (
      <div key={i}>
        <Link to="#" className="selectlink" onClick={optionChange}>
          <div className="d-flex align-items-center selectframe">
            <div className="selectsquare"></div>

            <div>{galleryState[i]}</div>
          </div>
        </Link>
      </div>
    )
  })
  function expand() {
    setActive(!active)
    if (active) {
      setGalleryState(galleries[0])
    } else {
      setGalleryState(galleries[1])
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="h4 my-0">館所</div>
        <div className="option-expand">
          <Link to="#" className="expand-link" onClick={expand}>
            <div className="option-expand position-relative d-flex justify-content-center align-items-center">
              <div className={active ? 'plusIcon1 expand' : 'plusIcon1'}></div>
              <div className={active ? 'plusIcon2 expand' : 'plusIcon2'}></div>
            </div>
          </Link>
        </div>
      </div>

      <div className="web-window">{gallery}</div>
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
