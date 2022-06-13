//建立新活動資料
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function B2BStartCount(props) {
  const { startNumberEx, endNumberEx } = props
  console.log('startNumberEx', startNumberEx)
  return (
    <>
      <div className="row style = {{ border: '1px solid' }}">
        <div className="d-flex bd-highlight style = {{ border: '1px solid' }}">
          <div className="p-2 flex-grow-1 bd-highlight ">
            共 {startNumberEx} 檔展覽活動
          </div>
          <div className="p-2 bd-highlight"></div>
          <div className="p-2 bd-highlight"></div>
        </div>
      </div>
    </>
  )
}

export default B2BStartCount
