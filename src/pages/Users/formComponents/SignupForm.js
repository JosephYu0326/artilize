import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/users.scss'
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import UserAccountValidate from './SignUpValidate/UserAccountValidate'
import userEmailValidate from './SignUpValidate/userEmailValidate'
import userPasswordValidate from './SignUpValidate/userPasswordValidate'
import ReCAPTCHA from 'react-google-recaptcha'

function SignUpForm({ submitForm }) {
  const {
    handleChange,
    addUserData,
    handleSubmit,
    errors,
    userAccountBlur,
    userEmailBlur,
    userPasswordBlur,
    userConfirmPasswordBlur,
    authChange,
  } = useForm(
    validate,
    submitForm,
    UserAccountValidate,
    userEmailValidate,
    userPasswordValidate
  )

  return (
    <>
      <form
        id="addUserForm"
        onSubmit={handleSubmit}
        noValidate
        className="d-flex flex-column"
      >
        <div style={{ paddingLeft: '12px' }}>
          <h4 className="ph_title row ExtraBold text-primary mb-4">
            新會員註冊
          </h4>
        </div>
        <div id="input-text" className=" usersContentcolor Regular">
          <input
            type="text"
            className={`form-control BorderRadius ${
              errors.userAccount ? `is-invalid` : ``
            }`}
            name="userAccount"
            placeholder="帳號"
            value={addUserData.userAccount}
            onChange={handleChange}
            onBlur={userAccountBlur}
          />
          <div
            id="emailHelp"
            className="form-text text-secondary mt-1 mb-1"
            style={{ height: '21px' }}
          >
            {errors.userAccount && <span>{errors.userAccount}</span>}
          </div>
        </div>
        <div id="input-text" className=" usersContentcolor Regular">
          <input
            type="email"
            className={`form-control BorderRadius ${
              errors.userEmail ? `is-invalid` : ``
            }`}
            name="userEmail"
            placeholder="信箱"
            value={addUserData.userEmail}
            onBlur={userEmailBlur}
            onChange={handleChange}
          />
          <div
            id="emailHelp"
            className="form-text text-secondary mt-1 mb-1"
            style={{ height: '21px' }}
          >
            {errors.userEmail && <span>{errors.userEmail}</span>}
          </div>
        </div>
        <div id="input-text" className="usersContentcolor Regular">
          <input
            type="password"
            className={`form-control  BorderRadius ${
              errors.userPassword ? `is-invalid` : ``
            } `}
            name="userPassword"
            placeholder="密碼"
            value={addUserData.userPassword}
            onChange={handleChange}
            onBlur={userPasswordBlur}
          />
          <div
            id="emailHelp"
            className="form-text text-secondary mt-1 mb-1"
            style={{ height: '21px' }}
          >
            {errors.userPassword && <span>{errors.userPassword}</span>}
          </div>
        </div>
        <div id="input-text" className=" usersContentcolor Regular">
          <input
            type="password"
            className={`form-control BorderRadius ${
              errors.userConfirmPassword ? `is-invalid` : ``
            } `}
            name="userConfirmPassword"
            placeholder="請再次輸入密碼"
            value={addUserData.userConfirmPassword}
            onChange={handleChange}
            onBlur={userConfirmPasswordBlur}
          />
          <div
            id="emailHelp"
            className="form-text text-secondary mt-1 mb-1"
            style={{ height: '21px' }}
          >
            {errors.userConfirmPassword && (
              <span>{errors.userConfirmPassword}</span>
            )}
          </div>
        </div>
        <ReCAPTCHA
          className="align-self-center mb-3"
          sitekey={`${process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY}`}
          onChange={authChange}
        />
        <div className="d-flex justify-content-around">
          <button type="submit" className="btn btn-primary rounded-pill mt-4">
            送出
          </button>
        </div>
      </form>
    </>
  )
}
export default SignUpForm
