import React from 'react'
import {FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import"../styles/ForumAside.scss"

function AsideBar(props){
    
    return(
        <>
        <input type="checkbox" name="" id="sideMenu-switch"></input>
            <aside className="pb-4 px-3 forumAside">
              <label htmlFor="sideMenu-switch" className="align-self-end">
   	          <FaAngleRight className='faAngleRight'/></label>
              <Link to="/forum/addarticle" className='btn btn-primary mt-4 mb-4 py-2 px-3 rounded-pill'>{props.btn}</Link>
              <button  className='btn asideBtn'>{props.btn1}</button>
              <button className='btn asideBtn'>{props.btn2}</button>
              <button className='btn asideBtn'>{props.btn3}</button>
              <button className='btn asideBtn'>{props.btn4}</button>
            </aside>
        </>
    )
}
export default AsideBar