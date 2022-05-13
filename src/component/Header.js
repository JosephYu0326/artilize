import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import logo from '../images/logo.svg'
import userIcon from '../images/userIcon.svg'
import '../styles/Home.scss'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <>
      <Navbar
        bg="white"
        variant="light"
        style={{ height: 88 }}
        className="homeNavBar"
      >
        <Container style={{ width: 1440 }}>
          <div className="row"></div>
          <Navbar.Brand
            href="/"
            className="d-flex align-items-center justify-content-between"
            style={{ height: 45, width: 45 }}
          >
            <img
              alt=""
              src={logo}
              width="45"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <div
            className="d-flex  align-items-center"
            style={{ width: 236, height: 42, gap: 16 }}
          >
            <Link>
              <h6 className="Regular">展覽活動</h6>
            </Link>
            <Link>
              <h6 className="Regular">商品</h6>
            </Link>
            <Link>
              <h6 className="Regular">討論區</h6>
            </Link>
          </div>
          <div className="homeSearchBar d-flex justify-content-center align-items-stretch">
            <form className="d-flex">
              <input type="search" placeholder="全站搜尋" />
              <button type="submit">Search</button>
            </form>
            <button className="btn btn-primary">辦展覽</button>
            <button>
              <img src={userIcon} alt="" />
            </button>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
