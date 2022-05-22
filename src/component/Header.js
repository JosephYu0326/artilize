import React, { useState } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";
import "../styles/HeaderAndFooter.scss";
import "../styles/SearchBar.scss";

function Header(props) {
  const [collapseSearch, setCollapseSearch] = useState(
    "navbar-collapse collapse"
  );

  function clickToSearch() {
    if (collapseSearch === "navbar-collapse collapse") {
      setCollapseSearch("navbar-collapse collapse show");
    } else {
      setCollapseSearch("navbar-collapse collapse");
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
    </>
  );
}

export default Header;
