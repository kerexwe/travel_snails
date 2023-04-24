import React, { useRef } from "react";
import scss from "./Say.module.scss";
import sayVector from "../../assets/Say/sayVector.svg";
import btnPrev from "../../assets/Say/btnPrev.svg";
import btnNext from "../../assets/Say/btnNext.svg";
import avatars from "../../assets/Say/avatars.svg";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

function Say() {
  const { t } = useTranslation();
  const arrowRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <div className={scss.say}>
        <Slider ref={arrowRef} {...settings}>
          <div className={scss.sayItems}>
            <div className={scss.itemsLeft}>
              <div className={scss.leftDesc}>
                <h2>{t("say.say1")}</h2>
                <img src={sayVector} alt="" />
                <p>{t("say.say2")}</p>
                <ul>
                  <li>{t("say.say3")}</li>
                </ul>
              </div>
            </div>
            <div className={scss.itemsRight}>
              <img src={avatars} alt="" />
            </div>
          </div>

          <div className={scss.sayItems}>
            <div className={scss.itemsLeft}>
              <div className={scss.leftDesc}>
                <h2>{t("say.say1")}</h2>
                <img src={sayVector} alt="" />
                <p>{t("say.say2")}</p>
                <ul>
                  <li>{t("say.say3")}</li>
                </ul>
              </div>
            </div>
            <div className={scss.itemsRight}>
              <img src={avatars} alt="" />
            </div>
          </div>
        </Slider>
        <div className={scss.btnSay}>
          <img
            src={btnPrev}
            alt=""
            onClick={() => arrowRef.current.slickPrev()}
          />
          <img
            src={btnNext}
            alt=""
            onClick={() => arrowRef.current.slickNext()}
          />
        </div>
      </div>
    </div>
  );
}

export default Say;
