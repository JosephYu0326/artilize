import { height } from '@mui/system'
import React from 'react'
import { useRef } from 'react'
import { act } from 'react-dom/test-utils'

function AccordionItem(active) {
  const data = ['內容1', '內容2', '內容3', '內容4']
  const frameheight = useRef()
  const dataAll = data.map((v, i) => {
    return <div key={i}>{data[i]}</div>
  })
  return (
    <>
      <div
        ref={frameheight}
        style={
          active ? { height: frameheight.scrollHeight } : { height: '0px' }
        }
        className="categoryAllText"
      >
        {dataAll}
      </div>
    </>
  )
}

export default AccordionItem
