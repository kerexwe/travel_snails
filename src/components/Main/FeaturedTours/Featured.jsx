import React from "react";
import s from "./Featured.module.scss";
import LocationCard from "../../ListComponents/Locations/LocationCard/LocationCard.jsx";
import { FeaturedConst } from "../../../constants/FeaturedConst";
import { useTranslation } from "react-i18next";

function Featured(props) {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className={s.wrapper}>
        <div className={s.title}>
          <h1>{t("featured.featured1")}</h1>
          <p>{t("featured.featured2")}</p>
        </div>
        <div className={s.cards}>
          {FeaturedConst.map((item) => (
            <LocationCard key={item.id} {...item} />
          ))}
        </div>
        <button>
          <a href="/list">{t("featured.featured3")}</a>
        </button>
      </div>
    </div>
  );
}

export default Featured;
