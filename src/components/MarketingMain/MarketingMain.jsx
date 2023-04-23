import React from 'react'
import css from './MarketingMain.module.scss'
import img1 from '../../assets/images/About_img1.svg'
import cav from '../../assets/images/kavych.svg'
import img2 from '../../assets/images/mark.svg'
import icon_facebook from '../../assets/images/Button_facebook.svg'
import icon_insta from '../../assets/images/Button_insta.svg'
import icon_in from '../../assets/images/Button_in.svg'
import icon_twiter from '../../assets/images/Button_twiter.svg'
import avatar from '../../assets/images/avatar_detalis.svg'
import facebok from '../../assets/images/icon_facebook.svg'
import insta from '../../assets/images/icon_instagram.svg'
import ico_in from '../../assets/images/icon-in.svg'
import twiter from '../../assets/images/icon_twiter.svg'
import lupa from '../../assets/images/icon_lupa.svg'
import city from '../../assets/images/city_market.svg'
import city2 from '../../assets/images/city_market2.svg'
import city3 from '../../assets/images/city_market3.svg'
import city4 from '../../assets/ToursCity/city1.svg'
import city5 from '../../assets/images/city3.png'

function MarketingMain() {
  return (
    <div className='container'>
      <div className={css.wrapper}>
        <div>
          <div className={css.box_text}>
            <div>
              <h1>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</h1>
              <div className={css.flex_text}>
                <h1>P</h1>
                <p>ellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh. <br /> Donec posuere vulputate arcu. Quisque rutrum.  </p>
              </div>
              <div className={css.p}>
                <p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
                <p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>
              </div>
            </div>
          </div>
          <div className={css.image}>
            <img src={img1} alt="" />
          </div>
          <div className={css.text_centr}>
            <h1>Curabitur suscipit suscipit tellus</h1>
            <p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
            <div>
              <h1>Nullam accumsan lorem in</h1>
              <p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
            </div>
            <div className={css.flex_cav}>
              <img src={cav} alt="" />
              <h1>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.</h1>
            </div>
          </div>
          <div className={css.image2}>
            <img src={img2} alt="" />
            <div>
              <p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
              <p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>
              <p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
            </div>
          </div>
          <div className={css.nav}>
            <div className={css.tags}>
              <h1>Tags:</h1>
              <div className={css.tags_nav}>
                <div className={css.market}>
                  <p>Marketing</p>
                </div>
                <div>
                  <p>Development</p>
                </div>
                <div className={css.hr}>
                  <p>HR & Recruting</p>
                </div>
                <div className={css.desi}>
                  <p>Design</p>
                </div>
                <div>
                  <p>Management</p>
                </div>
              </div>
            </div>
            <div className={css.share}>
              <h1>Share:</h1>
              <div className={css.share_img}>
                <div>
                  <img src={icon_facebook} alt="" />
                </div>
                <div>
                  <img src={icon_insta} alt="" />
                </div>
                <div>
                  <img src={icon_in} alt="" />
                </div>
                <div>
                  <img src={icon_twiter} alt="" />
                </div>
              </div>
            </div>
          </div>
          <hr className={css.aher1} noshade />
          <div className={css.feedcoment}>
            <div>
              <img src={avatar} alt="" />
            </div>
            <div>
              <div className={css.right}>
                <div className={css.feed_top}>
                  <div className={css.feed_lef}>
                    <h1>Courtney Henry</h1>
                    <p>Curator of Marketing Course</p>
                  </div>
                  <div className={css.feed_rig}>
                    <img src={facebok} alt="" />
                    <img src={insta} alt="" />
                    <img src={ico_in} alt="" />
                    <img src={twiter} alt="" />
                  </div>
                </div>
                <p>Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..</p>
                <p className={css.p}>Member since Mar 15, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.box_nav}>
          <div className={css.none}>
            <div className={css.nav_flex}>
              <div>
                <img src={avatar} alt="" />
              </div>
              <div>
                <h1>Courtney Henry</h1>
                <p>Curator of Marketing Course</p>
              </div>
            </div>
            <div className={css.icon}>
              <img src={facebok} alt="" />
              <img src={insta} alt="" />
              <img src={ico_in} alt="" />
              <img src={twiter} alt="" />
            </div>
          </div>

          <div className={css.input}>
            <div>
              <img src={lupa} alt="" />
              <input type="text" placeholder='Search...' />
            </div>
          </div>

          <div className={css.categori}>
            <h1>Categories</h1>
            <ul>
              <li><span>Marketing</span></li>
              <li><span>Community</span></li>
              <li><span>Tutorials</span></li>
              <li><span>Business</span></li>
              <li><span>Management</span></li>
            </ul>
          </div>

          <div className={css.recent}>
            <div className={css.recent_text}>
              <h1>Recent Posts</h1>
            </div>
            <div className={css.city_flex}>
              <div>
                <img src={city} alt="" />
              </div>
              <div>
                <h1>Understanding color theory: the color wheel and finding...</h1>
                <p>November 7, 2017</p>
              </div>
            </div>
            <div className={css.city_flex}>
              <div>
                <img src={city2} alt="" />
              </div>
              <div>
                <h1>How to design a product that can grow itself 10x in year</h1>
                <p>October 24, 2018</p>
              </div>
            </div>
            <div className={css.city_flex}>
              <div>
                <img src={city3} alt="" />
              </div>
              <div>
                <h1>Any mechanical keyboard enthusiasts in design?</h1>
                <p>November 28, 2015</p>
              </div>
            </div>
            <div className={css.city_flex}>
              <div>
                <img src={city4} alt="" />
              </div>
              <div>
                <h1>Yo Reddit! What’s a small thing that anyone can do at nearly...</h1>
                <p>May 29, 2017</p>
              </div>
            </div>
          </div>

          <div className={css.popular}>
            <h1>Popular Tags</h1>
            <div className={css.popular_flex}>
              <div className={css.mark}>
                <p>Marketing</p>
              </div>
              <div>
                <p>Development</p>
              </div>
              <div className={css.bank}>
                <p>Banking</p>
              </div>
              <div className={css.hrr}>
                <p>HR & Recruting</p>
              </div>
              <div className={css.desig}>
                <p>Design</p>
              </div>
              <div>
                <p>Management</p>
              </div>
              <div className={css.bis}>
                <p>Business</p>
              </div>
              <div>
                <p>Community</p>
              </div>
              <div className={css.tutor}>
                <p>Tutorials</p>
              </div>
            </div>
          </div>

          <div className={css.image3}>
            <div>
            <h1>Advertisement</h1>
            <p>Duis leo. Donec orci lectus, aliquam <br /> ut, faucibus non</p>
            <button className={css.butt}>Go Now</button>
            </div>
            <img src={city5} alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default MarketingMain