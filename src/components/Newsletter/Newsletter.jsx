import React from "react";
import s from "./Newsletter.module.scss";
import next from "../../assets/images/next.svg";
import { useTranslation } from "react-i18next";

function Newsletter(props) {
  const { t } = useTranslation();
  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={s.title}>
          <h1>{t("newsletter.newsletter1")}</h1>
          <p>
            {t("newsletter.newsletter2")}
            <br />
            {t("newsletter.newsletter3")}
          </p>
          <div>
            <input type="text" />
            <button>
              <img src={next} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
