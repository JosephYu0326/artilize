//展覽地圖搜尋
//https://medium.com/seokjunhong/how-to-build-a-google-maps-web-application-using-react-js-google-maps-api-ea8036029e63
//https://www.youtube.com/watch?v=UKdQjQX1Pko
import React, { useState, useEffect, useRef } from 'react'
import { Link, render } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import '../../styles/MapSearch.scss'
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import Header from '../../component/Header'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'
import { data } from 'jquery'

// const center = { lat: 22.6281, lng: 120.2927 }

function MapSearch(props) {
  const [activeMarker, setActiveMarker] = useState(null)
  const [datas, setDatas] = useState([])
  const [datas1, setDatas1] = useState([])
  const [markerID, setMarkerID] = useState('')
  const [center, setCenter] = useState({ lat: 22.6281, lng: 120.2927 })
  const mapSearchInput = useRef()
  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/MapSearch`)
    const results = await response.json()
    setDatas(results)
    setDatas1(results)
    console.log(results)
  }
  useEffect(() => {
    fetchData()
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
  console.log(markerID)

  // const handleOnLoad = (map) => {
  //   // eslint-disable-next-line no-undef
  //   const bounds = new google.maps.LatLngBounds()
  //   markers.forEach(({ position }) => bounds.extend(position))
  //   map.fitBounds(bounds)
  // }

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          {/* 清單 */}
          <section className="col-3 mapSearchList d-flex flex-column justify-content-evenly align-items-stretch mt-3">
            <div className="mapSearchBar d-flex  align-items-stretch">
              <form className="d-flex align-items-center justify-content-center ">
                <input
                  type="text"
                  placeholder=""
                  onChange={function (e) {
                    // setMapSearchText(mapSearchInput.current.value)
                    const mapSearchInputValue = mapSearchInput.current.value
                    console.log(mapSearchInputValue)
                    const mapSearchResult = datas1.filter((v, i) =>
                      v.location.includes(mapSearchInputValue)
                    )
                    if (mapSearchResult.length > 0) {
                      setDatas(mapSearchResult)
                      console.log(mapSearchResult)
                    }
                  }}
                  ref={mapSearchInput}
                />
                <button type="submit">Search</button>
              </form>
            </div>
            <div className="mapButton d-flex justify-content-evenly mt-2 mb-2">
              <button className="btn btn-dark">展覽</button>
              <button className="btn btn-light">活動</button>
            </div>
            <div
              id="scrollableDiv"
              style={{ height: '77.5vh', overflow: 'auto' }}
            >
              {datas.map((exhibition, i) => {
                const { id, name, date, location, latitude, longitude } =
                  exhibition
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
                    }}
                    id={`MapCard${id}`}
                  >
                    <div className="card mb-3">
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
            </div>
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
                      datas.forEach(function (item, i) {
                        if (item.id === id) {
                          datas.splice(i, 1)
                          datas.unshift(item)
                        }
                      })
                      setCenter({
                        lat: parseFloat(latitude),
                        lng: parseFloat(longitude),
                      })
                      // setDatas(datas)
                      // // setInterval(
                      // //   document.getElementById(`MapCard${id}`).scrollIntoView({
                      // //     behavior: 'smooth',
                      // //     block: 'start',
                      // //     inline: 'start',
                      // //   }),
                      // //   1000
                      // // )
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
                          <div className="col-md-4">
                            <img
                              src="https://picsum.photos/106/139"
                              className="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8 ">
                            <div className="card-body d-flex flex-column justify-content-evenly">
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
