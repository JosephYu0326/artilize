import React from 'react'
import {FaStar,FaAngleLeft, FaAngleRight, FaCommentDots } from 'react-icons/fa'

function AsideBar(){
    return(
        <>
        <input type="checkbox" name="" id="sideMenu-switch"></input>
            <aside className="d-flex flex-column align-items-center pb-5 px-3 asideBar">
              <label for="sideMenu-switch" className="align-self-end">
   	          <FaAngleLeft className='faAngleLeft'/></label>
              <button className='btn btn-primary mt-5 mb-4 rounded-pill'>{"新增討論"}</button>
              <button className='btn asideBtn'>{"逛展攻略"}</button>
              <button className='btn asideBtn'>{"逛展攻略"}</button>
              <button className='btn asideBtn'>{"逛展攻略"}</button>
              <button className='btn asideBtn'>{"逛展攻略"}</button>
            </aside>
        </>
    )
}
export default AsideBar