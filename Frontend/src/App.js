import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
//首頁與入口
import Home from './pages/Home/Home'
import Entrance from './pages/Home/Entrance'
//會員註冊登入相關
import Users from './pages/Users/Users'
import Login from './pages/Users/Login'
import Edit from './pages/Users/Edit'
import SignUp from './pages/Users/SignUp'
import ForgetPassword from './pages/Users/ForgetPassword'
import ChangePassword from './pages/Users/ChangePassword'
import Resetpassword from './pages/Users/ResetPassword'
//會員中心功能
import OrderRecord from './pages/Users/OrderRecord'
import ArticleCollect from './pages/Users/ArticleCollect'
import ProductCollect from './pages/Users/ProductCollect'
import PersonalPage from './pages/Users/PersonalPage'
import MyCoupon from './pages/Users/MyCoupon'
//搜尋
import Serach from './pages/Home/Search'
//展覽相關
import Exhibition from './pages/Exhibition/Exhibition'
import MapSearch from './pages/Exhibition/MapSearch'
import Introduce from './pages/Exhibition/Introduce'
import Product from './pages/Product/Product'
import Category from './pages/Product/component/Category'
import PrIntroduce from './pages/Product/Introduce'
import Cart from './pages/Booking/Cart'
import Pay from './pages/Booking/Pay'
import PurchaseSuccess from './pages/Booking/PurchaseSuccess'
//討論區相關
import Forum from './pages/Forum/Forum'
import Article from './pages/Forum/Article'
import AddArticle from './pages/Forum/AddArticle'
import FrPersonalPage from './pages/Forum/FrPersonalPage'
import EditArticle from './pages/Forum/EditArticle'
//404page
import NotFoundPage from './pages/Home/NotFoundPage'
//後台
import B2B from './pages/B2B/B2B'
import AddAbility from './pages/B2B/AddAbility'
import EditAbility from './pages/B2B/EditAbility'
//樣式展示
import Style from './pages/Style'
//隱私政策
import PrivacyPolicy from './pages/PrivacyPolicy'
//訂閱電子報
import Newsletter from './pages/NewsLetter'
import ScrollToTop from './component/ScrollToTop'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/NewsLetter">
          <Newsletter />
        </Route>
        <Route path="/b2b/edit/:id">
          <EditAbility />
        </Route>
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
          <AddArticle />
        </Route>
        <Route path="/forum/Editarticle/:EditArticleID">
          <EditArticle />
        </Route>
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
        <Route path="/product/introduce/:product_id">
          <PrIntroduce />
        </Route>
        <Route path="/ProductCategory/:product_category_detail">
          <Category />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/exhibition/introduce/:exhibitionId">
          <Introduce />
        </Route>
        <Route path="/exhibition/mapsearch">
          <MapSearch />
        </Route>
        <Route path="/exhibition/search?:keyword">
          <Exhibition />
        </Route>
        <Route path="/exhibition/categories/:kid">
          <Exhibition />
        </Route>
        <Route path="/exhibition">
          <Exhibition />
        </Route>
        <Route path="/users/resetpassword/:userId">
          <Resetpassword />
        </Route>
        <Route path="/users/mycoupon">
          <MyCoupon />
        </Route>
        <Route path="/users/personalpage">
          <PersonalPage />
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
