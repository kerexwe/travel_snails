import React from 'react'
import css from './TrendingTopics.module.scss'
import img_left from '../../assets/images/left.svg'
import img_right from '../../assets/images/right.svg'
import img1 from '../../assets/images/contact_img2.svg'
import img2 from '../../assets/images/img2.svg'
import img3 from '../../assets/images/img3.svg'
import img4 from '../../assets/images/img4.svg'

function TrendingTopics() {
  return (
        <div className={css.wrapper}>
            <div className={css.text}>
                <div className={css.left}>
                    <h1>Trending Topics</h1>
                </div>
                <div className={css.rig}>
                    <img src={img_left} alt="" />
                    <img src={img_right} alt="" />
                </div>
            </div>
            <div className={css.boxs}>
                <div className={css.box1}>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <h1>Travel</h1>
                    <p>12 posts</p>
                </div>
                <div className={css.box}>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <h1>Business</h1>
                    <p>26 posts</p>
                </div>
                <div className={css.box}>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <h1>Marketing</h1>
                    <p>16 posts</p>
                </div>
                <div className={css.box}>
                    <div>
                        <img src={img4} alt="" />
                    </div>
                    <h1>Sports</h1>
                    <p>26 posts</p>
                </div>
                <div className={css.rig}>
                    <img src={img_left} alt="" />
                    <img src={img_right} alt="" />
                </div>
            </div>
        </div>
  )
}

export default TrendingTopics