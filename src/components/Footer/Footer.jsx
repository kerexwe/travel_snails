import React from "react";
import s from "./Footer.module.scss";
import logo from "../../assets/images/BlackLogo.svg";
import email from "../../assets/images/email.svg";
import location from "../../assets/images/location.svg";
import inst from "../../assets/images/inst.svg";
import facebook from "../../assets/images/facebook.svg";
import inn from "../../assets/images/inn.svg";
import twitter from "../../assets/images/twitter.svg";
import next from "../../assets/images/next.svg";
import { useTheme } from "../../hooks/theme";
// import blacklogo from '../../assets/images/BlackLogo.svg'
import { useTranslation } from "react-i18next";

function Footer(props) {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  return (
    <div className="container">
      <div className={s.wrapper}>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className={s.disc}>
          <p>{t("footer.footer1")}</p>
          <div className={s.social}>
            <img src={facebook} alt="" />
            <img src={inst} alt="" />
            <img src={inn} alt="" />
            <img src={twitter} alt="" />
          </div>

          <div className={s.contact}>
            <div>
              <img src={email} alt="" />
              <p>info@example.com</p>
            </div>
            <div>
              <img src={location} alt="" />
              <p>{t("footer.footer2")}</p>
            </div>
          </div>
          <div className="">
            <input type="text" placeholder="Email address" />
            <button>
              <img src={next} alt="" />
            </button>
          </div>

          <div className={s.inputP}>
            <input type="text" placeholder="Email address" />
            <button>
              <img src={next} alt="" />
            </button>
          </div>
        </div>
        <div className={s.social}>
          <img src={facebook} alt="" />
          <img src={inst} alt="" />
          <img src={inn} alt="" />
          <img src={twitter} alt="" />
        </div>
        <div className={s.bottom}>
          <p>{t("footer.footer3")}</p>
          <div>
            <p>{t("footer.footer4")}</p>
            <p>{t("footer.footer5")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
