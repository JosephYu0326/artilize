//展覽地圖搜尋
//https://medium.com/seokjunhong/how-to-build-a-google-maps-web-application-using-react-js-google-maps-api-ea8036029e63
//https://www.youtube.com/watch?v=UKdQjQX1Pko
import React, { useState, useEffect, useRef } from 'react'
import { Link, render } from 'react-router-dom'
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
  const [mapSearchButton, setMapSearchButton] = useState('exhibition')
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
  const fetchAbilityData = async () => {
    const response1 = await fetch(
      `${process.env.REACT_APP_API_URL}/MapSearch/ability`
    )
    const results1 = await response1.json()
    setAbilityDatas(results1)
  }
  const fetchMapStyle = async () => {
    const responseMapStyle = await fetch('http://localhost:3000/MapStyle.json')
    const resultMapStyle = await responseMapStyle.json()
    console.log(resultMapStyle)
    setMapStyle(resultMapStyle)
  }
  useEffect(() => {
    fetchExhibitionData()
  }, [])
  useEffect(() => {
    fetchAbilityData()
  }, [])
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

  const mapList = (
    <div id="scrollableDiv" style={{ height: '77.5vh', overflow: 'auto' }}>
      {datas.map((exhibition, i) => {
        const { id, name, date, location, latitude, longitude } = exhibition
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
                <div className="col-md-3">
                  <img
                    src="https://picsum.photos/106/139"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body d-flex flex-column justify-content-around">
                    <h6 className="card-title SemiBold">{name}</h6>
                    <div className="d-flex">
                      <FaMapMarkerAlt />
                      <p className="card-text pRegular">{location}</p>
                    </div>
                    <div className="d-flex">
                      <FaCalendarAlt />
                      <p className="card-text pRegular">{date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div style={{ height: '61vh' }}></div>
    </div>
  )

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          {/* 清單 */}
          <section className="col-3 mapSearchList d-flex flex-column justify-content-evenly align-items-stretch mt-3">
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
                        v.location.includes(mapSearchInputValue) ||
                        v.name.includes(mapSearchInputValue)
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
                    }
                    Geocode.setApiKey(
                      `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY1}`
                    )
                    Geocode.setLanguage('zh-TW')
                    Geocode.setRegion('tw')
                    Geocode.setLocationType('ROOFTOP')
                    Geocode.enableDebug()
                    Geocode.fromAddress(mapSearchInputValue).then(
                      (response) => {
                        const { lat, lng } =
                          response.results[0].geometry.location
                        console.log(lat, lng)
                      },
                      (error) => {
                        console.error(error)
                      }
                    )
                  }}
                  ref={mapSearchInput}
                />
                <button type="submit">Search</button>
              </form>
            </div>
            <div className="mapButton d-flex justify-content-evenly mt-2 mb-2">
              <button
                className={`btn ${
                  mapSearchButton === 'exhibition' ? 'btn-dark' : 'btn-light'
                }`}
                onClick={function () {
                  setMapSearchButton('exhibition')
                  setDatas(exhibitiondatas)
                  setDatas1(exhibitiondatas)
                  setActiveMarker(null)
                  setCenter({
                    lat: parseFloat(exhibitiondatas[0].latitude),
                    lng: parseFloat(exhibitiondatas[0].longitude),
                  })
                  setActiveHighlight(-1)
                  document
                    .getElementById(`scrollableDiv`)
                    .firstChild.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'start',
                    })
                }}
              >
                展覽
              </button>
              <button
                className={`btn ${
                  mapSearchButton === 'ability' ? 'btn-dark' : 'btn-light'
                }`}
                onClick={function () {
                  setMapSearchButton('ability')
                  setDatas(abilitydatas)
                  setDatas1(abilitydatas)
                  setActiveMarker(null)
                  setCenter({
                    lat: parseFloat(abilitydatas[0].latitude),
                    lng: parseFloat(abilitydatas[0].longitude),
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
                活動
              </button>
            </div>
            {isLoading ? mapSpinner : mapList}
          </section>
          {/* 地圖 */}
          <section className="col-9 mapSearchMap ps-0 pe-0">
            <GoogleMap
              center={center}
              zoom={14}
              mapContainerStyle={{ width: '100%', height: '100%' }}
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
                ({ id, name, latitude, location, date, longitude }) => (
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
                              src="https://picsum.photos/106/139"
                              className="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8 ">
                            <div className="card-body d-flex flex-column justify-content-beteween ">
                              <h6 className="card-title SemiBold">{name}</h6>
                              <div className="d-flex">
                                <FaMapMarkerAlt />
                                <p className="card-text pRegular">{location}</p>
                              </div>
                              <div className="d-flex">
                                <FaCalendarAlt />
                                <p className="card-text pRegular">{date}</p>
                              </div>
                              <button
                                className="btn btn-secondary align-self-end"
                                style={{ borderRadius: '20px' }}
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
        </Row>
      </Container>
    </>
  )
}

export default MapSearch
