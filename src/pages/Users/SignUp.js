//新會員註冊
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react'

import SignUpForm from './formComponents/SignupForm'

const SignUp = () => {
  return (
    <>
      <Header />
      <div className="bg-background">
        <section>
          <Container>
            <Row className="d-flex justify-content-center align-items-center usersRow">
              <div
                className=" BorderRadius usersBackground p-5"
                style={{ maxWidth: '568px', minWidth: '390px' }}
              >
                <SignUpForm />
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

export default SignUp
