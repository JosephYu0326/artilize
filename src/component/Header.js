import React, { useState } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";
import "../styles/HeaderAndFooter.scss";
import "../styles/SearchBar.scss";

function Header(props) {
  // const [collapse, setCollapse] = useState("navbar-collapse collapse");
  const [collapseSearch, setCollapseSearch] = useState(
    "navbar-collapse collapse"
  );
  // const [ariaExpanded, setAriaExpanded] = useState("false");
  // const [navbarToggler, setNavbarToggler] = useState(
  //   "navbar-toggler collapsed"
  // );

  // function handleClick() {

  //   if (collapse === "navbar-collapse collapse") {
  //     setCollapse("navbar-collapse collapse show");
  //     setAriaExpanded("true");
  //     setNavbarToggler("navbar-toggler");

  //   } else {
  //     setCollapse("navbar-collapse collapse");
  //     setAriaExpanded("false");
  //     setNavbarToggler("navbar-toggler collapsed");

  //   }
  // }

  function clickToSearch() {
    if (collapseSearch === "navbar-collapse collapse") {
      setCollapseSearch("navbar-collapse collapse show");
    } else {
      setCollapseSearch("navbar-collapse collapse");
    }
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className=" justify-content-between">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand
            href="/"
            className="d-flex align-items-center"
            style={{ height: 45, width: 45 }}
          >
            <img
              alt="/"
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
              <Nav.Link href="/exhibition">
                <h6 className="">展覽活動</h6>
              </Nav.Link>
              <Nav.Link href="/product">
                <h6 className="">商品</h6>
              </Nav.Link>
              <Nav.Link href="/forum">
                <h6 className="">討論區</h6>
              </Nav.Link>

              <li className="nav-item">
                <div className="homeSearchBar justify-content-center align-items-stretch">
                  <SearchBar />
                  <Button variant="primary rounded-pill px-4">
                    <Link to="/b2b">辦展覽</Link>
                  </Button>
                  <button className="align-items-center d-flex pb-2">
                    <Link to="/users"><FaUserCircle /></Link>
                  </button>
                </div>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 耍笨版本 */}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light  justify-content-between">
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
            style={{ height: 45, width: 45 }}
          >
            <img
              alt="/"
              src={logo}
              width="45"
              height="45"
              className="d-inline-block"
            />
          </Navbar.Brand>
          <div className="d-flex justify-content-center align-items-center">
            <FaSearch className="displayY fs-2" onClick={clickToSearch} />
          </div> */}



      {/* <div className={collapse} id="navbarTogglerDemo03">
            <ul className="test navbar-nav mx-auto mb-5 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link to="/exhibition">
                  <h6 className="">展覽活動</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product">
                  <h6 className="Regular">商品</h6>
                </Link>
              </li>

              <li className="nav-item ">
                <Link to="/forum">
                  <h6 className="Regular align-items-center">討論</h6>
                </Link>
              </li>

              <li className="nav-item">
                <div className="homeSearchBar justify-content-center align-items-stretch">
                  <SearchBar />
                  <form className="d-flex">
                    <input type="search" placeholder="全站搜尋" />
                    <button type="submit">Search</button>
                  </form>
                  <Button variant="primary rounded-pill px-4">辦展覽</Button>
                  <button className="align-items-center d-flex pb-2">
                    <Link to="/forum">
                      <FaUserCircle />
                    </Link>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default Header;
