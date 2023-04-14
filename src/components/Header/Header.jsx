import React from 'react';
import s from './Header.module.scss'
import dot from '../../assets/images/dot.svg'
import vector from '../../assets/images/Vector.svg'
import search from '../../assets/images/search.svg'
import browser from '../../assets/images/browser.svg'
import logo from '../../assets/images/BlackLogo.svg'

function Header(props) {
    return (
            <div className={s.wrapper}>
                <div className={s.left}>
                    <a href="">
                        <img src={logo} alt="" />
                    </a>
                    <a href="">Home</a>
                    <a href="">Components</a>
                    <li>
                    <div >
                        <img src={dot} alt="" />
                        <a href="">Pages</a>
                        <img src={vector} alt="" />
                    </div>
                    <ul>
                            <li><a href="/">HomePage</a></li>
                            <li><a href="/list">List Page</a></li>
                            <li><a href="/details">Details Page</a></li>
                            <li><a href="/checkout">Checout Page</a></li>
                            <li><a href="/completed">Completed Page</a></li>
                            <li><a href="/blog">Blog page</a></li>
                            <li><a href="/blog-details">Blog-Details Page</a></li>
                            <li><a href="/about">About page</a></li>
                            <li><a href="/contact">Contact Page</a></li>
                        </ul>
                    </li>
                    <a href="">Documentation</a>
                </div>
                <div className={s.right}>
                    <img src={search} alt="" />
                    <img src={browser} alt="" />
                    <p>|</p>
                    <a href="">Login</a>
                    <a href="">
                        <button><a href="">Join Us</a></button>
                    </a>
                </div>
            </div>
    );
}

export default Header;