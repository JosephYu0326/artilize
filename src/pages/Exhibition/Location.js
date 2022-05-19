import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'

function Location() {
  const areas = ['北部', '中部', '南部', '東部', '離島']
  const areasObject = {
    0: ['臺北市', '新北市', '基隆市', '新竹市', '桃園市', '新竹縣', '宜蘭縣'],
    1: ['臺中市', '苗栗縣', '彰化縣', '南投縣', '雲林縣'],
    2: ['高雄市', '臺南市', '嘉義市', '嘉義縣', '屏東縣', '澎湖縣'],
    3: ['花蓮縣', '台東縣'],
    4: ['金門縣', '連江縣'],
  }

  const area = areas.map((v, i) => {
    return (
      <div key={i}>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey={i}>
            <Accordion.Header>{areas[i]}</Accordion.Header>
            <Accordion.Body>
              {areasObject[i].map((v, j) => {
                return (
                  <div key={j}>
                    <Link to="#" className="selectlink" onClick={optionChange}>
                      <div className="d-flex align-items-center selectframe">
                        <div className="selectsquare"></div>
                        {areasObject[i][j]}
                      </div>
                    </Link>
                  </div>
                )
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    )
  })

  return (
    <>
      <div className="h4 my-0">區域</div>
      <div className="web-window">{area}</div>
      <div className="mobile-window window-size pt-2">{area}</div>
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

export default Location
