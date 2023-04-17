import React from "react";
import scss from "./TourCityCard.module.scss";

const TourCityCard = ({ src, handleChangeImg }) => {
  return (
    <>
      <div className={scss.picture}>
        <div className={scss.pictureSize}>
        <img src={src} alt="image" onClick={() => handleChangeImg(src)} />

        </div>
      </div>
    </>
  );
}; 

export default TourCityCard;
