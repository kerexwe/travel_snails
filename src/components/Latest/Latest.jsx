import React, { useRef } from "react";
import scss from "./Latest.module.scss";
import btnVector from "../../assets/Latest/btnVector.svg";
import viewAll from "../../assets/Latest/viewAll.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                <h4> 19 May 2021</h4>
                <h3>To avoid conflicts it is recommended that business </h3>
                <p>
                  Business stakeholders review wireframes to ensure that
                  requirements and objectives
                </p>
              </>

              <>
                <h4> 19 May 2021</h4>
                <h3>To avoid conflicts it is recommended that business </h3>
                <p>
                  Business stakeholders review wireframes to ensure that
                  requirements and objectives
                </p>
              </>

              <>
                <h4> 19 May 2021</h4>
                <h3>To avoid conflicts it is recommended that business </h3>
                <p>
                  Business stakeholders review wireframes to ensure that
                  requirements and objectives
                </p>
              </>

              <>
                <h4> 19 May 2021</h4>
                <h3>To avoid conflicts it is recommended that business </h3>
                <p>
                  Business stakeholders review wireframes to ensure that
                  requirements and objectives
                </p>
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
          <h3>Latest Posts </h3>

          <div className={scss.morePosts}>
            <h5> 17 May 2021</h5>
            <h3>
              Understanding color theory: the color wheel and finding
              complementary colors
            </h3>
            <p>
              Digital product design news, articles, and resources delivered
              straight to your inbox.
            </p>
          </div>

          <div className={scss.morePosts}>
            <h5> 13 Aug 2021</h5>
            <h3>Any mechanical keyboard enthusiasts in design?</h3>
            <p>
              Sidebar has been collecting the best design links of the day since
              October 2012. It's maintained by Sacha Greif and built with ...
            </p>
          </div>

          <div className={scss.morePosts}>
            <h5>04 Jul 2021</h5>
            <h3>The More Important the Work, the More Important the Rest</h3>
            <p>
              Interested in digital strategy? Subscribe and get the 5 most
              piping hot links of the week, emailed straight to your inbox.
            </p>
          </div>

          <button>
            View All
            <img src={viewAll} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Latest;
