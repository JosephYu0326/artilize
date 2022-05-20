//討論區列表
import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaCommentDots } from "react-icons/fa";
import "../../styles/Forum.scss";
import "../../styles/AsideBar.scss";
import ForumAside from "../../component/ForumAside";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

function Forum(props) {
  const articleList = [
    {
      category: "逛展攻略",
      title: "南美館一日遊及南美館1、2館觀展心得",
      author: "Wendy",
      content:
        '首先感謝我的朋友W跟他們全家正好要去台南，還願意攜上我這麼大一隻拖油瓶過去\r\n\r\n才有機會出發到南美館，這是灑花工作後第一次因為工作之外的事情抵達台南\r\n\r\n也是第一次去南美館\r\n\r\n                     \r\n\r\n還真的是格外的新奇，也有夠台北俗\r\n\r\n都甚至不好說出我其實很喜歡古蹟這樣的話\r\n\r\n台南的展館幾乎是日據時代甚至清朝末年留下的官邸、州廳、各類行政總署改建而成\r\n\r\n \r\n\r\n台南市立美術館簡稱南美館又分為一館二館\r\n\r\n一館便是以前的州立警察署改建，建築很大器，但灑花覺得美術館的字體顏色跟整個建築不統一\r\n\r\n且沒有凸顯一館的字體很可惜\r\n\r\n\r\n\r\n門票成人票目前是150元\r\n\r\n學生票、敬老票80元\r\n\r\n七歲以下免票\r\n\r\n台南市民50元\r\n\r\n\r\n\r\n一館館舍內有一顆很大的榕樹\r\n\r\n旁邊有咖啡雅座，樹下遮蔽多很舒適\r\n\r\n\r\n\r\n台南的日頭炎炎\r\n\r\n我如果住在這裡想必天天來展館吹冷氣放風\r\n\r\n真是療癒又慵懶的一天XD\r\n\r\n\r\n\r\n一館有兩層樓、四個展區\r\n\r\n分別展出了攝影作品、插畫繪本跟油畫雕塑(也是灑花此行的主要目的)\r\n\r\n我覺得一館整體上規劃是比較傳統的美術展館\r\n\r\n\r\n\r\n\r\n\r\n而二館\r\n\r\n空間跟整個風格上就比較多的複合媒材\r\n\r\n佈覽內容可能因為二館的新建築的獨特性所以放了很多工藝和建築的內容詮釋\r\n\r\n\r\n\r\n \r\n\r\n灑花說不出來自己究竟喜歡哪一個場館\r\n\r\n真的各有千秋\r\n\r\n單純不論展品跟佈展內容\r\n\r\n光看建築的細節和台南的風景都是很好的享受\r\n\r\n\r\n\r\n我很喜歡二館這次三樓駐村藝術家 張根耀、林盈潔 的作品＜陸浮/ Floating island＞\r\n\r\n＜陸浮＞是一個駐村藝術家的口述影片\r\n\r\n影片幾乎將一、二館幾個展覽的主要敘事給包成了另一個、全新的主題和詮釋\r\n\r\n \r\n\r\n陸浮的中心思想是\r\n\r\n古曾文溪因為一場大雨而被分流成另外一條河流\r\n\r\n原本通商的港口化為陸地與人居住的聚落\r\n\r\n藝術家引述了希臘哲學家的思想說"人不能兩次踏進同一條河流"\r\n\r\n \r\n\r\n灑花原本很俗氣地想說是人不能總在同一個迴圈犯錯\r\n\r\n但真正的解釋卻是河流每一刻都在改變，於是我們每一刻都在踏入一條全新的河\r\n\r\n所以我們所經過的河流與人生際遇其實永遠也都是全新、變化的模樣\r\n\r\n \r\n\r\n如這個城市也僅僅因為一場大雨改變了河水的流向\r\n\r\n失卻了內海的大港\r\n\r\n卻成了這樣一個老城市的根基\r\n\r\n \r\n\r\n正當灑花覺得如此醍醐灌頂\r\n\r\n藝術家說，哲學家說人不能踏入一條河流兩次\r\n\r\n但以科學來說卻不是如此\r\n\r\n或許從世界最古老的一場雨水降下以後\r\n\r\n留下了河川、湖泊、大海、冰川、結成的露水\r\n\r\n再次化為天上的雲\r\n\r\n落下\r\n\r\n\r\n\r\n我們人當然不可能踏入一條河流兩次\r\n\r\n因為我們會踏入無數無數次\r\n\r\n這樣的輪迴\r\n\r\n \r\n\r\n這個影片讓我感悟很深刻\r\n\r\n特別是在台南這樣老的城市更新的建築裡\r\n\r\n \r\n\r\n很喜歡這段影片\r\n\r\n也可以說是大受感動\r\n\r\n \r\n\r\n我們人可以是無以計數地在重複和輪迴\r\n\r\n但也可以是不斷地改變\r\n\r\n至於整麼想\r\n\r\n可以很簡單地問問施主你自己\r\n\r\n \r\n\r\n有關這個問問施主自己的這件事可以回到南美館一館的＜照見＞展區\r\n\r\n我們明天見～',
      comment: "16",
      avrtarId: "100",
    },
    {
      category: "心得分享",
      title: "新竹300博覽會：展區拍照心得",
      author: "Jack899",
      content:
        "總之我原本沒有要寫展區心得的\r\n\r\n但因為策展人傳來一份網上流傳的網美拍照攻略.....\r\n\r\n我覺得那份心得真對不起製作組跟網美們\r\n\r\n \r\n\r\n莫名想問老師是沒看過真的網美嗎...\r\n\r\n所以決定來發我的拍照點\r\n\r\n \r\n\r\n像一樓\r\n\r\n巨大球球跟後面的形象牆當然是很好拍\r\n\r\n但是遠景這種拍法根本就不網美呀\r\n\r\n請看一樓我們家的網美\r\n\r\n \r\n\r\n  \r\n\r\n然後我說真的，要拍照的網紅點才不是一樓好嗎？\r\n\r\n請到三樓積木區\r\n\r\n\r\n\r\n \r\n\r\n覺得積木區人太多\r\n\r\n也可以選擇有美美新竹背景的播放區拍：\r\n\r\n\r\n\r\n \r\n\r\n再不然\r\n\r\n你還有手扶梯旁邊的展區形象牆\r\n\r\n\r\n\r\n \r\n\r\n喔!!展區太大逛累了，還可以到外面吹吹風\r\n\r\n\r\n\r\n \r\n\r\n快來\r\n\r\n新竹三百博覽會當網美\r\n\r\n \r\n\r\n還有網紅必備超繽紛筆記本  \r\n\r\n\r\n\r\n跟網紅必點的超推薦甜點\r\n\r\n \r\n\r\n\r\n還有很多網紅去了不會告訴你的焦點小吃XD\r\n\r\n\r\n\r\n營業時間 7/21-29 10:00-18:00\r\n\r\n \r\n\r\n＞有人跟我說新竹300博覽會怎麼把新竹拍得這麼美\r\n\r\n＞我要說你錯了\r\n\r\n＞是新竹原本就這麼美XD",
      comment: "21",
      avrtarId: "100",
    },
  ];

  return (
    <>
      <Header />
      {/* <Link to="/forum/article">檢視文章</Link>
      <Link to="/forum/frpersonalpage">個人頁面</Link> */}
      <ForumAside btn="新增討論" btn1="02" btn4="01" />

      <div className="container h-100 ">
        <div className="frContent">
          {articleList.map((v, i) => {
            return (
              <>
                <div className="perContentHead my-4 d-flex justify-content-between">
                  <div className="text-start d-flex align-items-center ">
                    <div>
                      <img
                        className="avatar m-1"
                        src="https://picsum.photos/200"
                        alt=""
                      />
                      <p className="pBig text-center">{v.author}</p>
                    </div>
                    <h5 className="h5 ExtraBold mx-auto ms-2 mb-0 title">{v.title}</h5>
                  </div>
                  <div>
                    <p className="category pBig">-{v.category}</p>
                  </div>
                </div>
                <div className="comment">
                  <pre>{v.content}</pre>
                </div>
                <div className="social pBig d-flex justify-content-end align-items-center">
                  <FaCommentDots />
                  <div className="p-2">{v.comment}</div>
                  <FaStar />
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </div>

      {/* <div className="container h-100 ">
        <div className="frContent">
          <div className="perContentHead d-flex justify-content-between align-items-center">
            <div className="text-center d-flex align-items-center ">
              <div>
                <img
                  className="avatar m-1"
                  src="https://picsum.photos/200"
                  alt=""
                />
                <p>{"作者"}</p>
              </div>
              <h3 className="ms-4 title">{"標題標題標題標題"}</h3>
            </div>

            <p className="category">-心得分享</p>
          </div>
          <div className="comment">
            <p>{"回覆回覆回覆回覆回覆回覆回覆回覆回覆回覆"}</p>
          </div>
          <div className="social d-flex justify-content-end align-items-center">
            <FaCommentDots />
            <div className="p-2">25</div>
            <FaStar />
          </div>
          <hr />
        </div>
      </div> */}

      <Footer />
    </>
  );
}

export default Forum;
