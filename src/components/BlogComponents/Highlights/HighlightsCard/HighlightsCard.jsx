import React from 'react';
import s from './HighlightsCard.module.scss'
function HighlightsCard({ img, title, min, date, userImg, user }) {
    return (
        <div className={s.cardWrap}>
            <img src={img} alt="" />
            <div className={s.title}>
                <div>
                    <p>{date}</p>
                    <div className={s.dot}></div>
                    <p>{min}</p>
                </div>
                <h1>{title}</h1>
            </div>
            <div className={s.user}>
                <img src={userImg} alt="" />
                <p>{user}</p>
            </div>
        </div>
    );
}

export default HighlightsCard;