//廠商後臺
import React from 'react'
import { Link } from 'react-router-dom'

function B2B(props) {
  return (
    <>
      <div>廠商後臺</div>
      <Link to="/b2b/addability">建立新活動資料</Link>
      <br />
    </>
  )
}

export default B2B
