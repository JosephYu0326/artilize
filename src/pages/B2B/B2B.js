//廠商後臺
import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react'

import B2Bliste from './B2Bliste'
import B2Btotal from './B2Btotal'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function B2B(props) {
  return (
    <>
      <div>廠商後臺</div>
      <Link to="/b2b/addability">建立新活動資料</Link>
      <Container fluid="md">
        <Row>
          <Col>123</Col>
        </Row>
        <Row>
          <Col>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="start" title={`已發布(${''})`}>
                <B2Btotal />
                <B2Bliste />
              </Tab>
              <Tab eventKey="end" title={`已結束(${''})`}></Tab>
              <Tab eventKey="all" title={`全部(${''})`}></Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      ;
    </>
  )
}

export default B2B
