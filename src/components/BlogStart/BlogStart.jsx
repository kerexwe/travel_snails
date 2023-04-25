import React from 'react'
import css from './BlogStart.module.scss'
import img1 from '../../assets/images/blog_img1.svg'
import img2 from '../../assets/images/blog_img2.svg'
import img3 from '../../assets/images/blog_img3.svg'
import img4 from '../../assets/images/blog_img4.svg'
import avatar1 from '../../assets/images/avat_blog1.svg'
import avatar2 from '../../assets/images/avat_blog2.svg'
import avatar3 from '../../assets/images/avat_blog3.svg'
import avatar4 from '../../assets/images/avat_blog4.svg'


function BlogStart() {
    return (

        <div className={css.wrapper}>
            <div>
                <div className={css.box1}>
                    <img src={img1} alt="" />
                    <div className={css.text}>
                        <p>February 28, 2018</p>
                        <div>
                            <h1>Don't Waste Time! 7 Facts Until You Reach Your Event</h1>
                        </div>
                        <p className={css.p}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <div className={css.avat}>
                            <img src={avatar1} alt="" />
                            <p>Antoine Findlay</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={css.con}>

                        <div>
                            <div className={css.box2}>
                                <img src={img2} alt="" />
                                <div className={css.text2}>
                                    <p>24 May 2019</p>
                                    <div>
                                        <h1>Think Your Event Is Safe? 7 Ways You Can Lose It Today</h1>
                                    </div>
                                    <div className={css.avat2}>
                                        <img src={avatar2} alt="" />
                                        <p>Husna Navarro</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={css.con2}>
                            <div className={css.box3}>
                                <img src={img3} alt="" />
                                <div className={css.text3}>
                                    <p>24 May 2019</p>
                                    <div>
                                        <h1>7 Places To Get Deals On Event</h1>
                                    </div>
                                    <div className={css.avat3}>
                                        <img src={avatar3} alt="" />
                                        <p>Kamile Burke</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className={css.box4}>
                                <img src={img4} alt="" />
                                <div className={css.text4}>
                                    <p>24 May 2019</p>
                                    <div>
                                        <h1>The Next 7 Things You Should Do For Event Success</h1>
                                    </div>
                                    <div className={css.avat4}>
                                        <img src={avatar4} alt="" />
                                        <p>Raihan Nieves</p>
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

export default BlogStart