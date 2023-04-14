import React from "react";
import scss from "./Fastest.module.scss";
import air from "../../assets/Fastest/air.svg";
import site from "../../assets/Fastest/site.svg";
import tours from "../../assets/Fastest/tours.svg";
import verified from "../../assets/Fastest/verified.svg"; 

function Fastest() {
  return (
    <>
      <div className="container">
        <div className={scss.fastest}>
          <div className={scss.fastestTitle}>
            <h2>Fastest Way to Book over 450 Great Tours</h2>
            <p>
              Since wire-frame renderings are relatively simple and fast to
              calculate, they are often used in cases
            </p>
          </div>
          <div className={scss.fastestScroll}>

            <div className={scss.scroll}>
              <img src={air} alt="" />
              <h4>130</h4>
              <p>Air tickets sold</p>
            </div>

            <div className={scss.scroll}>
              <img src={tours} alt="" />
              <h4>196</h4>
              <p>Tours booked</p>
            </div>

            <div className={scss.scroll}>
              <img src={site} alt="" />
              <h4>10,67k</h4>
              <p>Site visitors</p>
            </div>

            <div className={scss.scroll}>
              <img src={verified} alt="" />
              <h4>877</h4>
              <p>Verified hotels</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Fastest;
