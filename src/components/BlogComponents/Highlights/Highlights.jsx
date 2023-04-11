import React from 'react';
import s from './Highlights.module.scss'
import HighlightsCard from './HighlightsCard/HighlightsCard';
import { HighlightsConst } from '../../../constants/HighlightsConst'
import adv from '../../../assets/images/city3.png'
import post1 from '../../../assets/images/city3.png'
import post2 from '../../../assets/images/city3.png'
import post3 from '../../../assets/images/city3.png'
import post4 from '../../../assets/images/city3.png'

function Highlights(props) {
    return (
        <div className='container'>
            <div className={s.wrapper}>
                <div className={s.pagination}>
                {
                    HighlightsConst.map((item) => <HighlightsCard key={item.id} {...item} />)
                }
                </div>
                
        <div>
          <input type="text" placeholder='Search...' />
          <div className={s.categories}>
            <h1 className={s.title}>Categories</h1>
            <ul>
              <li>Marketing</li>
              <li>Development</li>
              <li>Marketing</li>
              <li>Marketing</li>
              <li>Marketing</li>
            </ul>
          </div>
          <div className={s.recentPosts}>
            <h1 className={s.title}>Recent Posts</h1>
            <div className={s.post}>
              <img src={post1} alt="" />
              <div className={s.txt}>
                <h1 className={s.post_text}>Understanding color theory: the <br /> color wheel and finding...</h1>
                <p className={s.time}>November 7, 2017 8 min read</p>
              </div>
            </div>
            <div className={s.post}>
              <img src={post2} alt="" />
              <div className={s.txt}>
                <h1 className={s.post_text}>Understanding color theory: the <br /> color wheel and finding...</h1>
                <p className={s.time}>November 7, 2017 8 min read</p>
              </div>
            </div>
            <div className={s.post}>
              <img src={post3} alt="" />
              <div className={s.txt}>
                <h1 className={s.post_text}>Understanding color theory: the <br /> color wheel and finding...</h1>
                <p className={s.time}>November 7, 2017 8 min read</p>
              </div>
            </div>
            <div className={s.post}>
              <img src={post4} alt="" />
              <div className={s.txt}>
                <h1 className={s.post_text}>Understanding color theory: the <br /> color wheel and finding...</h1>
                <p className={s.time}>November 7, 2017 8 min read</p>
              </div>
            </div>

          </div>
          <div className={s.popolarTags}>
            <h1 className={s.title}>Popular Tags</h1>
            <div className={s.tags}>
              <div>
              <button >Marketing</button>
                <button>Development</button>
                <button>HR & Recruting</button> 
              </div>
              <div>
              <button>HR  Recruting</button>
                <button>Design</button>
                <button>Management</button>
              </div>
              <div>
              <button>Business</button>
                <button>Community</button>
                <button>Tutorials</button>
              </div>
            </div>

          </div>

          <div className={s.adv}>
            <img src={adv} alt="" />
            <div className={s.center}>
              <div className={s.disc}>
                <h1>Advertisement</h1>
                <p>Duis leo. Donec orci lectus, aliquam <br />
                  ut, faucibus non</p>
              </div>
              <button className={s.orangeBtn}>Go Now</button>

            </div>
          </div>

        </div>
            </div>
        </div>
    );
}

export default Highlights;