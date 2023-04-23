import React from 'react';
import { TeamConst } from '../../constants/TeamConst';
import css from './OurTeam.module.scss'
import TeamCard from './TeamCard/TeamCard'

 
function OurTeam(props) {
    return (

        <div className='container'>
            <div className={css.wrapper}>
                <div className={css.title}>
                    <h1 className={css.h1}>Great Team Is The Key</h1>
                    <p className={css.p}>Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases</p>
                </div>
                <div className={css.cardWrapper}>
                    {
                        TeamConst.map((item) => <TeamCard key={item.id} {...item} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default OurTeam;