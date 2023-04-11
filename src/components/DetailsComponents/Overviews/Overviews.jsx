import React from 'react';
import s from './Overview.module.scss'
import star from '../../../assets/images/star(1).svg'

function Overviews(props) {
    return (
        <div className='container'>
            <div className={s.wrapper}>
                <div>
                    <img src='' alt="" />
                    <div className={s.title}>
                        <div>
                            <h1>Kevin Francis</h1>
                            <div>
                                <img src={star} alt="" />
                                <h1>4.8</h1>
                                <p> (234 reviews)</p>
                            </div>
                        </div>
                        <p>Described by Queenstown House & <br />
                         Garden magazine as having 'one of <br />
                          the best views we've ever seen' you <br />
                           will love relaxing in this newly built</p>
                    </div>
                    <div className={s.social}>
                        
                    </div>
                    <div></div>
                </div>
                <div className={s.overviews}></div>
            </div>
        </div>
    );
}

export default Overviews;