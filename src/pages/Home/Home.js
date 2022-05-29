//首頁
import React from "react";
import { Link } from "react-router-dom";
import '../../styles/01.scss';

function Home(props) {
  return (
    <>

      <div>首頁</div>
      <Link to="/search">全站搜尋頁</Link>
      <br />
      <Link to="/users">會員資料</Link>
      <br />
      <Link to="/exhibition">展覽</Link>
      <br />
      <Link to="/product">商品</Link>
      <br />
      <Link to="/forum">討論區</Link>
      <br />
      <Link to="/b2b">廠商後臺</Link>
      <br />
      <h1>
        <Link to="/style">樣式</Link>
      </h1>
      {/* <div class="blob">
      <svg viewBox="0 0 160 171" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5852 20.2603C37.9852 -2.93969 77.5 -0.0685236 91.5852 2.50018C135.5 10.5089 155.585 37.2603 159.085 77.7603C162.585 118.26 120.085 163.26 91.5852 168.76C63.0851 174.26 68.0852 163.26 66.0852 130.76C64.0852 98.2604 19.5852 106.76 7.58516 93.2603C-4.41484 79.7603 -3.41484 49.2603 19.5852 20.2603Z" fill="#CBD4E6"/>
</svg>
      </div> */}
    </>
  );
}

export default Home;
