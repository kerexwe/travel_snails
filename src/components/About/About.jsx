import React from 'react'
import css from '../../components/About/About.module.scss'
import About1 from '../../assets/images/About_img1.svg'
import About2 from '../../assets/images/About_img2.svg'
import About3 from '../../assets/images/About_img3.svg'
import About4 from '../../assets/images/About_img4.svg'
import Star from '../../assets/images/Abput_star.svg'
import Mission from '../../assets/images/mission_img.svg'


function About() {
    return (
        <div className={css.about}>
            <div className={css.wrapper}>
                <div className={css.About_wrap}>
                    <h1 className={css.text_about}>About Us</h1>
                    <p className={css.text_size}>Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!</p>
                    <div className={css.images}>
                        <div>
                            <img className={css.About1} src={About1} alt="" />
                        </div>
                        <div className={css.img_del}>
                            <img src={About2} alt="" />
                        </div>
                        <div className={css.img_del}>
                            <img src={About3} alt="" />
                        </div>
                        <div className={css.img_del}>
                            <img src={About4} alt="" />
                        </div>
                    </div>
                    <div className={css.number}>
                        <div className={css.number_wrap}>
                            <div className={css.star}>
                                <h1>130</h1>
                                <img className={css.img_star} src={Star} alt="" />
                            </div>
                            <p>Air tickets sold</p>
                        </div>
                        <div className={css.number_wrap}>
                            <div className={css.star}>
                                <h1>196</h1>
                                <img className={css.img_star} src={Star} alt="" />
                            </div>
                            <p>Tours booked</p>
                        </div>
                        <div className={css.number_wrap}>
                            <div className={css.star}>
                                <h1>10.68k</h1>
                                <img className={css.img_star} src={Star} alt="" />
                            </div>
                            <p>Site visitors</p>
                        </div>
                        <div className={css.number_wrap}>
                            <div className={css.star}>
                                <h1>877</h1>
                                <img className={css.img_star} src={Star} alt="" />
                            </div>
                            <p>Verified hotels</p>
                        </div>
                    </div>
                </div>
                <div className={css.info}>
                    <div className={css.info_lef}>
                        <hr />
                        <h1>Maecenas malesuada. Cras <br /> ultricies mi eu turpis <br /> hendrerit fringilla. </h1>
                    </div>
                    <div className={css.info_rig}>
                        <h1>Fusce convallis metus id felis luctus</h1>
                        <p className={css.info_p}>Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci. Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.</p>
                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Maecenas nec odio et ante tincidunt tempus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vestibulum eu odio. Curabitur ullamcorper ultricies nisi.</p>
                    </div>
                </div>
                <div className={css.mission}>

                    <div className={css.mission_text}>
                        <h2>Our Mission</h2>
                        <p>Curabitur ullamcorper ultricies nisi. Aenean viverra rhoncus pede.</p>
                    </div>

                    <div className={css.mission_wrap}>
                        <div className={css.wrap_lef}>
                            <img src={Mission} alt="#" />
                        </div>

                        <div className={css.wrap_rig}>
                            <div className={css.wrap_box}>
                                <div className={css.box}>
                                    <div className={css.text_num}>
                                        <h1>01</h1>
                                    </div>
                                    <div className={css.text_box}>
                                        <h1>Vestibulum</h1>
                                        <p>In dui magna, posuere eget, vestibulum et, tempor auctor, justo.</p>
                                    </div>
                                </div>
                                <div className={css.box2}>
                                    <div className={css.con2}>
                                        <div className={css.text_num}>
                                            <h1>02</h1>
                                        </div>
                                        <div className={css.text_box}>
                                            <h1>Fusce</h1>
                                            <p>Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
                                        </div>
                                    </div>
                                    <div className={css.con3}>
                                        <div className={css.text_num}>
                                            <h1>03</h1>
                                        </div>
                                        <div className={css.text_box}>
                                            <h1>Praesent</h1>
                                            <p>Suspendisse feugiat. Quisque id odio.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About