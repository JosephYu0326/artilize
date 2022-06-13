import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../styles/users.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Weather(props) {
  const [lat, setLat] = useState([])
  const [lng, setLong] = useState([])
  const [data, setData] = useState({
    name: '',
    temp: '',
    feels_like: '',
    humidity: '',
    description: '',
    icon: '',
  })
  const [weather1, setWeather1] = useState({ name: '', icon: '', temp: '' })

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   setLat(position.coords.latitude)
    //   setLong(position.coords.longitude)
    //   console.log('Latitude is:', lat)
    //   console.log('Longitude is:', lng)
    // })
    try {
      const fetchWeatherData = async () => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather/?q=Kaohsiung,tw&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=zh_tw`
        )
        const result = await response.json()
        const { name, weather, main } = result
        const { temp, feels_like, humidity } = main
        const { description, icon } = weather[0]

        setData({
          name: name,
          temp: temp,
          feels_like: feels_like,
          humidity: humidity,
          description: description,
          icon: icon,
        })
        setWeather1({
          name: name,
          icon: icon,
          temp: temp,
        })
        localStorage.setItem(
          'weather',
          JSON.stringify({ icon: icon, temp: temp })
        )
      }
      fetchWeatherData()
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log(data)
  const { name, temp, feels_like, humidity, description, icon } = data
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  let week = date.getDay() + 1
  if (week === 1) week = '星期日'
  if (week === 2) week = '星期一'
  if (week === 3) week = '星期二'
  if (week === 4) week = '星期三'
  if (week === 5) week = '星期四'
  if (week === 6) week = '星期五'
  if (week === 7) week = '星期六'

  return (
    <>
      <div className="card BorderRadius" style={{ width: '18rem' }}>
        <div className="card-body">
          <div className="d-flex  justify-content-between Regular">
            <div className="align-self-end">
              <h5 className=" Regular card-subtitle mb-2 text-muted">{name}</h5>
              <h6 className="Regular ">
                {year}-{month}-{day},{week}
              </h6>
            </div>
            <img
              src={` http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
              className="align-self-center"
            />
          </div>
          <div className="mt-2">
            <h6 className="Regular weather ">天氣:{description}</h6>
            <h6 className="Regulart weather">平均溫度:{temp}°C</h6>
            <h6 className="Regular weather">體感溫度:{feels_like}°C</h6>
            <h6 className="Regular weather">濕度:{humidity}%</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather
