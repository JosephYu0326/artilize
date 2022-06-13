import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import bwLogo from '../images/ARTILIZE_logo_bl.svg'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaAngleUp,
} from 'react-icons/fa'
import '../styles/HeaderAndFooter.scss'

function Footer(props) {
  return (
    <footer className="position-relative">
      {/* social media */}
      <div className="fourword">
        <a className="displayN" href="/">
          <img className=" mb-3" src={bwLogo} alt="websiteLogo" />
        </a>
        <div className="d-flex footerSocial justify-content-between">
          <div>
            <a href="https://zh-tw.facebook.com/">
              <FaFacebookSquare className="txtGray" />
            </a>
          </div>
          <div className="">
            <a href="https://twitter.com">
              <FaTwitterSquare className="txtGray" />
            </a>
          </div>
          <div>
            <FaInstagramSquare className="txtGray" />
          </div>
        </div>
      </div>
      <a href="#top">
        <FaAngleUp className="displayN position-absolute top-0 start-100 translate-middle" />
      </a>
      {/* four word */}
      <div className="fourword">
        <div className="d-flex align-items-center">
          <div>
            <Link to="/PrivacyPolicy" className="txtGray">
              隱私政策
            </Link>
            <a href="#" className="txtGray">
              購票須知
            </a>
            {/* <a href="#" className="txtGray">
              關於我們
            </a> */}
            <Link to="/Newsletter" className="txtGray">
              訂閱電子報
            </Link>
          </div>
          <div>
            <Button variant="outline-primary rounded-pill">聯絡我們</Button>
          </div>
        </div>

        {/* copyright */}
        <div className="pMinimum copyright footerFont mt-3 txtGray">
          ©藝化Artilize 2022
        </div>
      </div>
    </footer>
  )
}

export default Footer
