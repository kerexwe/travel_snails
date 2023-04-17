import React from 'react'
import css from '../../components/OurClients/OurClients.module.scss'
import our1 from '../../assets/images/our1.svg'
import our2 from '../../assets/images/our2.svg'
import our3 from '../../assets/images/our3.svg'
import our2_1 from '../../assets/images/our2-1.svg'
import our2_2 from '../../assets/images/our2-2.svg'
import our2_3 from '../../assets/images/our2-3.svg'
import our3_1 from '../../assets/images/our3-1.svg'
import our3_2 from '../../assets/images/our3-2.svg'
import our3_3 from '../../assets/images/our3-3.svg'
import our4_1 from '../../assets/images/our4-1.svg'
import our4_2 from '../../assets/images/our4-2.svg'
import our4_3 from '../../assets/images/our4-3.svg'



function OurClients() {
    return (
        <div className='container'>
            <div className={css.wrapper}>
                <div className={css.text}>
                    <div className={css.text_1}>
                        <h1>
                            Our Clients
                        </h1>
                    </div>
                    <div className={css.text_2}>
                        <h1>Enhance Your Life By Having A Sense Of Purpose</h1>
                        <p>Around the world, food-borne illnesses have become increasingly <br /> common. In the United States alone, millions of people get a food- <br /> related illness each year.</p>
                    </div>
                </div>
                <div className={css.logo}>
                    <div className={css.lef_logo}>
                        <div className={css.img_logo}>
                            <img src={our1} alt="" />
                            <img src={our2} alt="" />
                            <img src={our3} alt="" />
                        </div>
                        <div className={css.img_logo}>
                            <img src={our2_1} alt="" />
                            <img src={our2_2} alt="" />
                            <img src={our2_3} alt="" />
                        </div>
                    </div>
                    <div className={css.rig_logo}>
                        <div className={css.img_logo}>
                            <img src={our3_1} alt="" />
                            <img src={our3_2} alt="" />
                            <img src={our3_3} alt="" />
                        </div>
                        <div className={css.img_logo}>
                            <img src={our4_1} alt="" />
                            <img src={our4_2} alt="" />
                            <img src={our4_3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients