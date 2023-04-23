import css from './TeamCard.module.scss'
import React from 'react';
import facebook from '../../../assets/images/facebookO.svg'
import inn from '../../../assets/images/innO.svg'
import inst from '../../../assets/images/instO.svg'
import twitter from '../../../assets/images/twitterO.svg'


function TeamCard({ img }) {
    return (
        <div className={css.card}>
            <div className={css.shadow}>
            <img src={img} alt="" />
            </div>
            <div className={css.social}>
                <img src={facebook} alt="" />
                <img src={inst} alt="" />
                <img src={inn} alt="" />
                <img src={twitter} alt="" />
            </div>
            <div className={css.name}>
                <h1>Eleanor Pena</h1>
                <p>Marketing</p>
            </div>
        </div>
    );
}

export default TeamCard;