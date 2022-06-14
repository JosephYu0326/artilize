import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import logo from '../images/logo.png'
import { FaUserCircle, FaSearch } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import SearchBar from './SearchBar'
import '../styles/HeaderAndFooter.scss'
import '../styles/SearchBar.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Weather from '../pages/Users/Weather'
let storage = localStorage

let cartNum = parseInt(storage['totalNum'] ? storage['totalNum'] : 0)

function Header(props) {
  //從SearchBar拿回keyword
  const [keyword, setKeyWord] = useState('')
  console.log(keyword)

  const [collapseSearch, setCollapseSearch] = useState(
    'navbar-collapse collapse'
  )
  const [cartCount, setCartCount] = useState(cartNum)
  setInterval(() => {
    setCartCount(storage.getItem('totalNum'))
  }, 1000)
  const auth = JSON.parse(localStorage.getItem('auth'))
  const userAvatar = localStorage.getItem('userAvatar')
  console.log(auth)
  const [weatherlist, setWeatherlist] = useState({
    temp: '',
    icon: '',
  })

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
  const MySwal = withReactContent(Swal)
  const history = useHistory()
  const clickLogOut = (e) => {
    e.preventDefault()
    MySwal.fire({
      title: '您確定要登出嗎?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: '取消',
      confirmButtonText: '確定',
      confirmButtonColor: '#4153BB',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('userId')
        localStorage.removeItem('userAvatar')
        localStorage.removeItem('userAccount')
        localStorage.setItem('auth', false)
        // const temp = localStorage.getItem('addItemList').split(',')
        // const temp2 = localStorage.getItem('addItemList2').split(',')
        // for (let i = 0; i < temp.length - 1; i++) {
        //   localStorage.removeItem(temp[i])
        // }
        // for (let i = 0; i < temp2.length - 1; i++) {
        //   localStorage.removeItem(temp2[i])
        // }
        // localStorage.removeItem('totalPrice')
        // localStorage.removeItem('addItemList')
        // localStorage.removeItem('addItemList2')
        // localStorage.setItem('totalNum', 0)

        MySwal.fire({
          title: '登出成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          // history.push('/users/login')
          history.replace('/users/login')
        })
      }
    })
  }
  const clickLogIn = (e) => {
    e.preventDefault()
    history.replace('/users/login')
  }
  useEffect(() => {
    const weatherlist = JSON.parse(localStorage.getItem('weather'))
    const { temp, icon } = weatherlist
    setWeatherlist({ temp: temp, icon: icon })
  }, [])
  const { temp, icon } = weatherlist
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
                alt=""
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
                <div className="homeSearchBar justify-content-center align-items-center">
                  <SearchBar setKeyword={setKeyWord} />
                  <Link to="/b2b">
                    <Button variant="primary rounded-pill px-4">辦展覽</Button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-primary position-relative cartbutton "
                    onClick={() => {
                      history.replace('/booking/cart')
                    }}
                  >
                    <AiOutlineShoppingCart className="cart-icon" />
                    <span
                      className="position-absolute top-50 start-80 translate-middle badge rounded-pill bg-danger"
                      style={{ heigh: 20, width: 20, fontSize: 12 }}
                    >
                      {cartCount}
                    </span>
                  </button>

                  <button
                    className={`align-items-center d-flex pb-2 ${
                      auth === true ? 'd-none' : ''
                    }`}
                  >
                    <Link to="/users">
                      <FaUserCircle
                        className={`${auth === true ? 'd-none' : ''}`}
                      />
                    </Link>
                  </button>

                  <Link
                    to="/users"
                    className={`${auth === false ? 'd-none' : ''} mt-3`}
                  >
                    <div>
                      <figure className="figure roundedCircle">
                        <img
                          alt=""
                          src={`${process.env.REACT_APP_API_URL}/images/${userAvatar}`}
                          width="42"
                          height="42"
                          style={{
                            border: '1px solid #4153BB ',
                            borderRadius: '50%',
                          }}
                        />
                      </figure>
                    </div>
                  </Link>
                  <div class="weatherDropdown">
                    <button class="weatherDropbtn btn d-flex align-items-center p-0">
                      <img
                        src={` http://openweathermap.org/img/wn/${icon}.png`}
                        alt=""
                      />
                      <h6 className="mb-0">高雄市 {temp}°C</h6>
                    </button>
                    <div class="weatherDropdown-content">
                      <Weather />
                    </div>
                  </div>
                  <button
                    type="click"
                    className={`btn btn-primary rounded-pill `}
                    onClick={auth === true ? clickLogOut : clickLogIn}
                  >
                    {`${auth === true ? '登出' : '登入'}`}
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
