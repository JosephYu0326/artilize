//文章收藏
import React from "react";
import FadeIn from "react-fade-in";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import AsideBar from "../../component/AsideBar";
import Article from "../../component/Article";

function ArticleCollect(props) {
  const btnList =
  {
    btnTitle: [
      "會員資料",
      "訂單紀錄",
      "文章收藏",
      "商品收藏",
      "個人主頁",
      "我的優惠券",
    ],
    btnTo: [
      "/users",
      "/users/orderrecord",
      "/users/articlecollect",
      "/users/productcollect",
      "/users/personalpage",
      "/users/mycoupon"
    ],
  }

  const articleList = [
    {
      category: "逛展攻略",
      title: "南美館一日遊及南美館1、2館觀展心得",
      author: "Wendy",
      content:
        '首先感謝我的朋友W跟他們全家正好要去台南，還願意攜上我這麼大一隻拖油瓶過去\r\n\r\n才有機會出發到南美館，這是灑花工作後第一次因為工作之外的事情抵達台南\r\n\r\n也是第一次去南美館\r\n\r\n                     \r\n\r\n還真的是格外的新奇，也有夠台北俗\r\n\r\n都甚至不好說出我其實很喜歡古蹟這樣的話\r\n\r\n台南的展館幾乎是日據時代甚至清朝末年留下的官邸、州廳、各類行政總署改建而成\r\n\r\n \r\n\r\n台南市立美術館簡稱南美館又分為一館二館\r\n\r\n一館便是以前的州立警察署改建，建築很大器，但灑花覺得美術館的字體顏色跟整個建築不統一\r\n\r\n且沒有凸顯一館的字體很可惜\r\n\r\n\r\n\r\n門票成人票目前是150元\r\n\r\n學生票、敬老票80元\r\n\r\n七歲以下免票\r\n\r\n台南市民50元\r\n\r\n\r\n\r\n一館館舍內有一顆很大的榕樹\r\n\r\n旁邊有咖啡雅座，樹下遮蔽多很舒適\r\n\r\n\r\n\r\n台南的日頭炎炎\r\n\r\n我如果住在這裡想必天天來展館吹冷氣放風\r\n\r\n真是療癒又慵懶的一天XD\r\n\r\n\r\n\r\n一館有兩層樓、四個展區\r\n\r\n分別展出了攝影作品、插畫繪本跟油畫雕塑(也是灑花此行的主要目的)\r\n\r\n我覺得一館整體上規劃是比較傳統的美術展館\r\n\r\n\r\n\r\n\r\n\r\n而二館\r\n\r\n空間跟整個風格上就比較多的複合媒材\r\n\r\n佈覽內容可能因為二館的新建築的獨特性所以放了很多工藝和建築的內容詮釋\r\n\r\n\r\n\r\n \r\n\r\n灑花說不出來自己究竟喜歡哪一個場館\r\n\r\n真的各有千秋\r\n\r\n單純不論展品跟佈展內容\r\n\r\n光看建築的細節和台南的風景都是很好的享受\r\n\r\n\r\n\r\n我很喜歡二館這次三樓駐村藝術家 張根耀、林盈潔 的作品＜陸浮/ Floating island＞\r\n\r\n＜陸浮＞是一個駐村藝術家的口述影片\r\n\r\n影片幾乎將一、二館幾個展覽的主要敘事給包成了另一個、全新的主題和詮釋\r\n\r\n \r\n\r\n陸浮的中心思想是\r\n\r\n古曾文溪因為一場大雨而被分流成另外一條河流\r\n\r\n原本通商的港口化為陸地與人居住的聚落\r\n\r\n藝術家引述了希臘哲學家的思想說"人不能兩次踏進同一條河流"\r\n\r\n \r\n\r\n灑花原本很俗氣地想說是人不能總在同一個迴圈犯錯\r\n\r\n但真正的解釋卻是河流每一刻都在改變，於是我們每一刻都在踏入一條全新的河\r\n\r\n所以我們所經過的河流與人生際遇其實永遠也都是全新、變化的模樣\r\n\r\n \r\n\r\n如這個城市也僅僅因為一場大雨改變了河水的流向\r\n\r\n失卻了內海的大港\r\n\r\n卻成了這樣一個老城市的根基\r\n\r\n \r\n\r\n正當灑花覺得如此醍醐灌頂\r\n\r\n藝術家說，哲學家說人不能踏入一條河流兩次\r\n\r\n但以科學來說卻不是如此\r\n\r\n或許從世界最古老的一場雨水降下以後\r\n\r\n留下了河川、湖泊、大海、冰川、結成的露水\r\n\r\n再次化為天上的雲\r\n\r\n落下\r\n\r\n\r\n\r\n我們人當然不可能踏入一條河流兩次\r\n\r\n因為我們會踏入無數無數次\r\n\r\n這樣的輪迴\r\n\r\n \r\n\r\n這個影片讓我感悟很深刻\r\n\r\n特別是在台南這樣老的城市更新的建築裡\r\n\r\n \r\n\r\n很喜歡這段影片\r\n\r\n也可以說是大受感動\r\n\r\n \r\n\r\n我們人可以是無以計數地在重複和輪迴\r\n\r\n但也可以是不斷地改變\r\n\r\n至於整麼想\r\n\r\n可以很簡單地問問施主你自己\r\n\r\n \r\n\r\n有關這個問問施主自己的這件事可以回到南美館一館的＜照見＞展區\r\n\r\n我們明天見～',
      comment: "16",
      avrtarId: "100",
    }
  ];




  return (
    <>
      <Header />
      <AsideBar btn={btnList} />
      <div className="container">
        <div className="frContent">
          <h3>文章收藏</h3>
          <FadeIn>
            <Article articDetails={articleList} />
          </FadeIn>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArticleCollect;
