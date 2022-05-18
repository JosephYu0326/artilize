import React, { useState, useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";
import "../styles/HeaderAndFooter.scss";
import "../styles/SearchBar.scss";

function Header(props) {
  const [collapse, setCollapse] = useState("navbar-collapse collapse");
  const [collapseSearch, setCollapseSearch] = useState(
    "navbar-collapse collapse"
  );
  const [ariaExpanded, setAriaExpanded] = useState("false");
  const [navbarToggler, setNavbarToggler] = useState(
    "navbar-toggler collapsed"
  );

  useEffect(() => {});

  function handleClick() {
    if (collapse === "navbar-collapse collapse") {
      setCollapse("navbar-collapse collapse show");
      setAriaExpanded("true");
      setNavbarToggler("navbar-toggler");
    } else {
      setCollapse("navbar-collapse collapse");
      setAriaExpanded("false");
      setNavbarToggler("navbar-toggler collapsed");
    }
  }
  function clickToSearch() {
    if (collapseSearch === "navbar-collapse collapse") {
      setCollapseSearch("navbar-collapse collapse show");
    } else {
      setCollapseSearch("navbar-collapse collapse");
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  justify-content-between">
        <div className="container">
          <button
            className={navbarToggler}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded={ariaExpanded}
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Navbar.Brand
            href="/"
            className="d-flex align-items-center"
            style={{ height: 45, width: 45}}
          >
            <img
              alt=""
              src={logo}
              width="45"
              height="45"
              className="d-inline-block"
            />
          </Navbar.Brand>
          <div className="d-flex justify-content-center align-items-center">
            <FaSearch className="displayY fs-2" onClick={clickToSearch} />
          </div>

          <div className={collapseSearch}>
            <ul className="displayY mx-auto m-5 mb-lg-0 align-items-center list-unstyled">
              <li className="nav-item">
                <h6 className="">
                  {" "}
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
                </h6>
              </li>
            </ul>
          </div>

          <div className={collapse} id="navbarTogglerDemo03">
            <ul className="navbar-nav mx-auto mb-5 mb-lg-0 align-items-center">
              <li className="nav-item">
                {/* <a className="nav-link" aria-current="page" href="/exhibition"> */}
                <Link to="/exhibition">
                  <h6 className="">展覽活動</h6>
                </Link>
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/product"> */}
                <Link to="/product">
                  <h6 className="Regular">商品</h6>
                </Link>
                {/* </a> */}
              </li>

              <li className="nav-item ">
                {/* <a className="nav-link" href="/forum"> */}
                <Link to="/forum">
                  <h6 className="Regular align-items-center">討論</h6>
                </Link>
                {/* </a> */}
              </li>

              <li className="nav-item">
                <div className="homeSearchBar justify-content-center align-items-stretch">
                  <SearchBar />
                  {/* <form className="d-flex">
              <input type="search" placeholder="全站搜尋" />
              <button type="submit">Search</button>
            </form> */}
                  <Button variant="primary rounded-pill px-4">辦展覽</Button>
                  <button className="align-items-center d-flex pb-2"><Link to="/forum">
                    <FaUserCircle /></Link>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* 忠憲寫的 */}
      {/* <Navbar bg="light" className="text-center">
        <Container style={{ width: 1440 }}>
          <Navbar.Brand
            href="/"
            className="d-flex align-items-center"
            style={{ height: 45, width: 45 }}
          >
            <img
              alt=""
              src={logo}
              width="45"
              height="45"
              className="d-inline-block"
            />
          </Navbar.Brand>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ gap: 99 }}
          >
            <Link to="/exhibition">
              <h6 className="Regular">展覽活動</h6>
            </Link>
            <Link to="/product">
              <h6 className="Regular">商品</h6>
            </Link>
            <Link to="/forum">
              <h6 className="Regular">討論區</h6>
            </Link>
          </div>
          <div className="homeSearchBar justify-content-center align-items-stretch">
            <SearchBar />
            <form className="d-flex">
              <input type="search" placeholder="全站搜尋" />
              <button type="submit">Search</button>
            </form> 
            <Button variant="primary rounded-pill px-4">辦展覽</Button>
            <button className="d-flex">
              <FaUserCircle />
            </button>
          </div>
        </Container>
      </Navbar> */}
    </>
  );
}

export default Header;
