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

export default function CommentTask() {
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
            <h4>Kevin Francis</h4>
            <div className={scss.rating}>
              <img src={star} alt="" />
              <h3>4.8</h3>
              <p>(234 reviews)</p>
            </div>
            <p>
              Described by Queenstown House & Garden magazine as having 'one of
              the best views we've ever seen' you will love relaxing in this
              newly built
            </p>
            <div className={scss.media}>
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={iner} alt="" />
              <img src={twitter} alt="" />
            </div>
            <h6>Member since Mar 15, 2021</h6>
            <button>Contact Tour Guide</button>
          </div>
        </div>
        <div className={scss.commentRight}>
          <div className={scss.rightHeader}>
            <h3>123 Reviews</h3>
            <div className={scss.selection}>
              <div className={scss.select}>
                Most recent <img src={selectDown} alt="" />
              </div>
              <div className={scss.writeButton}>Write a Review</div>
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
