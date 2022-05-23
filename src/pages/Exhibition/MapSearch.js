//展覽地圖搜尋
//https://medium.com/seokjunhong/how-to-build-a-google-maps-web-application-using-react-js-google-maps-api-ea8036029e63
//https://www.youtube.com/watch?v=UKdQjQX1Pko
import React, { useState } from 'react'
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

const mapCards = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
]
const mapCard = mapCards.map((v, i) => {
  return (
    <Link to="*" key={i}>
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
              <h6 className="card-title SemiBold">《掘光而行│洪瑞麟》-{v}</h6>
              <div className="d-flex">
                <FaMapMarkerAlt />
                <p className="card-text pRegular">台北市立美術館</p>
              </div>
              <div className="d-flex">
                <FaCalendarAlt />
                <p className="card-text pRegular">2022-03-19 ~ 2022-07-31</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
})
const center = { lat: 22.6281, lng: 120.2927 }
const markers = [
  {
    id: 1,
    name: '《掘光而行│洪瑞麟》',
    position: { lat: 22.631153188148424, lng: 120.29508873762158 },
    location: '台北市立美術館',
    date: '2022-03-19 ~ 2022-06-19',
  },
  {
    id: 2,
    name: '《掘光而行│洪瑞麟1》',
    position: { lat: 22.63244154963782, lng: 120.31350928067424 },
    location: '台北市立美術館',
    date: '2022-03-19 ~ 2022-06-19',
  },
  {
    id: 3,
    name: '《掘光而行│洪瑞麟2》',
    position: { lat: 22.635327682251408, lng: 120.29736524968503 },
    location: '台北市立美術館',
    date: '2022-03-19 ~ 2022-06-19',
  },
  {
    id: 4,
    name: '《掘光而行│洪瑞麟3》',
    position: { lat: 22.619522076182406, lng: 120.29989729690509 },
    location: '台北市立美術館',
    date: '2022-03-19 ~ 2022-06-19',
  },
]

function MapSearch(props) {
  const [activeMarker, setActiveMarker] = useState(null)
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
  const handleOnLoad = (map) => {
    // eslint-disable-next-line no-undef
    const bounds = new google.maps.LatLngBounds()
    markers.forEach(({ position }) => bounds.extend(position))
    map.fitBounds(bounds)
  }

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <section className="col-3 mapSearchList d-flex flex-column justify-content-evenly align-items-stretch mt-3">
            <div className="mapSearchBar d-flex  align-items-stretch">
              <form className="d-flex align-items-center justify-content-center ">
                <input type="search" placeholder="" />
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
              {mapCard}
            </div>
          </section>
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
              <Marker position={center}></Marker>
              {markers.map(({ id, name, position, location, date }) => (
                <Marker
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  icon="https://cdn-icons-png.flaticon.com/64/806/806652.png"
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
              ))}
            </GoogleMap>
          </section>
        </Row>
      </Container>
    </>
  )
}

export default MapSearch
