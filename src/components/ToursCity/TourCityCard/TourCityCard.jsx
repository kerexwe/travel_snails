import React from "react";
import { useState } from "react";
import scss from "./TourCityCard.module.scss";

const TourCityCard = ({ id, img, img1, img2, img3, img4 }) => {
  const [index, setIndex] = useState(img);
  console.log(index);

  function click1() {
    setIndex(img1);
  }

  function click2() {
    setIndex(img2);
  }

  function click3() {
    setIndex(img3);
  }

  function click4() {
    setIndex(img4);
  }
  function clickDefault() {
    setIndex(img);
  }

  return (
    <div className={scss.toursCity}>
      <div className={scss.toursLeft}>
        <img src={index} alt="image" onClick={()=> clickDefault()}/>
      </div>
      <div className={scss.toursRight}>
        <img src={img1} alt="image" onClick={() => click1()} />
        <img src={img2} alt="image" onClick={() => click2()} />
        <img src={img3} alt="image" onClick={() => click3()} />
        <img src={img4} alt="image" onClick={() => click4()} />
      </div>
    </div>
  );
};

export default TourCityCard;
