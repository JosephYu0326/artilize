//展覽地圖搜尋
//https://medium.com/seokjunhong/how-to-build-a-google-maps-web-application-using-react-js-google-maps-api-ea8036029e63
//https://www.youtube.com/watch?v=UKdQjQX1Pko
import React, { useState, useEffect, useRef } from 'react'
import { Link, render, useHistory } from 'react-router-dom'
import { Container, Row, Spinner } from 'react-bootstrap'
import '../../styles/MapSearch.scss'
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import Header from '../../component/Header'
import InfiniteScroll from 'react-infinite-scroll-component'
import Geocode from 'react-geocode'
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'
import Footer from '../../component/Footer'
// const center = { lat: 22.6281, lng: 120.2927 }

function MapSearch(props) {
  const [activeMarker, setActiveMarker] = useState(null)
  const [datas, setDatas] = useState([])
  const [datas1, setDatas1] = useState([])
  const [exhibitiondatas, setExhibitionDatas] = useState([])
  const [abilitydatas, setAbilityDatas] = useState([])
  const [markerID, setMarkerID] = useState('')
  const [center, setCenter] = useState({ lat: 22.6281, lng: 120.2927 })
  const [activeHighlight, setActiveHighlight] = useState(-1)
  const [mapSearchButton, setMapSearchButton] = useState('all')
  const [MapStyle, setMapStyle] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const mapSearchInput = useRef()
  const fetchExhibitionData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/MapSearch`)
    const results = await response.json()
    setDatas(results)
    setDatas1(results)
    setExhibitionDatas(results)
    console.log(results)
  }
  const history = useHistory()
  // const fetchAbilityData = async () => {
  //   const response1 = await fetch(
  //     `${process.env.REACT_APP_API_URL}/MapSearch/ability`
  //   )
  //   const results1 = await response1.json()
  //   setAbilityDatas(results1)
  // }
  const fetchMapStyle = async () => {
    const responseMapStyle = await fetch('http://localhost:3000/MapStyle.json')
    const resultMapStyle = await responseMapStyle.json()
    console.log(resultMapStyle)
    setMapStyle(resultMapStyle)
  }
  useEffect(() => {
    fetchExhibitionData()
  }, [])
  // useEffect(() => {
  //   fetchAbilityData()
  // }, [])
  useEffect(() => {
    fetchMapStyle()
  }, [])
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })
  if (!isLoaded) {
    return 'Unable to load googlle_maps_api'
  }
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return
    }
    setActiveMarker(marker)
  }
  // console.log(markerID)
  // console.log(MapStyle)

  // const handleOnLoad = (map) => {
  //   // eslint-disable-next-line no-undef
  //   const bounds = new google.maps.LatLngBounds()
  //   markers.forEach(({ position }) => bounds.extend(position))
  //   map.fitBounds(bounds)
  // }
  const mapSpinner = (
    <div
      style={{ height: '77.5vh', overflow: 'auto' }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" variant="primary" />
    </div>
  )
  console.log(datas)
  // console.log(JSON.parse(datas[0].longitude))
  const mapList = (
    <div id="scrollableDiv" style={{ height: '77.5vh', overflow: 'auto' }}>
      {datas.map((exhibition, i) => {
        const {
          id,
          aName,
          start,
          end,
          direction,
          city,
          mName,
          longitude,
          latitude,
          pic1,
        } = exhibition
        return (
          <div
            key={i}
            style={{ cursor: 'pointer' }}
            onClick={function () {
              setMarkerID(id)
              setCenter({
                lat: parseFloat(latitude),
                lng: parseFloat(longitude),
              })
              handleActiveMarker(id)
              setActiveHighlight(-1)
            }}
            id={`MapCard${id}`}
          >
            <div
              className={`card mb-3 ${
                activeHighlight === id ? 'mapCardActive' : ''
              }`}
            >
              <div className="row g-0">
                <div className="col-md-3 col-sm-12 mapImg d-flex align-items-center justify-content-center">
                  <img
                    src={`${process.env.REACT_APP_API_URL}/stylesheets/images/${pic1}`}
                    className="img-fluid rounded-start  "
                    alt="..."
                    style={{ height: 130, width: 100 }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body d-flex flex-column justify-content-around">
                    <h6 className="card-title SemiBold">{aName}</h6>
                    <div className="d-flex">
                      <FaMapMarkerAlt />
                      <p className="card-text pRegular">{mName}</p>
                    </div>
                    <div className="d-flex">
                      <FaCalendarAlt />
                      <p className="card-text pRegular">
                        {start}~{end}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div className="displayN" style={{ height: '61vh' }}></div>
    </div>
  )
  const region = ['北部', '中部', '南部', '東部', '離島']

  return (
    <>
      <Header />
      <Container fluid>
        <div className="row">
          {/* 清單 */}
          <section className="col-xxl-3 col-xl-4 col-lg-5 col-md-6  mapSearchList d-flex flex-column justify-content-evenly align-items-stretch mt-3">
            <div className="mapSearchBar d-flex  align-items-stretch">
              <form
                className="d-flex align-items-center justify-content-center "
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder=""
                  onChange={function () {
                    // setMapSearchText(mapSearchInput.current.value)
                    const mapSearchInputValue = mapSearchInput.current.value
                    console.log(mapSearchInputValue)
                    const mapSearchResult = datas1.filter(
                      (v, i) =>
                        v.mName.includes(mapSearchInputValue) ||
                        v.aName.includes(mapSearchInputValue)
                    )
                    setIsLoading(true)
                    if (mapSearchResult.length > 0) {
                      setIsLoading(false)
                      setDatas(mapSearchResult)
                      // console.log(mapSearchResult)
                      const resultCenter = {
                        lat: parseFloat(mapSearchResult[0].latitude),
                        lng: parseFloat(mapSearchResult[0].longitude),
                      }
                      // console.log(resultCenter)
                      setCenter(resultCenter)
                      setActiveMarker(null)
                      console.log(datas)
                    } else {
                      setTimeout(() => {
                        setIsLoading(false)
                      }, 3000)
                      setDatas([
                        {
                          aName: '查無資料',
                          mName: '查無資料',
                          start: '查無資料',
                          pic1: 'notFound.png',
                        },
                      ])
                    }
                    // Geocode.setApiKey(
                    //   `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY1}`
                    // )
                    // Geocode.setLanguage('zh-TW')
                    // Geocode.setRegion('tw')
                    // Geocode.setLocationType('ROOFTOP')
                    // Geocode.enableDebug()
                    // Geocode.fromAddress(mapSearchInputValue).then(
                    //   (response) => {
                    //     const { lat, lng } =
                    //       response.results[0].geometry.location
                    //     console.log(lat, lng)
                    //   },
                    //   (error) => {
                    //     console.error(error)
                    //   }
                    // )
                  }}
                  ref={mapSearchInput}
                />
                <button type="submit">Search</button>
              </form>
            </div>
            <div className="mapButton d-flex justify-content-evenly mt-2 mb-2">
              <button
                className={`btn ${
                  mapSearchButton === 'all' ? 'btn-primary' : 'btn-light'
                }`}
                onClick={function () {
                  setMapSearchButton('all')
                  setDatas(datas1)
                  // setDatas1(abilitydatas)
                  setActiveMarker(null)
                  setCenter({
                    lat: parseFloat(datas1[0].latitude),
                    lng: parseFloat(datas1[0].longitude),
                  })
                  setActiveHighlight(-1)
                  document
                    .getElementById(`scrollableDiv`)
                    .firstChild.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest',
                    })
                }}
              >
                全部
              </button>
              {region.map((a, b) => {
                return (
                  <button
                    key={b}
                    className={`btn ${
                      mapSearchButton === `${a}` ? 'btn-primary' : 'btn-light'
                    }`}
                    onClick={function () {
                      setMapSearchButton(`${a}`)
                      const changeRegion = datas1.filter((v, i) =>
                        v.direction.includes(`${a}`)
                      )
                      if (changeRegion.length > 0) {
                        setDatas(changeRegion)
                        // setDatas1(exhibitiondatas)
                        setActiveMarker(null)
                        setCenter({
                          lat: parseFloat(changeRegion[0].latitude),
                          lng: parseFloat(changeRegion[0].longitude),
                        })
                        setActiveHighlight(-1)
                        document
                          .getElementById(`scrollableDiv`)
                          .firstChild.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            // inline: 'start',
                          })
                      } else {
                        setDatas([])
                        setCenter({ lat: 22.6281, lng: 120.2927 })
                      }
                    }}
                  >
                    {a}
                  </button>
                )
              })}
            </div>
            {isLoading ? mapSpinner : mapList}
          </section>
          {/* 地圖 */}
          <section className="col-xxl-9 col-xl-8 col-lg-7 col-md-6 mapSearchMap ps-0 pe-0">
            <GoogleMap
              center={center}
              zoom={14}
              mapContainerStyle={{ width: '75vw', height: '90vh' }}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                clickableIcons: false,
                disableDefaultUI: true,
                styles: MapStyle,
              }}
              onClick={() => setActiveMarker(null)}
            >
              <Marker position={{ lat: 22.6281, lng: 120.2927 }}></Marker>
              {datas.map(
                ({
                  id,
                  aName,
                  latitude,
                  mName,
                  start,
                  end,
                  longitude,
                  pic1,
                }) => (
                  <Marker
                    key={id}
                    position={{
                      lat: parseFloat(latitude),
                      lng: parseFloat(longitude),
                    }}
                    onClick={function () {
                      handleActiveMarker(id)
                      setMarkerID(id)
                      // datas.forEach(function (item, i) {
                      //   if (item.id === id) {
                      //     datas.splice(i, 1)
                      //     datas.unshift(item)
                      //   }
                      // })
                      setCenter({
                        lat: parseFloat(latitude),
                        lng: parseFloat(longitude),
                      })
                      // setDatas(datas)
                      document.getElementById(`MapCard${id}`).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'start',
                      })
                      setActiveHighlight(id)
                    }}
                    icon="https://cdn-icons-png.flaticon.com/64/806/806652.png"
                    id={`MapMarker${id}`}
                  >
                    {activeMarker === id ? (
                      <InfoWindow
                        onCloseClick={() => setActiveMarker(null)}
                        className="card p-0"
                      >
                        <div className="row g-0">
                          <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img
                              src={`${process.env.REACT_APP_API_URL}/stylesheets/images/${pic1}`}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: 130, height: 175 }}
                            />
                          </div>
                          <div className="col-md-8 ">
                            <div className="card-body d-flex flex-column justify-content-beteween ">
                              <h6 className="card-title SemiBold">{aName}</h6>
                              <div className="d-flex">
                                <FaMapMarkerAlt />
                                <p className="card-text pRegular">{mName}</p>
                              </div>
                              <div className="d-flex">
                                <FaCalendarAlt />
                                <p className="card-text pRegular">
                                  {start}~{end}
                                </p>
                              </div>
                              <button
                                className="btn btn-secondary align-self-end"
                                style={{ borderRadius: '20px' }}
                                onClick={(e) => {
                                  e.preventDefault()
                                  history.push(`/exhibition/introduce/${id}`)
                                }}
                              >
                                訂票
                              </button>
                            </div>
                          </div>
                        </div>
                      </InfoWindow>
                    ) : null}
                  </Marker>
                )
              )}
            </GoogleMap>
          </section>
        </div>
      </Container>
      {/* <Footer /> */}
    </>
  )
}

export default MapSearch
