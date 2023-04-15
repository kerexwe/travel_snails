import React from 'react';
import s from './Input.module.scss'
import data from '../../assets/images/data.svg'
import location1 from '../../assets/images/location1.svg'
import guests from '../../assets/images/guests.svg'


function Input(props) {
    return (
        <div>
                      <div className={s.bottom}>
                <div>
                    <input type="text" placeholder='search' />
                    <img src={location1} alt="" />
                </div>
                <div>
                    <input type="text" placeholder='search' />
                    <img src={data} alt="" />
                </div>
                <div>
                    <input type="text" placeholder='search' />
                    <img src={guests} alt="" />
                </div>
            </div>
  
        </div>
    );
}

export default Input;