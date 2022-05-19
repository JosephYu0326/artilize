import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import '../styles/AsideBar.scss'

function AsideBar(props) {
  return (
    <>
      <input type="checkbox" name="" id="sideMenu-switch"></input>
      <aside className="px-3 asideBar">
        <label
          htmlFor="sideMenu-switch"
          className="align-self-end justify-content-center"
        >
          <FaAngleRight className="faAngleRight" />
        </label>
        <button className="btn asideBtn">{props.btn1}</button>
        <button className="btn asideBtn">{props.btn2}</button>
        <button className="btn asideBtn">{props.btn3}</button>
        <button className="btn asideBtn">{props.btn4}</button>
        <button className="btn asideBtn">{props.btn5}</button>
        <button className="btn asideBtn">{props.btn6}</button>
      </aside>
    </>
  )
}
export default AsideBar
