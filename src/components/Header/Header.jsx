import React, { useCallback, useEffect, useState } from 'react';
import s from './Header.module.scss'
import dot from '../../assets/images/dot.svg'
import vector from '../../assets/images/Vector.svg'
import search from '../../assets/images/Search11.svg'
import browser from '../../assets/images/language.svg'
import logo from '../../assets/images/Logo.svg'
import blacklogo from '../../assets/images/BlackLogo.svg'
// import burger from '../../assets/images/burger.svg'
import burger from '../../assets/images/burger.svg'

import { useTheme } from '../../hooks/theme';


function Header(props) {

  const { theme, setTheme } = useTheme()
  

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }


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




  return (
    <header className={HeaderStyles}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <a href="">
          <img src={logo} alt="" id={s.logo} style={{ display: theme ? "none" : "block" }}/>
            <img src={blacklogo} alt="" style={{ display: theme ? "block" : "none" }}/>
          </a>
          <a href="/">Home</a>
          <a href="">Components</a>
          < li>
            <div className={s.page}>
              <img src={dot} alt="" />
              <a href="">Pages</a>
              <img src={vector} alt="" />
            </div>
            <ul>
              <li><a href="/">HomePage</a></li>
              <li><a href="/list">ListPage</a></li>
              <li><a href="/details">DetailsPage</a></li>
              <li><a href="/checkout">ChecoutPage</a></li>
              <li><a href="/completed">CompletedPage</a></li>
              <li><a href="/blog">BlogPage</a></li>
              <li><a href="/blog-details">Blog-DetailsPage</a></li>
              <li><a href="/about">AboutPage</a></li>
              <li><a href="/contact">ContactPage</a></li>
            </ul>
          </li>
          <a href="">Documentation</a>
        </div>
        <div className={s.rightM}>
        <img src={burger} alt="" id={s.burger}/>
          <img src={search} alt="" />
        </div>
        <div className={s.right}>
          <label class="toggle" for="myToggle">
            <input class="toggle__input" name="" type="checkbox" id="myToggle" onClick={switchTheme} />
            <div class="toggle__fill"></div>
          </label>

          <img src={search} alt="" />
          <li>
            <img src={browser} alt="" />
            <ul>
              <li><button>ru</button></li>
              <li><button>eng</button></li>
            </ul>
          </li>
          <p>|</p>
          <a href="">Login</a>
          <a href="">
            <button><a href="">Join Us</a></button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;