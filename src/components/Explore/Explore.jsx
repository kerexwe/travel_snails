import React from "react";
import scss from "./Explore.module.scss";
import play from "../../assets/Explore/play.svg";
import guides from "../../assets/Explore/guides.svg";
import customer from "../../assets/Explore/customer.svg";
import secure from "../../assets/Explore/secure.svg";

function Explore() {
  return (
    <>
      <div className="container">
        <div className={scss.explore}>
          <h4>
            Explore A Different <br /> Way To Travel
          </h4>
          <p>
            Cras ultricies mi eu turpis hendrerit fringilla. Nulla <br />
            consequat massa quis enim.
          </p>
        </div>
      </div>
      <div className={scss.bgExplore}>
        <div className={scss.exploreVideo}>
          <p>Device</p>
          <h3>The More Important the Work</h3> 
          <div className={scss.play}>
            <img src={play} alt="" />
            <p>Watch Video</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={scss.exploreScroll}>
          <div className={scss.scroll}>
            <img src={guides} alt="" />
            <h4>Professional Tour Guides</h4>
            <p>Nunc nonummy metus. Donec elit libero</p>
          </div>

          <div className={scss.scroll}>
            <img src={customer} alt="" />
            <h4>Customer Satisfaction</h4>
            <p>Nunc nonummy metus. Donec elit libero</p>
          </div>

          <div className={scss.scroll}>
            <img src={secure} alt="" />
            <h4>Secure Payment</h4>
            <p>Nunc nonummy metus. Donec elit libero</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
