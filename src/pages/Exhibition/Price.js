import React from 'react'
import { useState } from 'react'
import Slider from '@mui/material/Slider'
import 'react-rangeslider/lib/index.css'

function Price() {
  const [value, setValue] = useState([20, 800])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="h4 my-0">價錢＄</div>
        {value[0]}~{value[1]}
      </div>
      <Slider
        getAriaLabel={() => 'Temperature'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={2000}
        step={50}
      />

      <form className="mt-2 position-relative">
        <div className="justify-content-between d-flex">
          <div>
            <label htmlFor="lowprice" className="form-label">
              最低
            </label>
            <input
              type="text"
              className="form-control priceinput"
              id="lowprice"
              placeholder="0"
            />
          </div>
          <div>
            <label htmlFor="highprice" className="form-label">
              最高
            </label>
            <input
              type="text"
              className="form-control priceinput"
              id="highprice"
              placeholder="2000"
            />
          </div>
        </div>
      </form>
    </>
  )
}

function valuetext(value) {
  return `${value}$`
}

export default Price
