//Accordion
import Accordion from '../../component/Accordion'
import '../../styles/Accordion.scss'
//廠商後臺
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useState, useEffect } from 'react'

import B2Bliste from './B2Bliste'
import B2BStartCount from './B2BStartCount'
import B2BEndCount from './B2BEndCount'

//sweetalert2
import Swal from 'sweetalert2'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Header from '../../component/Header'

import '../../styles/B2BListe.scss'
import Footer from '../../component/Footer'

import withReactContent from 'sweetalert2-react-content'

// const extendAbilityEx = (array) => {
//   return array.map((v, i) => {
//     let expire = true

//     if (+new Date(v.endtime) > +new Date())
//       // console.log(+new Date())
//       expire = false
//     }
//     return { ...v, expire }

//   })
// }
// const ex = (a)=>{
//   for()
// }
//排序
// const orderAbilityEx = (array) =>{
//    return array.mpa((v,i)=>{
//      return {}
//    })
// }
// const extendAbilityEx = (array) => {
//   return array.map((v, i) => {
//     let expire = true
//     if (+new Date(v.end) > +new Date()) {
//       // console.log(+new Date())
//       expire = false
//     }
//     return { ...v, expire }
//   })
// }
function B2B(props) {
  const history = useHistory()
  //react boostrap
  const [key, setKey] = useState('start')
  //
  const [data1, setDate1] = useState([])
  // const [data, setDate] = useState([])
  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/B2B/B2B')
    const results = await response.json()
    // console.log(results)
    setDate1(results)
    // setDate(extendAbilityEx(data1))
  }
  useEffect(() => {
    fetchData()
  }, [])
  const auth = JSON.parse(localStorage.getItem('auth'))
  const MySwal = withReactContent(Swal)
  useEffect(() => {
    if (auth === false) {
      MySwal.fire({
        icon: 'warning',
        title: '您尚未登入，將跳轉至登入畫面',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      }).then(() => {
        history.push('/users/login')
      })
    }
  }, [])

  const extendAbilityEx = (array) => {
    return array.map((v, i) => {
      let expire = true
      if (+new Date(v.end) > +new Date()) {
        // console.log(+new Date())
        expire = false
      }
      return { ...v, expire }
    })
  }
  // extendAbilityEx(data1)
  // const [data2, setDate2] = useState(extendAbilityEx(data1))
  // console.log('dextendAbilityExata1', extendAbilityEx(data1))
  // console.log('data2', data2)
  // console.log('setDate2', setDate2)
  // console.log('data1', data1)
  // const [data2, setDate2] = useState(extendAbilityEx(data1))
  // extendAbilityEx(data1)
  // console.log('data2', data2)
  // console.log('extendAbilityEx(data1)', extendAbilityEx(data1))

  // console.log('extendAbilityEx(abilityEx)', extendAbilityEx(abilityEx))

  // 設定展覽數

  const setExCount = (newCount, i) => {
    const newExhibitionInorder = [...extendAbilityEx(data1)]
    newExhibitionInorder[i].count = newCount < 1 ? 1 : newCount
    setDate1(newExhibitionInorder)
  }

  // 已發布展覽總數
  const startNumberEx = () => {
    let total = extendAbilityEx(data1).filter((v, i) => {
      return v.expire === false
    }).length
    console.log('Stotal', total)
    return total
  }
  // 過期展覽總數
  const endNumberEx = () => {
    let Etotal = extendAbilityEx(data1).filter((v, i) => {
      return v.expire === true
    }).length
    console.log('Etotal', Etotal)
    return Etotal
  }
  const totalNumberEx = () => {
    let total = extendAbilityEx(data1).length,
      eTotal = 0,
      pTotal = 0

    for (let i = 0; i < extendAbilityEx(data1).length; i++) {
      // total += 1
      if (extendAbilityEx(data1)[i].expire) {
        eTotal += 1
      }
    }
    pTotal = total - eTotal

    return [total, eTotal, pTotal]
  }
  // console.log(totalNumberEx())
  const [x, y, z] = totalNumberEx()
  // console.log('x', x)
  // console.log('y', y)
  // console.log('z', z)
  // 展覽刪除
  const handleDeleteEx = (id) => {
    Swal.fire({
      title: '確定?',
      text: '刪除就不能回復!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '是確定刪除',
    }).then((result) => {
      if (result.isConfirmed) {
        //fetch
        extendAbilityEx(data1)
        fetch('http://localhost:5000/B2B/B2B/' + id, {
          method: 'delete',
        })
          .then((res) => res.text())
          .then((text) => console.log('刪除成功...' + text))
          .then(() => {
            const newExhibitionInorder = [...data1].filter((v, i) => {
              console.log('v.id', v.id)
              return v.id !== id
            })

            console.log(newExhibitionInorder)

            setDate1(newExhibitionInorder)
          })
        Swal.fire('刪除!', '展覽活動已被刪除', '成功')
      }
    })
    // setDate1(newExhibitionInorder)
    // Swal.fire('刪除成功', '成功刪除活動', 'success')
  }

  // const fetchData1 = async () => {
  //   const response = await fetch('http://localhost:5000/B2B/B2B')
  //   const results = await response.json()
  //   // console.log(results)
  //   setDate1(results)
  //   // setDate(extendAbilityEx(data1))
  // }
  // useEffect(() => {
  //   fetchData1()
  // }, [])
  //修改編輯
  // const handleRRREX = (id) => {
  //   alert('id')
  //   handleRRREX(data1)
  //   fetch('http://localhost:5000/B2B/B2B/' + id, {
  //     method: 'put',
  //   })
  //     .then((res) => res.text())
  //     .then((text) => console.log('刪除成功...' + text))
  //     .then(() => {
  //       Swal.fire('刪除成功', '成功刪除活動', 'success')
  //       const newExhibitionInorder = [...data1].filter((v, i) => {
  //         console.log('v.id', v.id)
  //       })
  //       setDate1(newExhibitionInorder)
  //     })
  // }
  return (
    <>
      <Container>
        <Header />

        <Link to="/b2b/addability" className="btn btn-primary">
          建立新活動資料
        </Link>

        <Row>
          <Col>
            <h1>活動展覽列表</h1>
          </Col>
        </Row>
        <Row className="">
          <Col xs={11}>
            <Tabs
              //defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="start" title={`已發布(${z})`}>
                <B2BStartCount startNumberEx={startNumberEx()} />
                <div className="exhibitionInorder">
                  {extendAbilityEx(data1)
                    .filter((v, i) => {
                      return v.expire === false
                    })
                    .map((v, i) => {
                      {
                        /* console.log('data1', v.id, v.expire, i) */
                      }
                      return (
                        <B2Bliste
                          key={v.id}
                          id={v.id}
                          aName={v.aName}
                          start={v.start}
                          end={v.end}
                          time={v.time}
                          pic1={v.pic1}
                          count={v.count}
                          handleDelete={() => {
                            handleDeleteEx(v.id)
                          }}
                          handleRRR={v.id}
                          setExCount={(newCount) => {
                            setExCount(newCount, i)
                          }}
                        />
                      )
                    })}
                </div>
              </Tab>
              <Tab eventKey="end" title={`已結束(${y})`}>
                <B2BEndCount endNumberEx={endNumberEx()} />
                <div className="exhibitionInorder">
                  {extendAbilityEx(data1)
                    .filter((v, i) => {
                      return v.expire === true
                    })
                    .map((v, i) => {
                      return (
                        <B2Bliste
                          key={v.id}
                          id={v.id}
                          aName={v.aName}
                          start={v.start}
                          end={v.end}
                          time={v.time}
                          pic1={v.pic1}
                          count={v.count}
                          handleDelete={() => {
                            handleDeleteEx(v.id)
                          }}
                          handleRRR={v.id}
                          setExCount={(newCount) => {
                            setExCount(newCount, i)
                          }}
                        />
                      )
                    })}
                </div>
              </Tab>
              <Tab eventKey="all" title={`全部(${x})`}>
                <div className="exhibitionInorder">
                  {extendAbilityEx(data1).map((v, i) => {
                    return (
                      <B2Bliste
                        key={v.id}
                        id={v.id}
                        aName={v.aName}
                        start={v.start}
                        end={v.end}
                        time={v.time}
                        pic1={v.pic1}
                        count={v.count}
                        handleDelete={() => {
                          handleDeleteEx(v.id)
                        }}
                        handleRRR={v.id}
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
      <Footer />
    </>
  )
  //usehitory
}

export default B2B
