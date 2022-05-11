//樣式
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import '../styles/style.scss'
function Style(props) {
  return (
    <>
      <Container className="mt-3">
        <h1>樣式表</h1>
        <Button variant="primary">主顏色</Button>
        <br />
        <br />
        <Button variant="secondary">次顏色</Button>
        <br />
        <br />
        <div>
          <h1>顏色</h1>
        </div>
        <div className="d-flex justify-content-between">
          <div className="PurpleBlue">
            <h3 style={{ color: 'white' }}>PurpleBlue</h3>
          </div>
          <div className="WarnYellow">
            <h3>WarnYellow</h3>
          </div>
          <div className="DarkGrey">
            <h3>DarkGrey</h3>
          </div>
          <div className="MiddleGrey">
            <h3>MiddleGrey</h3>
          </div>
          <div className="LightGrey">
            <h3>LightGrey</h3>
          </div>
          <div className="LighterGrey">
            <h3>LighterGrey</h3>
          </div>
          <div className="BackgaroudColor">
            <h3>BackgaroudColor</h3>
          </div>
        </div>
        <br />
        <br />
        <div className="BorderRadius">BorederRaidus:20px</div>
        <br />
        <br />
        <div className="BoxShadow">BoxShadow</div>
        <br />
        <br />
        <h1 className="ExtraBold">h1ExtraBold</h1>
        <h1 className="SemiBold">h1SemiBold</h1>
        <h1 className="Regular">h1Regular</h1>
        <br />
        <br />
        <h2 className="ExtraBold">h2ExtraBold</h2>
        <h2 className="SemiBold">h2SemiBold</h2>
        <h2 className="Regular">h2Regular</h2>
        <br />
        <br />
        <h3 className="ExtraBold">h3ExtraBold</h3>
        <h3 className="SemiBold">h3SemiBold</h3>
        <h3 className="Regular">h3Regular</h3>
        <br />
        <br />
        <h4 className="ExtraBold">h4ExtraBold</h4>
        <h4 className="SemiBold">h4SemiBold</h4>
        <h4 className="Regular">h4Regular</h4>
        <br />
        <br />
        <h5 className="ExtraBold">h5ExtraBold</h5>
        <h5 className="SemiBold">h5SemiBold</h5>
        <h5 className="Regular">h5Regular</h5>
        <br />
        <br />
        <h6 className="ExtraBold">h6ExtraBold</h6>
        <h6 className="SemiBold">h6SemiBold</h6>
        <h6 className="Regular">h6Regular</h6>
        <br />
        <br />
        <p className="ExtraBold pBig">pBigExtraBold</p>
        <p className="SemiBold pBig">pBigSemiBold</p>
        <p className="Regular pBig">pBigRegular</p>
        <br />
        <br />
        <p className="ExtraBold pRegular">pRegularExtraBold</p>
        <p className="SemiBold pRegular">pRegularSemiBold</p>
        <p className="Regular pRegular">pRegularRegular</p>
        <br />
        <br />
        <p className="ExtraBold pSmall">pSmallExtraBold</p>
        <p className="SemiBold pSmall">pSmallSemiBold</p>
        <p className="Regular pSmall">pSmallRegular</p>
        <br />
        <br />
        <p className="ExtraBold pLabel">pLabelExtraBold</p>
        <p className="SemiBold pLabel">pLabelSemiBold</p>
        <p className="Regular pLabel">pLabelRegular</p>
        <br />
        <br />
        <p className="ExtraBold pMinimum">pMinimumExtraBold</p>
        <p className="SemiBold pMinimum">pMinimumSemiBold</p>
        <p className="Regular pMinimum">pMinimumRegular</p>
        <br />
        <br />
      </Container>
    </>
  )
}

export default Style
