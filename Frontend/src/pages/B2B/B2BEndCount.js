//建立新活動資料
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function B2BEndCount(props) {
  const { endNumberEx } = props
  console.log('endNumberEx', endNumberEx)
  return (
    <>
      <div className="row ">
        <div className="d-flex bd-highlight ">
          <div className="p-2 flex-grow-1 bd-highlight ">
            共 {endNumberEx} 檔展覽活動
          </div>
          <div className="p-2 bd-highlight"></div>
          <div className="p-2 bd-highlight"></div>
        </div>
      </div>
    </>
  )
}

export default B2BEndCount
