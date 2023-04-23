import React from 'react';
import s from './Input.module.scss'
import data from '../../assets/images/data.svg'
import location1 from '../../assets/images/location1.svg'
import guests from '../../assets/images/guests.svg'
import search from '../../assets/images/Search11.svg'

function Input(props) {
    return (
        <div>
                      <div className={s.bottom}>
                <div>
                    <input type="text" placeholder='Where we go?' />
                    <img src={location1} alt="" />
                </div>
                <div>
                    <input type="text" placeholder='Departure day' />
                    <img src={data} alt="" />
                </div>
                <div>
                    <input type="text" placeholder='Guests' />
                    <img src={guests} alt="" />
                </div>
                <button>
                    <img src={search} alt="" />
                </button>
            </div>

        </div>
    );
}

export default Input;