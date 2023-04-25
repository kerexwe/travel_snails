import React from "react";
import scss from "./CommentTask.module.scss";
import kevinAva from "../../assets/CommentTask/kevinAva.svg";
import star from "../../assets/CommentTask/star.svg";
import facebook from "../../assets/CommentTask/facebook.svg";
import instagram from "../../assets/CommentTask/instagram.svg";
import iner from "../../assets/CommentTask/in.svg";
import twitter from "../../assets/CommentTask/twitter.svg";
import selectDown from "../../assets/CommentTask/selectDown.svg";
import { CommentConst } from "../../constants/CommentConst";
import CommentTaskCard from "./CommentTaskCard/CommentTaskCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

export default function CommentTask() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
  };

  return (
    <div className="container">
      <div className={scss.commentTask}>
        <div className={scss.commentLeft}>
          <div className={scss.infoUser}>
            <img src={kevinAva} alt="" />
            <h4>{t("comment.comment1")}</h4>
            <div className={scss.rating}>
              <img src={star} alt="" />
              <h3>4.8</h3>
              <p>{t("comment.comment2")}</p>
            </div>
            <p>
            {t("comment.comment3")}
            </p>
            <div className={scss.media}>
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={iner} alt="" />
              <img src={twitter} alt="" />
            </div>
            <h6>{t("comment.comment4")}</h6>
            <button>{t("comment.comment5")}</button>
          </div>
        </div>
        <div className={scss.commentRight}>
          <div className={scss.rightHeader}>
            <h3>{t("comment.comment6")}</h3>
            <div className={scss.selection}>
              <div className={scss.select}>
              {t("comment.comment7")} <img src={selectDown} alt="" />
              </div>
              <div className={scss.writeButton}>{t("comment.comment8")}</div>
            </div>
          </div>

          {/* ???????????????????????????????????/ */}

          <div className={scss.pagination}>
            <Slider {...settings}>
              <div className={scss.allComments}>
                {CommentConst.map((item) => (
                  <CommentTaskCard key={item.id} {...item} />
                ))}
              </div>

              <div className={scss.allComments}>
                {CommentConst.map((item) => (
                  <CommentTaskCard key={item.id} {...item} />
                ))}
              </div>

              <div className={scss.allComments}>
                {CommentConst.map((item) => (
                  <CommentTaskCard key={item.id} {...item} />
                ))}
              </div>

              <div className={scss.allComments}>
                {CommentConst.map((item) => (
                  <CommentTaskCard key={item.id} {...item} />
                ))}
              </div>
              <div className={scss.allComments}>
                {CommentConst.map((item) => (
                  <CommentTaskCard key={item.id} {...item} />
                ))}
              </div>
            </Slider>
            {/* <div className={scss.arrows}>
                <img src={prevBtn} alt="" className={scss.prev}/> <br />
                <img src={nextBtn} alt=""  className={scss.next}/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
