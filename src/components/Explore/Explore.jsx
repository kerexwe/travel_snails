import React from "react";
import scss from "./Explore.module.scss";
import play from "../../assets/Explore/play.svg";
import guides from "../../assets/Explore/guides.svg";
import customer from "../../assets/Explore/customer.svg";
import secure from "../../assets/Explore/secure.svg";
import { useTranslation } from "react-i18next";

function Explore() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container">
        <div className={scss.explore}>
          <h4>
            {t("explore.explore1")} <br /> {t("explore.explore2")}
          </h4>
          <p>
          {t("explore.explore3")} <br />
          {t("explore.explore4")}
          </p>
        </div>
      </div>
      <div className={scss.bgExplore}>
        <div className={scss.exploreVideo}>
          <p>{t("explore.explore5")}</p>
          <h3>{t("explore.explore6")}</h3>
          <div className={scss.play}>
            <img src={play} alt="" />
            <p>{t("explore.explore7")}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={scss.exploreScroll}>
          <div className={scss.scroll}>
            <img src={guides} alt="" />
            <h4>{t("explore.explore8")}</h4>
            <p>{t("explore.explore9")}</p>
          </div>

          <div className={scss.scroll}>
            <img src={customer} alt="" />
            <h4>{t("explore.explore10")}</h4>
            <p>{t("explore.explore9")}</p>
          </div>

          <div className={scss.scroll}>
            <img src={secure} alt="" />
            <h4>{t("explore.explore11")}</h4>
            <p>{t("explore.explore9")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
