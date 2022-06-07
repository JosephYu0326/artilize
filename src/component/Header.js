import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { FaUserCircle, FaSearch } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import SearchBar from './SearchBar'
import '../styles/HeaderAndFooter.scss'
import '../styles/SearchBar.scss'

let storage = localStorage

function Header(props) {
  //從SearchBar拿回keyword
  const [keyword, setKeyWord] = useState('')
  // console.log(keyword)

  const [collapseSearch, setCollapseSearch] = useState(
    'navbar-collapse collapse'
  )
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    let cartNum = parseInt(storage['totalNum'] ? storage['totalNum'] : 0)
    setCartCount(cartNum)
  }, [cartCount])

  //把keyword送回要搜尋(執行API)的頁面
  useEffect(() => {
    if (keyword) {
      //引入處<Header setSerchInput={setSerchInput}>，把serchInput用SQL模糊查詢
      props.setSerchInput(keyword)
    }
  }, [keyword])

  function clickToSearch() {
    if (collapseSearch === 'navbar-collapse collapse') {
      setCollapseSearch('navbar-collapse collapse show')
    } else {
      setCollapseSearch('navbar-collapse collapse')
    }
  }

  return (
    <>
      <Navbar expand="lg" className=" justify-content-between">
        <Container id="top">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand
            className="d-flex align-items-center"
            style={{ height: 45, width: 45 }}
          >
            <Link to="/">
              <img
                src={logo}
                width="45"
                height="45"
                className="d-inline-block"
              />
            </Link>
          </Navbar.Brand>
          <div className="d-flex justify-content-center align-items-center">
            <FaSearch
              className="displayY fs-2"
              //  onClick={clickToSearch}
            />
          </div>
          <div className={collapseSearch}>
            <ul className="displayY mx-auto m-5 mb-lg-0 align-items-center list-unstyled">
              <li className="nav-item mx-auto">
                <div className="searchbar">
                  <input
                    className="form-control searchinput"
                    type="search"
                    placeholder=""
                    aria-label="Search"
                  />
                  <button className="btn searchbtn" type="submit">
                    <FaSearch />
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto align-items-center">
              <Link to="/exhibition" className="nav-link">
                <h6 className="">展覽活動</h6>
              </Link>
              <Link to="/product" className="nav-link">
                <h6 className="">商品</h6>
              </Link>
              <Link to="/forum" className="nav-link">
                <h6 className="">討論區</h6>
              </Link>
              <li className="nav-item">
                <div className="homeSearchBar justify-content-center align-items-stretch">
                  <SearchBar setKeyword={setKeyWord} />

                  <Button variant="primary rounded-pill px-4">
                    <Link to="/b2b">辦展覽</Link>
                  </Button>
                  <button
                    type="button"
                    className="btn btn-primary position-relative"
                  >
                    <Link to="/booking/cart">
                      <AiOutlineShoppingCart className="cart-icon" />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartCount}
                      </span>
                    </Link>
                  </button>

                  <button className="align-items-center d-flex pb-2">
                    <Link to="/users">
                      <FaUserCircle />
                    </Link>
                  </button>
                </div>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
