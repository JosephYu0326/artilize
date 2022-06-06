import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function Location(props) {
  const { setSearchLocation } = props
  const [loactionData, setLocationData] = useState([])
  const fetchLocationData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/exhibition/location`
    )
    const results = await response.json()
    setLocationData(results)
  }
  useEffect(() => {
    fetchLocationData()
  }, [])

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
      let setLocation = thetarget.parentNode.childNodes[1].innerText
      setSearchLocation(setLocation)
    } else {
      thetarget.setAttribute('class', 'selectsquare')
      setSearchLocation('')
    }
  }

  const area = loactionData.map((v, i) => {
    return (
      <div key={i}>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey={i}>
            <Accordion.Header>{v.direction}</Accordion.Header>
            <Accordion.Body>
              {[loactionData[i].city.split(',')].map((v2, j) => {
                return (
                  <div key={j}>
                    {v2.map((v3, k) => {
                      return (
                        <div key={k}>
                          <Link
                            to="#"
                            className="selectlink"
                            onClick={optionChange}
                          >
                            <div className="d-flex align-items-center selectframe">
                              <div className="selectsquare"></div>
                              <div>{v3}</div>
                            </div>
                          </Link>
                        </div>
                      )
                    })}
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

export default Location
