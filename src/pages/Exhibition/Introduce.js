//展覽介紹
import React, { useEffect, useRef } from 'react'
import { Accordion, AccordionItem } from 'react-light-accordion'
import 'react-light-accordion/demo/css/index.css'
import '../../styles/exhibition-introduce.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'

import Book from './Book'

function Introduce(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState(false)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [start, setStart] = useState([])
  const [end, setEnd] = useState([])

  const params = useParams()
  const intParams = parseInt(params.exhibitionId)

  const [datas, setDatas] = useState([])
  const [allDatas, setAllDatas] = useState([])

  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:5050/exhibition/${params.exhibitionId}`
    )
    const results = await response.json()
    setDatas(results)
  }
  useEffect(() => {
    fetchData()
  }, [intParams])

  const numExhibition = async () => {
    const response = await fetch(`http://localhost:5050/exhibition`)
    const results = await response.json()
    setAllDatas(results)
  }
  useEffect(() => {
    numExhibition()
  }, [])

  let count = allDatas.length

  var bookInformation = `
  1.本次展出觀展者需建立ENGAGE帳戶(https://engagevr.io/)。
  2.完成購票後，您將收到一組入場序號，請使用入場序號綁定您的ENGAGE帳戶，綁定後將無法
    變更或轉移。操作說明請參閱
  https://service.viveport.com/hc/zh-tw/categories/4409265621389
  3.消費者於活動期間內，可使用綁定之帳戶無限次數入場觀展（本展覽入場截止日為
  2022年5月31日）。
  4.一組票券序號，僅提供一位序號持有者綁定與入場。消費者應妥善私密保存虛擬票券序號，若被第三方使用，此損失需由消費者自行承擔。
  5.使用者應注意展覽中與其他觀展者之互動禮節，若有違反善良風俗之行為，管理員有權取消其入場資格。`

  function expand(e) {
    setActive(!active)

    let thetarget =
      e.target.parentNode.childNodes[0].childNodes[0].childNodes[1]

    let textheight = e.target.parentNode.childNodes[2]
    let text = textheight.childNodes[0]
    let icon1 = thetarget.childNodes[0]
    let icon2 = thetarget.childNodes[1]

    if (active) {
      textheight.setAttribute('class', 'optionText expand')
      text.setAttribute('class', 'textheight expand')
      icon1.setAttribute('class', 'plusIcon1 expand')
      icon2.setAttribute('class', 'plusIcon2 expand')
    } else {
      textheight.setAttribute('class', 'optionText')
      text.setAttribute('class', 'textheight')
      icon1.setAttribute('class', 'plusIcon1')
      icon2.setAttribute('class', 'plusIcon2')
    }
  }

  function handleClick() {
    let titleTarget = document.querySelector('.titleframe')
    let titleText = titleTarget.childNodes[0].innerText

    let image = document.querySelector('.exhibition-img')
    let date = document.querySelector('.dateText').innerText
    let Day = date.substring(3).split(' ~ ')

    setStart(Day[0])
    setEnd(Day[1])

    setImage(image.dataset.image)
    setTitle(titleText)
    setIsOpen(!isOpen)
  }

  const optionText = ['購票資訊', '如何訂購', '票價', '開放時間']
  const information = optionText.map((v, i) => {
    return (
      <div key={i} className="position-relative">
        <Link to="#" className="expand-link">
          <div className="optionframe">
            <div className="h4 my-0">{optionText[i]}</div>

            <div className="option-expand">
              <div className="plusIcon1"></div>
              <div className="plusIcon2"></div>
            </div>
          </div>
        </Link>
        <Link to="#" onClick={expand} className="testlink"></Link>
        <div className="optionText content-introduce">
          <pre className="textheight">{bookInformation}</pre>
        </div>
      </div>
    )
  })

  return (
    <>
      <header>Exhibition Header</header>
      <Book
        isOpen={isOpen}
        title={title}
        setIsOpen={setIsOpen}
        image={image}
        start={start}
        end={end}
      />

      {datas.map((v, i) => {
        return (
          <div key={v.exhibitionId} className="ex-frame">
            <div className="intro-imgframe">
              <img
                src={require(`./images/${v.image}`)}
                className="exhibition-img"
                alt={v.image}
                data-image={v.image}
              ></img>
              <div className="overview">
                <div className="titleframe">
                  <div className="h4">{v.name}</div>
                </div>

                <div className="dateText">
                  展期: {v.start.slice(0, 9)} ~ {v.end.slice(0, 9)}
                </div>
                <div>地點: {v.place}</div>
              </div>
            </div>
            <div className="content-background">
              <div className="content-page BoxShadow">
                <div className="contentpadding">
                  <div className="h5">展覽介紹</div>
                  <pre className="content-introduce pBig">{v.intro}</pre>
                </div>
                <div className="information-frame">{information}</div>
              </div>
            </div>
          </div>
        )
      })}

      <div className="bottom-navbar">
        <div className="bottom-btn-frame">
          <Link
            to={`/exhibition/introduce/${intParams > 1 ? intParams - 1 : 1}`}
            className="btn btn-outline-primary rounded-pill bottom-btn"
          >
            <FiChevronLeft />
            上一場展覽
          </Link>
          <Link
            to={`/exhibition/introduce/${
              intParams === count ? count : intParams + 1
            }`}
            className="btn btn-outline-primary rounded-pill bottom-btn"
          >
            下一場展覽
            <FiChevronRight />
          </Link>
        </div>
        <button
          className="btn btn-secondary rounded-pill book-btn"
          onClick={handleClick}
        >
          訂票
        </button>
      </div>
    </>
  )
}

export default Introduce
