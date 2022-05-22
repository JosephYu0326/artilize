//展覽地圖搜尋
//https://medium.com/seokjunhong/how-to-build-a-google-maps-web-application-using-react-js-google-maps-api-ea8036029e63
import React from 'react'
import { Link, render } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import '../../styles/MapSearch.scss'
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import InfiniteScroll from 'react-infinite-scroll-component'
import { extend } from 'jquery'

class MapSearch extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
  }

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 })),
      })
    }, 1500)
  }
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <section className="col-3 mapSearchList d-flex flex-column justify-content-evenly align-items-center mt-3">
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
                style={{ height: '87vh', overflow: 'auto' }}
              >
                <InfiniteScroll
                  dataLength={this.state.items.length}
                  next={this.fetchMoreData}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
                  scrollableTarget="scrollableDiv"
                >
                  {this.state.items.map((i, index) => (
                    <Link to="*" key={index}>
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
                              <h6 className="card-title SemiBold">
                                《掘光而行│洪瑞麟》-{index}
                              </h6>
                              <div className="d-flex">
                                <FaMapMarkerAlt />
                                <p className="card-text pRegular">
                                  台北市立美術館
                                </p>
                              </div>
                              <div className="d-flex">
                                <FaCalendarAlt />
                                <p className="card-text pRegular">
                                  2022-03-19 ~ 2022-07-31
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </InfiniteScroll>
              </div>
            </section>
            <section className="col-9 mapSearchMap">123</section>
          </Row>
        </Container>
      </>
    )
  }
}

export default MapSearch
