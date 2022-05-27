//廠商後臺
import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react'

import B2Bliste from './B2Bliste'
import B2Btotal from './B2Btotal'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import '../../styles/B2BListe.scss'

import { abilityEx } from './AbilityEx'

const extendAbilityEx = (array) => {
  return array.map((v, i) => {
    let expire = true

    if (+new Date(v.endtime) > +new Date()) {
      console.log(+new Date())
      expire = false
    }

    return { ...v, expire }
  })
}

function B2B(props) {
  const [data, setDate] = useState(extendAbilityEx(abilityEx))
  const [key, setKey] = useState('all')

  console.log(extendAbilityEx(abilityEx))

  // 設定展覽數
  const setExCount = (newCount, i) => {
    const newExhibitionInorder = [...abilityEx]
    newExhibitionInorder[i].count = newCount < 1 ? 1 : newCount
    setDate(newExhibitionInorder)
  }
  // 展覽總數
  // const totalNumberEx = () => {
  //   let total = 0
  //   for (let i = 0; i < exhibitionInorder.length; i++) {
  //     total += 1
  //   }
  //   return total
  // }
  // 展覽刪除
  const handleDeleteEx = (id) => {
    alert('確定要刪除該筆資料嗎？')
    const newExhibitionInorder = [...abilityEx].filter((v, i) => {
      return v.id !== id
    })
    setDate(newExhibitionInorder)
  }
  return (
    <>
      <div>廠商後臺</div>
      <Link to="/b2b/addability">建立新活動資料</Link>
      <Container fluid="md">
        <Row>
          <Col>123</Col>
        </Row>
        <Row>
          <Col>
            <Tabs
              //defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              {/* title={`已發布(${''})` */}
              <Tab eventKey="start" title={`已發布(${''})`}>
                <B2Btotal />
                <div className="exhibitionInorder">
                  {data
                    .filter((v, i) => {
                      return v.expire === false
                    })
                    .map((v, i) => {
                      console.log(v)
                      console.log(v, i)
                      return (
                        <B2Bliste
                          key={v.id}
                          id={v.id}
                          title={v.title}
                          startime={v.startime}
                          endtime={v.endtime}
                          createtime={v.createtime}
                          image={v.image}
                          count={v.count}
                          handleDelete={() => {
                            handleDeleteEx(v.id)
                          }}
                          setExCount={(newCount) => {
                            setExCount(newCount, i)
                          }}
                        />
                      )
                    })}
                </div>
              </Tab>
              <Tab eventKey="end" title={`已結束(${''})`}>
                <div className="exhibitionInorder">
                  {data
                    .filter((v, i) => {
                      return v.expire === true
                    })
                    .map((v, i) => {
                      return (
                        <B2Bliste
                          key={v.id}
                          id={v.id}
                          title={v.title}
                          startime={v.startime}
                          endtime={v.endtime}
                          createtime={v.createtime}
                          image={v.image}
                          count={v.count}
                          handleDelete={() => {
                            handleDeleteEx(v.id)
                          }}
                          setExCount={(newCount) => {
                            setExCount(newCount, i)
                          }}
                        />
                      )
                    })}
                </div>
              </Tab>
              <Tab eventKey="all" title={`全部(${''})`}>
                <div className="exhibitionInorder">
                  {data.map((v, i) => {
                    return (
                      <B2Bliste
                        key={v.id}
                        id={v.id}
                        title={v.title}
                        startime={v.startime}
                        endtime={v.endtime}
                        createtime={v.createtime}
                        image={v.image}
                        count={v.count}
                        handleDelete={() => {
                          handleDeleteEx(v.id)
                        }}
                        setExCount={(newCount) => {
                          setExCount(newCount, i)
                        }}
                      />
                    )
                  })}
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      ;
    </>
  )
}

export default B2B
