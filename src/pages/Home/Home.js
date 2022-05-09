//首頁
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

function Home(props) {
  return (
    <>
      {/* <div>首頁</div>
      <Link to="/search">全站搜尋頁</Link>
      <br />
      <Link to="/users">會員資料</Link>
      <br />
      <Link to="/exhibition">展覽</Link>
      <br />
      <Link to="/product">商品</Link>
      <br />
      <Link to="/forum">討論區</Link>
      <br />
      <Link to="/b2b">廠商後臺</Link>
      <br />
      <h1>
        <Link to="/style">樣式</Link>
      </h1> */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="{require('../../images/logo.png')}"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Home
