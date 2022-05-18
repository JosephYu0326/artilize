//廠商後臺
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/B2B.scss'
// import { useState } from 'react'

function B2B(props) {
  // const [inputs, setInputs] = useState({})

  // const handleChange = (event) => {
  //   const name = event.target.name
  //   const value = event.target.value
  //   setInputs((values) => ({ ...values, [name]: value }))
  // }

  return (
    <>
      {/*  */}
      <div>廠商後臺</div>
      <Link to="/b2b/addability">建立新活動資料</Link>
      <main className="container ">
        <div className="row d-flex justify-content-center ">
          {/*onSubmit=handleSubmit*/}
          <form className="col-6 b2bForm ">
            <h1>開始建立活動資訊</h1>
            <h6>請創建一個活動展覽資訊</h6>

            <figure className="figure d-flex justify-content-center ">
              <img
                src="../images/logo.svg"
                className="figure-img img-fluid rounded"
                alt="..."
              />
            </figure>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                活動名稱
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="活動名稱"
              />
            </div>

            <div>請輸入活動名稱</div>
            <h3>活動時間</h3>
            <section>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  開始時間
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="活動時間"
                />
              </div>
              <h6>請輸入活動時間</h6>
            </section>

            <section>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  結束時間
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="活動時間"
                />
              </div>
              <h6>請輸入活動時間</h6>
            </section>

            <section>
              <label htmlFor="exampleDataList" className="form-label">
                活動地點
              </label>
              <select className="form-select" id="sel1" name="Place">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </section>

            <h6>請選擇縣市</h6>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                詳細地址（鄉鎮市區、道路、街名、巷弄號、樓層）
              </label>
              <input
                type="value"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="例如:中山區中山北路二段106-2號6樓"
              />
            </div>
            <h6>請輸入詳細活動地址</h6>
            {/* 活動內容介紹 */}
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                活動內容介紹
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
                value={``}
              >
                活動內容
              </textarea>
            </div>

            <section>
              <div className="row justify-content-center">
                <h5>新增活動票券</h5>
                <div className="col-3 ">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      票券名稱
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="活動名稱"
                    />
                  </div>
                </div>
                <div className="col-3 ">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      票券數量
                    </label>
                    <input
                      type="value"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="1000"
                    />
                  </div>
                </div>
                <div className="col-3 ">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      票券價格
                    </label>
                    <input
                      type="value"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="1000"
                    />
                  </div>
                </div>

                <div className="col-3 ">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      操作
                    </label>
                    <input
                      type="value"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="1000"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  票券說明
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  value={``}
                >
                  請輸入票券說明
                </textarea>
              </div>
            </section>

            <section>
              <section>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    開始時間
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="活動時間"
                  />
                </div>
                <h6>請輸入活動時間</h6>
              </section>

              <section>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    開始時間
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="活動時間"
                  />
                </div>
                <h6>請輸入活動時間</h6>
              </section>
            </section>

            <section>
              <div>
                <div className="d-grid gap-3">
                  <button type="button" className="btn btn-primary my-2">
                    收合資訊
                  </button>
                </div>
              </div>

              <div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <button
                    className="btn btn-primary me-md-5 my-2"
                    type="button"
                  >
                    +免費票
                  </button>
                  <button className="btn btn-primary my-2" type="button">
                    {/* <i className="bi bi-plus-lg"></i> */}
                    +付費票
                  </button>
                </div>
              </div>

              <div>
                {/* sumbit */}
                <div className="d-grid gap-2 col-6 mx-auto my-2">
                  <button className="btn m btn-primary" type="submit">
                    確認
                  </button>
                </div>
              </div>
            </section>
          </form>
        </div>
      </main>
    </>
  )
}

export default B2B
