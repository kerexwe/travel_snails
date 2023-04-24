import React, { useState } from "react";
import s from "./NewTour.module.scss";
import dollar from "../../../assets/images/dollar.svg";
import star from "../../../assets/images/star.svg";
import time from "../../../assets/images/time.svg";
import location from "../../../assets/images/orangeLoc.svg";
import thailand from "../../../assets/images/thailand.svg";
import india from "../../../assets/images/India.svg";
import london from "../../../assets/images/London.svg";
import Input from "../../Input/Input";
import { useTranslation } from "react-i18next";

function NewTour(props) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(1);

  const click1 = () => setIndex(1);
  const click2 = () => setIndex(2);
  const click3 = () => setIndex(3);

  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={s.center}>
          <p>{t("newTour.new")}</p>
          <h1>
            {t(
              index < 3
                ? index == 1
                  ? "newTour.thailand"
                  : "newTour.london"
                : "newTour.india"
            )}{" "}
          </h1>
          <div className={s.disc}>
            <div>
              <img src={time} alt="" />
              <p>{t("newTour.p1")}</p>
            </div>
            <div>
              <img src={star} alt="" />
              <p>{t("newTour.p2")}</p>
            </div>
            <div>
              <img src={dollar} alt="" />
              <p>{t("newTour.p3")}</p>
            </div>
          </div>
          <button>
            <a href="/details">{t("newTour.btn1")}</a>
          </button>
        </div>
        <div className={s.buttons}>
          <button onClick={click1}>
            <img src={thailand} alt="" />
            <div>
              <h1>{t("newTour.thailand")}</h1>
              <div>
                <img src={location} alt="" />
                <p>{t("newTour.p4")}</p>
              </div>
            </div>
          </button>
          <button onClick={click2}>
            <img src={london} alt="" />
            <div>
              <h1>{t("newTour.london")}</h1>
              <div>
                <img src={location} alt="" />
                <p>{t("newTour.p4")}</p>
              </div>
            </div>
          </button>
          <button onClick={click3}>
            <img src={india} alt="" />
            <div>
              <h1>{t("newTour.india")}</h1>
              <div>
                <img src={location} alt="" />
                <p>{t("newTour.p4")}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className={s.input}>
        <Input />
      </div>
    </div>
  );
}

export default NewTour;
