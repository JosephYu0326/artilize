import React from 'react'
import {FaStar,FaAngleRight } from 'react-icons/fa'

function AsideBar(){
    return(
        <>
        <input type="checkbox" name="" id="sideMenu-switch"></input>
            <aside className="pb-5 px-3 asideBar">
              <label for="sideMenu-switch" className="align-self-end">
   	          <FaAngleRight className='faAngleRight'/></label>
              <button className='btn btn-primary mt-4 mb-4 py-2 px-3 rounded-pill'>{"新增討論"}</button>
              <button className='btn asideBtn'>{"逛展攻略"}</button>
              <button className='btn asideBtn'>{"逛展攻略"}</button>
              <button className='btn asideBtn'>{"逛展攻略"}</button>
              <button className='btn asideBtn'>{"逛展攻略"}</button>
            </aside>
        </>
    )
}
export default AsideBar
