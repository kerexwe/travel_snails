import React, { useCallback, useEffect, useState } from 'react';
import s from './Header.module.scss'
import dot from '../../assets/images/dot.svg'
import vector from '../../assets/images/Vector.svg'
import search from '../../assets/images/Search11.svg'
import lightSearch from '../../assets/images/lightSearch.svg'
import browser from '../../assets/images/language.svg'
import lightLang from '../../assets/images/lightLanguage.svg'
import logo from '../../assets/images/Logo.svg'
import blacklogo from '../../assets/images/BlackLogo.svg'
import burger from '../../assets/images/burger.svg'
import x from '../../assets/images/xxx.png'
import theme from '../../hooks/theme';
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

  const [nav, setNav] = useState(false)
  return (
    <header className={HeaderStyles}>
      <div className={s.wrapper}>
      <a href="" id={s.logoM}>
            <img src={theme != 'dark' ? blacklogo : logo} alt=""  />
          </a>

        {/* <div className={s.left}> */}
        <div
                  className={
                    nav ? [s.left, s.activee].join(' ') : [s.left]
                  }
        >
          <a href="" id={s.logoD}>
            <img src={theme != 'dark' ? blacklogo : logo} alt=""  />
          </a>
          <div>          
            <a href="/">Home</a>
          </div>
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
        <div className={s.right}>
          <label class="toggle" for="myToggle">
            <input class="toggle__input" name="" type="checkbox" id="myToggle" onClick={switchTheme} />
            <div class="toggle__fill"></div>
          </label>

          <img src={theme != 'dark' ? search : lightSearch} alt="" />

          <li>
            <img src={theme != 'dark' ? browser : lightLang} alt=""  />

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
        <div className={s.rightM}>
        <div onClick={()=> setNav(!nav)} id={s.burger}>
        {nav ? <img src={x} id={s.x}/> : <img src={burger} alt=""/>}
        </div>
        <img src={theme != 'dark' ? search : lightSearch} alt="" id={s.searchM}/>
        </div>
      </div>
    </header>
  );
}

export default Header;