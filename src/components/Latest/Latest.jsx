import React, { useRef } from "react";
import scss from "./Latest.module.scss";
import btnVector from "../../assets/Latest/btnVector.svg";
import viewAll from "../../assets/Latest/viewAll.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " " + scss.nextArrow}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " " + scss.nextArrow}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Latest() {
  const { t } = useTranslation();
  const arrowRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={scss.latest}>
      <div className={scss.latestLeft}>
        <div className={scss.gradiend}>
          <div className={scss.gradientTitle}>
            <Slider ref={arrowRef} {...settings}>
              <>
                <h4>{t("latest.latest1")}</h4>
                <h3>{t("latest.latest2")}</h3>
                <p>{t("latest.latest3")}</p>
              </>

              <>
                <h4>{t("latest.latest1")}</h4>
                <h3>{t("latest.latest2")}</h3>
                <p>{t("latest.latest3")}</p>
              </>

              <>
                <h4>{t("latest.latest1")}</h4>
                <h3>{t("latest.latest2")}</h3>
                <p>{t("latest.latest3")}</p>
              </>

              <>
                <h4>{t("latest.latest1")}</h4>
                <h3>{t("latest.latest2")}</h3>
                <p>{t("latest.latest3")}</p>
              </>
            </Slider>
            <button
              onClick={() => arrowRef.current.slickNext()}
              className={scss.slideBtn}
            >
              <img src={btnVector} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={scss.latestRight}>
        <div className={scss.posts}>
          <h3>{t("latest.latest4")}</h3>

          <div className={scss.morePosts}>
            <h5> {t("latest.latest5")}</h5>
            <h3>{t("latest.latest6")}</h3>
            <p>{t("latest.latest7")}</p>
          </div>

          <div className={scss.morePosts}>
            <h5> {t("latest.latest8")}</h5>
            <h3>{t("latest.latest9")}</h3>
            <p>{t("latest.latest10")}</p>
          </div>

          <div className={scss.morePosts}>
            <h5>{t("latest.latest11")}</h5>
            <h3>{t("latest.latest12")}</h3>
            <p>{t("latest.latest13")}</p>
          </div>

          <button>
            {t("latest.latest14")}
            <img src={viewAll} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Latest;
