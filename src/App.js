import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home/Home'
import Entrance from './pages/Home/Entrance'
import Users from './pages/Users/Users'
import Login from './pages/Users/Login'
import Edit from './pages/Users/Edit'
import SignUp from './pages/Users/SignUp'
import ForgetPassword from './pages/Users/ForgetPassword'
import ChangePassword from './pages/Users/ChangePassword'
import OrderRecord from './pages/Users/OrderRecord'
import ArticleCollect from './pages/Users/ArticleCollect'
import ProductCollect from './pages/Users/ProductCollect'
import PersonalPage from './pages/Users/PersonalPage'
import MyCoupon from './pages/Users/MyCoupon'
import Serach from './pages/Home/Search'
import Exhibition from './pages/Exhibition/Exhibition'
import MapSearch from './pages/Exhibition/MapSearch'
import Introduce from './pages/Exhibition/Introduce'
import Product from './Product/Product'
import PrIntroduce from './Product/Introduce'
import Cart from './pages/Booking/Cart'
import Pay from './pages/Booking/Pay'
import PurchaseSuccess from './pages/Booking/PurchaseSuccess'
import Forum from './pages/Forum/Forum'
import Article from './pages/Forum/Article'
import AddArticle from './pages/Forum/AddArticle'
import EditArticle from './pages/Forum/EditArticle'
import FrPersonalPage from './pages/Forum/FrPersonalPage'
import NotFoundPage from './pages/Home/NotFoundPage'
import B2B from './pages/B2B/B2B'
import AddAbility from './pages/B2B/AddAbility'
import Style from './pages/Style'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  const userID = 2

  return (
    <Router>
      <Switch>
        <Route path="/b2b/addability">
          <AddAbility />
        </Route>
        <Route path="/b2b">
          <B2B />
        </Route>
        <Route path="/forum/frpersonalpage:userID">
          <FrPersonalPage />
        </Route>
        <Route path="/forum/addarticle">
          <AddArticle id={userID} />
        </Route>
        <Route path="/forum/editArticle/:articleid">
          <EditArticle />
        </Route>
        <Route path="/forum/:forumid">
          <Article />
        </Route>
        <Route path="/forum/article">
          <Article />
        </Route>
        <Route path="/forum">
          <Forum />
        </Route>
        <Route path="/booking/purchasesuccess">
          <PurchaseSuccess />
        </Route>
        <Route path="/booking/pay">
          <Pay />
        </Route>
        <Route path="/booking/cart">
          <Cart />
        </Route>
        <Route path="/product/introduce">
          <PrIntroduce />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/exhibition/introduce">
          <Introduce />
        </Route>
        <Route path="/exhibition/mapsearch">
          <MapSearch />
        </Route>
        <Route path="/exhibition">
          <Exhibition />
        </Route>
        <Route path="/users/mycoupon">
          <MyCoupon />
        </Route>
        <Route path="/users/personalpage">
          <PersonalPage id={userID} />
        </Route>
        <Route path="/users/productcollect">
          <ProductCollect />
        </Route>
        <Route path="/users/articlecollect">
          <ArticleCollect />
        </Route>
        <Route path="/users/orderrecord">
          <OrderRecord />
        </Route>
        <Route path="/users/changepassword">
          <ChangePassword />
        </Route>
        <Route path="/users/forgetpassword">
          <ForgetPassword />
        </Route>
        <Route path="/users/signup">
          <SignUp />
        </Route>
        <Route path="/users/edit">
          <Edit />
        </Route>
        <Route path="/users/login">
          <Login />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/search">
          <Serach />
        </Route>
        <Route path="/entrance">
          <Entrance />
        </Route>
        <Route path="/style">
          <Style />
        </Route>
        <Route path="/privacypolicy">
          <PrivacyPolicy />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
