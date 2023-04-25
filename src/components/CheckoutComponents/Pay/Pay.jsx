import React from "react";
import s from "./Pay.module.scss";
import number1 from "../../../assets/images/number1.svg";
import number2 from "../../../assets/images/number2.svg";
import star from "../../../assets/images/star(1).svg";
import bg from "../../../assets/images/IMG11.svg";
import user from "../../../assets/images/user.svg";
import paypal from "../../../assets/images/ic_paypal.svg";
import mastercard from "../../../assets/images/ic_mastercard.svg";
import visa from "../../../assets/images/visa-logo.svg";
import departure from "../../../assets/images/ic_calendar.svg";
import guests from "../../../assets/images/guests.svg";
import { useTranslation } from "react-i18next";

// import dep from '../../../assets/images/ic_calendar.svg'

function Pay(props) {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className={s.wrapper}>
        <div className={s.confirm}>
          <h1>{t("pay.pay1")}</h1>
          <hr />
          <div className={s.first}>
            <div className={s.title}>
              <img src={number1} alt="" />
              <h1>{t("pay.pay2")}</h1>
            </div>
            <p>{t("pay.pay3")}</p>
            <div>
              <div className={s.input}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="text" placeholder="Full Address" />
              <input type="text" placeholder="Full Address 2 (optional)" />
            </div>
            <div className={s.radio}>
              <p>{t("pay.pay4")}</p>
              <div>
                <p>{t("pay.pay5")}</p>
              </div>
            </div>
            <div>
              <div>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="text" placeholder="Full Address" />
              <input type="text" placeholder="Full Address 2 (optional)" />
            </div>
          </div>

          <hr />

          <div className={s.title}>
            <img src={number2} alt="" />
            <h1>{t("pay.pay6")}</h1>
          </div>
          <div className={s.ckeck}>
            <input type="radio" />
            <div>
              <h1>{t("pay.pay7")}</h1>
              <p>{t("pay.pay8")}</p>
            </div>
            <img src={paypal} alt="" />
          </div>
          <div className={s.secondCheck}>
            <div className={s.ckeck}>
              <input type="checkbox" />
              <div>
                <h1>{t("pay.pay9")}</h1>
                <p>{t("pay.pay10")}</p>
              </div>
              <div className={s.card}>
                <img src={mastercard} alt="" />
                <img src={visa} alt="" />
              </div>
            </div>
            <div className={s.input2}>
              <input
                type="text"
                placeholder="Card Number XXXX XXXX XXXX XXXX"
              />
              <input type="text" />
              <div>
                <input type="text" />
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        <div className={s.booking}>
          <div className={s.main}>
            <img src={bg} alt="" />
            <div>
              <div className={s.top}>
                <h1>{t("pay.pay11")}</h1>
                <div>
                  <img src={star} alt="" />
                  <h1>4.6</h1>
                  <p>{t("pay.pay12")}</p>
                </div>
              </div>
              <div className={s.bottom}>
                <img src={user} alt="" />
                <div className={s.guide}>
                  <p>{t("pay.pay13")} </p>
                  <h1>{t("pay.pay14")}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className={s.center}>
            <div className={s.input}>
              <div>
                <img src={departure} alt="" />
                <div>
                  <p>{t("pay.pay15")}</p>
                  <h1>{t("pay.pay16")}</h1>
                </div>
              </div>
              {/* <hr className={s.inputBorder}/> */}
              <div>
                <img src={guests} alt="" />
                <div>
                  <p>{t("pay.pay17")}</p>
                  <h1>{t("pay.pay18")}</h1>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p>{t("pay.pay19")}</p>
                <h1>$357</h1>
              </div>
              <div>
                <p>{t("pay.pay20")}</p>
                <h1>-</h1>
              </div>
            </div>
          </div>
          <div className={s.button}>
            <div>
              <h1>{t("pay.pay21")}l</h1>
              <h1>345$ </h1>
            </div>
            <button>
              {" "}
              <a href="/completed">{t("pay.pay22")}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pay;
