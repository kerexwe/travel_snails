import React from "react";
import s from "./Tour.module.scss";
import share from "../../../assets/images/share.svg";
import fav from "../../../assets/images/fav.svg";
import star from "../../../assets/images/star(1).svg";
import location from "../../../assets/images/location.svg";
import user from "../../../assets/images/Avatar.svg";
import calendar from "../../../assets/images/ic_calendar.svg";
import location1 from "../../../assets/images/location1.svg";
import language from "../../../assets/images/language.svg";
import time from "../../../assets/images/time2.svg";
import name from "../../../assets/images/name.svg";
import phone from "../../../assets/images/phone.svg";
import day1 from "../../../assets/images/day1.svg";
import day2 from "../../../assets/images/day2.svg";
import day3 from "../../../assets/images/day3.svg";
import facebook from "../../../assets/images/facebook1.svg";
import inst from "../../../assets/images/inst1.svg";
import inn from "../../../assets/images/in1.svg";
import twitter from "../../../assets/images/twitter1.svg";
import guests from "../../../assets/images/guests.svg";
import data from "../../../assets/images/data.svg";
import { useTranslation } from "react-i18next";

function Tour(props) {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className={s.wrapper}>
        <div className={s.tour}>
          <div className={s.title}>
            <h1>{t("tour.tour1")}</h1>
            <div>
              <img src={share} alt="" />
              <div className={s.heart}>
                <div class="checkbox-heart">
                  <input
                    class="checkbox-heart--origin"
                    id="4"
                    type="checkbox"
                  />
                  <div class="checkbox-heart--custom custom--heart">
                    <div class="checkbox-heart--custom__inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.info}>
            <div className={s.left}>
              <img src={star} alt="" />
              <h1>4.6</h1>
              <p>{t("tour.tour2")}</p>
            </div>
            <div className={s.center}>
              <img src={location} alt="" />
              <p>{t("tour.tour3")}</p>
            </div>
            <div className={s.right}>
              <img src={user} alt="" />
              <div>
                <p>{t("tour.tour4")}</p>
                <p className={s.p2}> {t("tour.tour5")}</p>
              </div>
            </div>
          </div>
          <div className={s.overview}>
            <h1>{t("tour.tour6")}</h1>
            <div>
              <div>
                <div>
                  <img src={calendar} alt="" />
                  <div>
                    <p>{t("tour.tour7")}</p>
                    <p className={s.pp}>03/01/2019 - 01/30/2023</p>
                  </div>
                </div>
                <div>
                  <img src={location1} alt="" />
                  <div>
                    <p>{t("tour.tour8")} </p>
                    <p className={s.pp}>{t("tour.tour9")}</p>
                  </div>
                </div>
                <div>
                  <img src={time} alt="" />
                  <div>
                    <p>{t("tour.tour10")}</p>
                    <p className={s.pp}>{t("tour.tour11")}</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <img src={name} alt="" />
                  <div>
                    <p>{t("tour.tour12")}</p>
                    <p className={s.pp}>{t("tour.tour13")}</p>
                  </div>
                </div>
                <div>
                  <img src={phone} alt="" />
                  <div>
                    <p>{t("tour.tour14")}</p>
                    <p className={s.pp}>(308) 555-0121</p>
                  </div>
                </div>
                <div>
                  <img src={language} alt="" />
                  <div>
                    <p>{t("tour.tour15")}</p>
                    <p className={s.pp}>{t("tour.tour16")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.description}>
            <h1>{t("tour.tour17")}</h1>
            <p>
            {t("tour.tour18")} <br />
            {t("tour.tour19")}
            </p>
          </div>
          <div className={s.description}>
            <h1>{t("tour.tour20")}</h1>
            <ul>
              <li>
                <p>
                {t("tour.tour21")}
                </p>
              </li>
              <li>
                <p>{t("tour.tour22")}</p>
              </li>
              <li>
                <p>
                {t("tour.tour23")}
                </p>
              </li>
              <li>
                <p>{t("tour.tour24")}</p>
              </li>
            </ul>
          </div>
          <div className={s.includes}>
            <h1>{t("tour.tour25")}</h1>
            <div>
              <div>
                <div>
                  <input type="checkbox" />
                  <p>{t("tour.tour26")}</p>
                </div>
                <div>
                  <input type="Checkbox" />
                  <p>{t("tour.tour27")}</p>
                </div>
                <div>
                  <input type="Checkbox" />
                  <p>{t("tour.tour28")}</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>{t("tour.tour29")}</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>{t("tour.tour30")}</p>
                </div>
              </div>
              <div>
                <div>
                  <input type="checkbox" />
                  <p>{t("tour.tour31")}</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>{t("tour.tour32")}</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>{t("tour.tour33")}</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>{t("tour.tour34")}</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>{t("tour.tour35")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.program}>
            <h1>{t("tour.tour36")}</h1>
            <div>
              <img src={day1} alt="" />
              <p>
              {t("tour.tour18")} <br />
            {t("tour.tour19")}
              </p>
            </div>
            <div>
              <img src={day2} alt="" />
              <p>
              {t("tour.tour18")} <br />
            {t("tour.tour19")}
              </p>
            </div>
            <div>
              <img src={day3} alt="" />
              <p>
              {t("tour.tour18")} <br />
            {t("tour.tour19")}
              </p>
            </div>
          </div>
          <div className={s.button}>
            <p>{t("tour.tour37")}</p>
            <div>
              <button>
                <img src={facebook} alt="" /> <p>Facebook</p>
              </button>
              <button className={s.button1}>
                <img src={inst} alt="" /> <p>Facebook</p>
              </button>
              <button className={s.button2}>
                <img src={inn} alt="" /> <p>Facebook</p>
              </button>
              <button className={s.button3}>
                <img src={twitter} alt="" /> <p>Facebook</p>
              </button>
            </div>
          </div>
        </div>
        <div className={s.price}>
          <div className={s.information}>
            <div className={s.cost}>
              <h1>$199</h1>
              <h1 id={s.h1}>$199</h1>
              <p>{t("tour.tour38")}</p>
            </div>
            <div className={s.inputs}>
              <div>
                <img src={data} alt="" />
                <input type="text" placeholder="Departure day" />
              </div>
              <div>
                <img src={guests} alt="" />
                <input type="text" placeholder="Guests" />
              </div>
            </div>
            <div>
              <div>
                <p>{t("tour.tour39")}</p>
                <p className={s.pg}>$357</p>
              </div>
              <div>
                <p>{t("tour.tour40")}</p>
                <p className={s.pg}>-</p>
              </div>
            </div>
          </div>
          <hr />
          <div className={s.booking}>
            <div>
              <h1>{t("tour.tour41")}</h1>
              <h1>$357</h1>
            </div>
            <button>
              <a href="/checkout">{t("tour.tour42")}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour;
