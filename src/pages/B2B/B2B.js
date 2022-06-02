//廠商後臺
import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react'

import B2Bliste from './B2Bliste'
import B2BStartCount from './B2BStartCount'
import B2BEndCount from './B2BEndCount'

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
      // console.log(+new Date())
      expire = false
    }

    return { ...v, expire }
  })
}
const ex = (a)=>{
  
}
//排序
// const orderAbilityEx = (array) =>{
//    return array.mpa((v,i)=>{
//      return {}
//    })
// }

function B2B(props) {
  const [data, setDate] = useState(extendAbilityEx(abilityEx))
  const [key, setKey] = useState('start')

  console.log('extendAbilityEx(abilityEx)', extendAbilityEx(abilityEx))

  // 設定展覽數
  const setExCount = (newCount, i) => {
    const newExhibitionInorder = [...abilityEx]
    newExhibitionInorder[i].count = newCount < 1 ? 1 : newCount
    setDate(newExhibitionInorder)
  }
  // 已發布展覽總數
  const startNumberEx = () => {
    let total = data.filter((v, i) => {
      return v.expire === false
    }).length
    console.log('Stotal', total)
    return total
  }
  // 過期展覽總數
  const endNumberEx = () => {
    let Etotal = data.filter((v, i) => {
      return v.expire === true
    }).length
    console.log('Etotal', Etotal)
    return Etotal
  }
  // 全部展覽總數
  const totalNumberEx = () => {
    let total = 0
    for (let i = 0; i < data.length; i++) {
      total += 1
    }
    return total
  }
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
      <Container>
        <Row>
          <Col>
            <h1>活動展覽列表</h1>
          </Col>
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
              <Tab eventKey="start" title={`已發布(${startNumberEx()})`}>
                <B2BStartCount startNumberEx={startNumberEx()} />
                <div className="exhibitionInorder">
                  {data
                    .filter((v, i) => {
                      return v.expire === false
                    })
                    .map((v, i) => {
                      console.log('data', v.id, v.expire, i)
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
              <Tab eventKey="end" title={`已結束(${endNumberEx()})`}>
                <B2BEndCount endNumberEx={endNumberEx()} />
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
              <Tab eventKey="all" title={`全部(${totalNumberEx()})`}>
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
