import React, { useCallback, useEffect, useState } from "react";
import s from "./Header.module.scss";
import dot from "../../assets/images/dot.svg";
import vector from "../../assets/images/Vector.svg";
import search from "../../assets/images/Search11.svg";
import lightSearch from '../../assets/images/lightSearch.svg'
import lightLang from '../../assets/images/lightLanguage.svg'
import x from '../../assets/images/xxx.png'
import browser from "../../assets/images/language.svg";
import logo from "../../assets/images/Logo.svg";
import blacklogo from "../../assets/images/BlackLogo.svg";
import burger from "../../assets/images/burger.svg";
import theme from "../../hooks/theme";

import { useTheme } from "../../hooks/theme";
import { useTranslation } from "react-i18next";

function Header(props) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  // const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);

  // const switchTheme = () => {
  //   const newTheme = isDarkMode === 'light' ? 'dark' : 'light';
  //   setIsDarkMode(newTheme)
  // }

  const { theme, setTheme } = useTheme();
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [isActive, setActive] = useState(false);
  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  let HeaderStyles = isActive ? s.active : s.nonActive;
  const [nav, setNav] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth
    });
  }, []);
  return (
    <header className={HeaderStyles}>
      <div className={s.wrapper}>
        {/* <a href="" id={s.logoM}>
          <img src={logo} alt="" id={s.logo} style={{ display: isDarkMode ? "none" : "block" }} />
          <img src={blacklogo} alt="" style={{ display: isDarkMode ? "block" : "none" }} />
        </a> */}
        <div className={ nav ? [s.left, s.active].join(' ') : [s.left]}>
          <a href="" id={s.logoD}>
            <img src={theme != 'dark' ? blacklogo : logo} alt="" />
          </a>

          <div>
            {" "}
            <a href="/">{t("header.home")}</a>
          </div>
          <a href="">{t("header.components")}</a>
          <li>
            <div className={s.page}>
              <img src={dot} alt="" />
              <a href="">{t("header.pages")}</a>
              <img src={vector} alt="" />
            </div>
            <ul>
              <li>
                <a href="/">{t("header.home")}</a>
              </li>
              <li>
                <a href="/list">{t("header.tours")}</a>
              </li>
              <li>
                <a href="/details">{t("header.details")}</a>
              </li>
              <li>
                <a href="/checkout">{t("header.checkout")}</a>
              </li>
              <li>
                <a href="/completed">{t("header.complete")}</a>
              </li>
              <li>
                <a href="/blog">{t("header.blog")}</a>
              </li>
              <li>
                <a href="/blog-details">{t("header.blogDet")}</a>
              </li>
              <li>
                <a href="/about">{t("header.about")}</a>
              </li>
              <li>
                <a href="/contact">{t("header.contact")}</a>
              </li>
            </ul>
          </li>
          <a href="">{t("header.docum")}</a>
        </div>
      <div className={s.right}>
        <label class="toggle" for="myToggle">
          <input
            class="toggle__input"
            name=""
            type="checkbox"
            id="myToggle"
            onClick={switchTheme}
          />
          <div class="toggle__fill"></div>
        </label>

        <img src={theme != 'dark' ? search : lightSearch} alt="" />

        <li>
          <img src={theme != 'dark' ? browser : lightLang} alt="" />

          <ul>
            <li>
              <button onClick={() => changeLanguage("ru")}>RU</button>
            </li>
            <li>
              <button onClick={() => changeLanguage("en")}>EN</button>
            </li>
          </ul>
        </li>
        <p>|</p>
        <a href="">{t("header.login")}</a>
        <a href="">
          <button>
            <a href="">{t("header.join")}</a>
          </button>
        </a>
      </div>
        <img src={burger}  id={s.burger} className={windowSize < 768 ? '' : 'hide'} />

      <img src={search} alt="" id={s.searchM} />

    </div>

    </header >
  );
}

export default Header;

// <div className={s.wrapper}>
//          <a href="" id={s.logoM}>
//           <img src={logo} alt="" id={s.logo} style={{ display: isDarkMode ? "none" : "block" }} />
//           <img src={blacklogo} alt="" style={{ display: isDarkMode ? "block" : "none" }} />
//         </a>
//         <div className={s.left}>
//           <a href="" id={s.logoD}>
//             <img
//               src={logo}
//               alt=""
//               id={s.logo}
//               style={{ display: "light" ? "none" : "block" }}
//             />
//             <img
//               src={blacklogo}
//               alt=""
//               style={{ display: "dark" ? "block" : "none" }}
//             />
//           </a>

//           <div>
//             {" "}
//             <a href="/">{t("header.home")}</a>
//           </div>
//           <a href="">{t("header.components")}</a>
//           <li>
//             <div className={s.page}>
//               <img src={dot} alt="" />
//               <a href="">{t("header.pages")}</a>
//               <img src={vector} alt="" />
//             </div>
//             <ul>
//               <li>
//                 <a href="/">{t("header.home")}</a>
//               </li>
//               <li>
//                 <a href="/list">{t("header.tours")}</a>
//               </li>
//               <li>
//                 <a href="/details">{t("header.details")}</a>
//               </li>
//               <li>
//                 <a href="/checkout">{t("header.checkout")}</a>
//               </li>
//               <li>
//                 <a href="/completed">{t("header.complete")}</a>
//               </li>
//               <li>
//                 <a href="/blog">{t("header.blog")}</a>
//               </li>
//               <li>
//                 <a href="/blog-details">{t("header.blogDet")}</a>
//               </li>
//               <li>
//                 <a href="/about">{t("header.about")}</a>
//               </li>
//               <li>
//                 <a href="/contact">{t("header.contact")}</a>
//               </li>
//             </ul>
//           </li>
//           <a href="">{t("header.docum")}</a>
//         </div>
//         <img src={burger} alt="" id={s.burger} />
//         <div className={s.right}>
//           <label class="toggle" for="myToggle">
//             <input
//               class="toggle__input"
//               name=""
//               type="checkbox"
//               id="myToggle"
//               onClick={switchTheme}
//             />
//             <div class="toggle__fill"></div>
//           </label>

//           <img src={search} alt="" />
//           <li>
//             <img src={browser} alt="" />
//             <ul>
//               <li>
//                 <button onClick={() => changeLanguage("ru")}>RU</button>
//               </li>
//               <li>
//                 <button onClick={() => changeLanguage("en")}>EN</button>
//               </li>
//             </ul>
//           </li>
//           <p>|</p>
//           <a href="">{t("header.login")}</a>
//           <a href="">
//             <button>
//               <a href="">{t("header.join")}</a>
//             </button>
//           </a>
//         </div>
//       </div> 
