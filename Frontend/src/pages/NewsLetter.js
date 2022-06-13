import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Container, Row } from 'react-bootstrap'
import BackBtn from '../component/BackBtn'
import Swal from 'sweetalert2'
import '../styles/Forum.scss'

function Newsletter() {
  const [fristName, setFristName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailInput, setEmailInput] = useState('')

  console.log(fristName)
  console.log(lastName)
  console.log(emailInput)

  function subscribe(e) {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_URL}/NewsLetter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        fName: fristName,
        lName: lastName,
        email: emailInput,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        Swal.fire('訂閱成功!', '', 'success')
      })
      .then(setEmailInput(''), setLastName(''), setFristName(''))
  }

  return (
    <>
      <Header />
      <div className="frContent">
        <Container>
          <Row
            className="d-flex justify-content-center align-items-center"
            style={{ height: '80vh' }}
          >
            <div className="w-50 BorderRadius usersBackground p-5">
              <form>
                <div style={{ paddingLeft: '12px' }}>
                  <h4 className="ph_title row ExtraBold text-primary">
                    訂閱我們
                  </h4>
                  <h6 className="ph_title row Regular usersContentcolor mb-3 ">
                    透過Email接收最新訊息
                  </h6>
                </div>
                <div id="input-text" className="mb-3">
                  <input
                    name="fName"
                    value={fristName}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="名字"
                    onChange={(e) => setFristName(e.target.value)}
                  />
                </div>
                <div id="input-text" className="mb-3">
                  <input
                    value={lastName}
                    name="lName"
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="姓"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  {/* <div id="emailHelp" className="">
                  </div> */}
                </div>
                <div id="" className="mb-3 usersContentcolor Regular">
                  <input
                    type="email"
                    value={emailInput}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex justify-content-around flex-column">
                  <div className="txtGray">
                    訂閱即視同接受隱私政策與服務條款，您也可以註冊藝化會員，收錄喜歡的文章以及參加贈票活動！
                  </div>
                  <button
                    type="submit"
                    className="mx-auto btn btn-primary rounded-pill"
                    onClick={subscribe}
                  >
                    訂閱藝化
                  </button>
                </div>
              </form>
            </div>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  )
}

export default Newsletter
