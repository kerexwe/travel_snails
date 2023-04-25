import React from "react";
import scss from "./Fastest.module.scss";
import air from "../../assets/Fastest/air.svg";
import site from "../../assets/Fastest/site.svg";
import tours from "../../assets/Fastest/tours.svg";
import verified from "../../assets/Fastest/verified.svg";
import { useTranslation } from "react-i18next";

function Fastest() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container">
        <div className={scss.fastest}>
          <div className={scss.fastestTitle}>
            <h2>{t("fastest.fastest1")}</h2>
            <p>{t("fastest.fastest2")}</p>
          </div>
          <div className={scss.fastestScroll}>
            <div className={scss.scroll}>
              <img src={air} alt="" />
              <h4>130</h4>
              <p>{t("fastest.fastest3")}</p>
            </div>

            <div className={scss.scroll}>
              <img src={tours} alt="" />
              <h4>196</h4>
              <p>{t("fastest.fastest4")}</p>
            </div>

            <div className={scss.scroll}>
              <img src={site} alt="" />
              <h4>10,67k</h4>
              <p>{t("fastest.fastest5")}</p>
            </div>

            <div className={scss.scroll}>
              <img src={verified} alt="" />
              <h4>877</h4>
              <p>{t("fastest.fastest6")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fastest;
