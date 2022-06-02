import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
// 首頁與入口
import Home from './pages/Home/Home'
import Entrance from './pages/Home/Entrance'
// 會員註冊登入相關
import Users from './pages/Users/Users'
import Login from './pages/Users/Login'
import Edit from './pages/Users/Edit'
import SignUp from './pages/Users/SignUp'
// 會員中心功能
import ForgetPassword from './pages/Users/ForgetPassword'
import ChangePassword from './pages/Users/ChangePassword'
import OrderRecord from './pages/Users/OrderRecord'
import ArticleCollect from './pages/Users/ArticleCollect'
import ProductCollect from './pages/Users/ProductCollect'
import PersonalPage from './pages/Users/PersonalPage'
import MyCoupon from './pages/Users/MyCoupon'
//搜尋
import Serach from './pages/Home/Search'
// 展覽相關
import Exhibition from './pages/Exhibition/Exhibition'
import MapSearch from './pages/Exhibition/MapSearch'
import Introduce from './pages/Exhibition/Introduce'
import Product from './Product/Product'
import PrIntroduce from './Product/Introduce'
import Cart from './pages/Booking/Cart'
import Pay from './pages/Booking/Pay'
import PurchaseSuccess from './pages/Booking/PurchaseSuccess'
//討論區相關
import Forum from './pages/Forum/Forum'
import Article from './pages/Forum/Article'
import AddArticle from './pages/Forum/AddArticle'
import EditArticle from './pages/Forum/EditArticle'
import FrPersonalPage from './pages/Forum/FrPersonalPage'
//404page
import NotFoundPage from './pages/Home/NotFoundPage'
//後台
import B2B from './pages/B2B/B2B'
import AddAbility from './pages/B2B/AddAbility'

//樣式展示
import Style from './pages/Style'
//隱私政策
import PrivacyPolicy from './pages/PrivacyPolicy'
//訂閱電子報
import NewsLetter from './pages/NewsLetter'
import ScrollToTop from '../src/component/ScrollToTop'

function App() {
  const userID = 4

  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/b2b/addability">
            <AddAbility />
          </Route>
          <Route path="/b2b">
            <B2B />
          </Route>
          <Route path="/forum/frpersonalpage/:userID">
            <FrPersonalPage />
          </Route>
          <Route path="/forum/addarticle">
            <AddArticle id={userID} />
          </Route>
          <Route path="/forum/EditArticle/:EditArticleID">
            <EditArticle />
          </Route>
          {/* <Route path="/forum/article">
          <Article />
        </Route> */}
          <Route path="/forum/:forumid">
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
          <Route path="/newsletter">
            <NewsLetter />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  )
}

export default App
