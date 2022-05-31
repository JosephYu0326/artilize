import React from 'react'
// import ReactDom from 'react-dom'
import { Switch, Route, HashRouter } from 'react-router-dom'
import Home from './component/Home'
import Category from './component/Category'
import Introduce from './Introduce'

function Product() {
  const Main = () => (
    <div>
      <Route path="/" render={(props) => <Home {...props} />} />

      {/* <Route path="product/Category" component={Category}>
        <Category />
      </Route> */}
      {/* <Route path="/product/Introduce">
        <Introduce />
      </Route> */}

      {/* <Category /> */}
    </div>
  )
  return (
    <>
      <Main />
    </>
  )
}

export default Product
