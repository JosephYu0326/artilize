import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "../../styles/exhibition-list.scss";
import "../../styles/exhibition-introduce.scss";
import exhibitionimg from "../../images/1.png";

function Card() {
  const cards = ["1", "2", "3", "4", "5", "6"];

  console.log(exhibitionimg);

  const imgurl = {
    backgroundImage: `url(${exhibitionimg})`,
  }; 

  const card = cards.map((v, i) => {
    return (
      <div key={i}>
        <div className="col d-flex justify-content-center">
          <div className="exhibitioncard d-flex BoxShadow">
            <Link to="/exhibition/introduce" className="imgframe-link">
              <div style={imgurl} className="imgframe"></div>
            </Link>
            <div className="d-flex content">
              <div className="title mt-2">
                <Link to="/exhibition/introduce" className="selectlink">
                  <h5 className="titletext text-web pt-2">
                    《掘光而行│洪瑞麟的展覽-{i}
                  </h5>
                </Link>
                <Link to="/exhibition/introduce" className="selectlink">
                  <h6 className="pRegular titletext text-mobile my-2">
                    《掘光而行│洪瑞麟的展覽-{i}
                  </h6>
                </Link>
              </div>
              <div className="date-area-data">
                <div className="d-flex align-items-center">
                  <FaMapMarkerAlt />
                  <div className="text-web">台北市立美術館</div>
                  <div className="text-mobile pSmall">台北市立美術館</div>
                </div>
                <div className="my-1 d-flex align-items-center">
                  <FaCalendarAlt />
                  <div className="text-web">
                    2022-03-19 <br /> 2022-07-31
                  </div>
                  <div className="text-mobile pSmall">
                    2022-03-19 <br /> 2022-07-31
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary book h5 text-web"
              >
              
                訂票
              </button>
              <button
                type="button"
                className="btn btn-secondary book pRegular text-mobile"
              >
                訂票
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{card}</>;
}

export default Card;
