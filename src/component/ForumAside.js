import React from 'react'
import {FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import"../styles/ForumAside.scss"

function ForumAside(props){
    const btnlist = props.btn
    const btn = btnlist.map((v,i)=>{
        return(
            <button key={i} className='btn asideBtn'>{btnlist[i]}</button>
        )
    })

    
    return(
        <>
        <input type="checkbox" name="" id="sideMenu-switch"></input>
            <aside className="pb-4 px-3 forumAside">
              <label htmlFor="sideMenu-switch" className="align-self-end">
   	          <FaAngleRight className='faAngleRight'/></label>
              <Link to="/forum/addarticle" className='btn btn-primary mt-4 mb-4 py-2 px-3 rounded-pill'>新增討論</Link>
              
                 {btn}
              
            </aside>
        </>
    )
}
export default ForumAside