//展覽介紹
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/exhibition-introduce.scss'
import exhibitionimg from './images/exhibition-intro1.png'

function Introduce(props) {
  const imgurl = {
    backgroundImage: `url(${exhibitionimg})`,
  }
  return (
    <>
      <header>Exhibition Header</header>
      <div className="ex-frame">
        <div className="intro-imgframe">
          <div style={imgurl} className="exhibition-img"></div>
          <div className="overview">
            <div className="titleframe">
              <div className="h4">【掘光而行│洪瑞麟】</div>
            </div>

            <div>展期: 2022-03-19 ~ 2022-07-31</div>
            <div>地點: 台北美術館</div>
          </div>
        </div>
        <div className="content-background">
          <div className="content-page BoxShadow">
            <div className="h5">展覽介紹</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Introduce
