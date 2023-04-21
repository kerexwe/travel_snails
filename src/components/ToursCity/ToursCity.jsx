import React, { useMemo, useState } from "react";
import { DefCityImg, ToursCityImg } from "../../constants/ToursCityImg";
import TourCityCard from "./TourCityCard/TourCityCard";
import scss from "./ToursCity.module.scss";

function ToursCity() {
  const [img, setImg] = useState(ToursCityImg[0]);
  const handleChangeImg = (src) => {
    setImg(src);
  };

  const renderImg = useMemo(
    () =>
      ToursCityImg.map((item) => (
        <TourCityCard key={item} src={item} handleChangeImg={handleChangeImg} />
      )),
    [ToursCityImg]
  );

  return (
    <div className="container">
      <div className={scss.toursCity}>
        <div className={scss.toursLeft}>
          <img src={img} alt="image" />
        </div>
        <div className={scss.toursRight}>{renderImg.slice(1, 5)}</div>
      </div>
    </div>
  );
}

export default ToursCity;
