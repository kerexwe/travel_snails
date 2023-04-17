import React from "react";
import { ToursCityImg } from "../../constants/ToursCityImg";
import TourCityCard from "./TourCityCard/TourCityCard";
import scss from "./ToursCity.module.scss";

function ToursCity() {

  return (
    <div className="container">
      {ToursCityImg.map((item) => (
        <TourCityCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ToursCity;
