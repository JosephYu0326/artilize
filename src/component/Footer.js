import React from 'react'
import { Button } from 'react-bootstrap'
import bwLogo from '../images/ARTILIZE_logo_bl.svg'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa'
import '../styles/HeaderAndFooter.scss'

function Footer(props) {
  return (
    <footer>
      {/* social media */}
      <div className="fourword">
        <a className="displayN" href="#">
          <img className=" mb-3" src={bwLogo} alt="websiteLogo" />
        </a>
        <div className="d-flex footerSocial justify-content-between">
          <div>
            <FaFacebookSquare className="txtGray" />
          </div>
          <div className="">
            <FaTwitterSquare className="txtGray" />
          </div>
          <div>
            <FaInstagramSquare className="txtGray" />
          </div>
        </div>
      </div>
      {/* four word */}
      <div className="fourword">
        <div className="d-flex align-items-center">
          <div>
            <a href="#" className="txtGray">
              隱私政策
            </a>
            <a href="#" className="txtGray">
              購票須知
            </a>
            <a href="#" className="txtGray">
              關於我們
            </a>
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
