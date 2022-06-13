import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Slider from '@mui/material/Slider'
import 'react-rangeslider/lib/index.css'

function Price(props) {
  const {
    lowPrice,
    setLowPrice,
    highPrice,
    setHighPrice,
    setPriceSearch,
    priceSubmit,
    setPriceSubmit,
  } = props

  const inputLowRef = useRef()
  const inputHighRef = useRef()

  const [value, setValue] = useState([0, 800])
  const [datas, setDatas] = useState([])

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/exhibition`)
    const results = await response.json()
    setDatas(results)
  }
  // console.log(test)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (priceSubmit) {
      handleSubmit2()
      setPriceSubmit(false)
    }
  }, [priceSubmit])

  const handleChange = (event, newValue) => {
    setLowPrice(newValue[0])
    setHighPrice(newValue[1])
    setValue(newValue)
  }

  function handleSubmit(e) {
    e.preventDefault()
    let high = parseInt(document.querySelector('#highprice').value)
    let low = parseInt(document.querySelector('#lowprice').value)

    setHighPrice(high)
    setLowPrice(low)
    if (high && low) {
      setPriceSearch(true)
    } else {
      setPriceSearch(false)
    }
  }
  function handleSubmit2() {
    let low = parseInt(inputLowRef.current.value)
    let high = parseInt(inputHighRef.current.value)

    setHighPrice(high)
    setLowPrice(low)
    if (high && low) {
      setPriceSearch(true)
    } else {
      setPriceSearch(false)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="h4 my-0">價錢＄</div>
        {lowPrice ? lowPrice : value[0]}~{highPrice ? highPrice : value[1]}
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

      <form className="mt-2 position-relative" onSubmit={handleSubmit}>
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
              ref={inputLowRef}
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
              ref={inputHighRef}
            />
          </div>
        </div>
        <button type="submit" className="assure-btn btn">
          確定
        </button>
      </form>
    </>
  )
}

function valuetext(value) {
  return `${value}$`
}

export default Price
