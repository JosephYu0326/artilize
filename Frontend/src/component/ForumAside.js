import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import '../styles/ForumAside.scss'

function ForumAside(props) {
  const location = useLocation()
  const urlSearchParams = new URLSearchParams(location.search)
  const currentTopic = urlSearchParams.get('topic')
  const btnlist = props.btn
  const btn = btnlist.map((v, i) => {
    return (
      <Link
        key={i}
        to={`forum?topic=${btnlist[i].thema}`}
        className={`btn asideBtn ${
          currentTopic === btnlist[i].thema ? 'active' : ''
        }`}
      >
        {btnlist[i].thema}
      </Link>
    )
  })

  return (
    <>
      <input type="checkbox" name="" id="sideMenu-switch"></input>
      <aside className="pb-4 px-3 forumAside">
        <label htmlFor="sideMenu-switch" className="align-self-end">
          <FaAngleRight className="faAngleRight" />
        </label>
        <Link
          to="/forum/addarticle"
          className="btn btn-primary mt-4 mb-4 py-2 px-3 rounded-pill"
        >
          新增討論
        </Link>
        {btn}
        <Link to={`/forum`} className="btn asideBtn">
          所有討論
        </Link>
      </aside>
    </>
  )
}
export default ForumAside
