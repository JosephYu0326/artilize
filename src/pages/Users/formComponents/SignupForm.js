import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/users.scss'
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import useForm from './useForm'
import validate from './validateInfo'

function SignUpForm({ submitForm }) {
  const { handleChange, addUserData, handleSubmit, errors } = useForm(
    validate,
    submitForm
  )

  return (
    <>
      <form id="addUserForm" onSubmit={handleSubmit} noValidate>
        <div style={{ paddingLeft: '12px' }}>
          <h4 className="ph_title row ExtraBold text-primary mb-4">
            新會員註冊
          </h4>
        </div>
        <div id="input-text" className="mb-3 usersContentcolor Regular">
          <input
            type="text"
            className="form-control "
            name="userAccount"
            placeholder="帳號"
            value={addUserData.userAccount}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text text-secondary">
            {errors.userAccount && <span>{errors.userAccount}</span>}
          </div>
        </div>
        <div id="input-text" className="mb-3 usersContentcolor Regular">
          <input
            type="email"
            className="form-control "
            name="userEmail"
            placeholder="信箱"
            value={addUserData.userEmail}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text text-secondary">
            {errors.userEmail && <span>{errors.userEmail}</span>}
          </div>
        </div>
        <div id="input-text" className="mb-3 usersContentcolor Regular">
          <input
            type="password"
            className="form-control "
            name="userPassword"
            placeholder="密碼"
            value={addUserData.userPassword}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text text-secondary">
            {errors.userPassword && <span>{errors.userPassword}</span>}
          </div>
        </div>
        <div id="input-text" className="mb-3 usersContentcolor Regular">
          <input
            type="password"
            className="form-control "
            name="userConfirmPassword"
            placeholder="請再次輸入密碼"
            value={addUserData.userConfirmPassword}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text text-secondary">
            {errors.userConfirmPassword && (
              <span>{errors.userConfirmPassword}</span>
            )}
          </div>
        </div>
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
