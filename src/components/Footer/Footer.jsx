import React from 'react';
import s from './Footer.module.scss'
import logo from '../../assets/images/BlackLogo.svg'

function Footer(props) {
    return (
        <div className='container'>
            <div className={s.wrapper}>
                <img src={logo} alt="" />
                <div>
                    <p>The starting point for your next proje1ct <br />
                        based on easy-to-customize Material-UI <br />
                        © helps you build apps faster and better.</p>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <p>info@example.com</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>655 Schaefer Dale</p>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="text" />
                    <button></button>
                </div>
            </div>
        </div>
    );
}

export default Footer;