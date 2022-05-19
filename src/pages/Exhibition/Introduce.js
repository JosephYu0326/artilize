//展覽介紹
import React, { useEffect, useRef } from 'react'
import { Accordion, AccordionItem } from 'react-light-accordion'
import 'react-light-accordion/demo/css/index.css'
import '../../styles/exhibition-introduce.scss'
import exhibitionimg from './images/exhibition-intro1.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Introduce(props) {
  const [active, setActive] = useState(false)
  const setHeight = useRef()

  const imgurl = {
    backgroundImage: `url(${exhibitionimg})`,
  }
  var exhibitionContent = `
  適逢前輩藝術家洪瑞麟110歲冥誕，創作精華再現勞動者的生命光輝。
  
  素有「礦工畫家」美譽的洪瑞麟（1912-1996），其作品一直是臺灣美術史上描繪勞動者生活面貌的代表象徵。
  
  幼時曾入日人稻垣藤兵衛創立的稻江義塾接受啟蒙教育，故而洪瑞麟甚早即接觸人道主義的薰陶，亦開啟對關懷農民、貧苦大眾的西洋畫家米勒、梵谷之關注。留日期間，受獨立美術團體如春陽會的在野精神影響，呈顯如以日本貧民窟為題的風景畫等，著名的〈山形市集〉則呈現出洪瑞麟對於「天寒下蕭瑟的勞動者」感動之情懷。
  
  回到臺灣，為了擔負家計，也感謝倪蔣懷資助留日學費，受邀至其經營的瑞芳二坑（後稱懷山煤礦）工作，留下大量礦工速寫。混雜著汗水與煤屑，洪瑞麟以遒勁的筆觸速寫夥伴們肢體勞動的美感，勾勒礦坑中「陽光照射不到」的真實人性光輝。
  
  長年處在不見天日的地底，使洪瑞麟特別嚮往燦爛的陽光。晚年洪瑞麟與長子洪鈞雄定居美國加州海邊小鎮，如願與終年明媚的陽光為伍，離開黝暗地底後的天光雲影，成為人生最後階段的創作主題。
  
  本次展覽以洪鈞雄於2020年捐贈本館作品為核心，更結合館外佳作，當中多數作品已逾35年未出現於臺灣觀眾面前。在洪瑞麟創作中少見之完整描繪礦場情景的大型油畫作品、罕見的留日素描，與重要的家人肖像等創作精華，皆於此次展覽展出。
  
  `
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
            <div className="contentpadding">
              <div className="h5">展覽介紹</div>
              <pre className="content-introduce pBig">{exhibitionContent}</pre>
            </div>
            <div className="information-frame">{information}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Introduce
