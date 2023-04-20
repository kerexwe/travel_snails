import React, { useState } from "react";
import scss from "./CommentTaskCard.module.scss";
import ellips from "../../../assets/CommentTask/ellipse.svg";
import { HelpfulConst } from "../../../constants/Helpful";
import HelpfullCard from "../HelpfullCard/HelpfullCard";

function CommentTaskCard({
  userAvatar,
  userName,
  userDate,
  userStar,
  comments,
}) {

  
  const [active, setActive] =useState(false)

  return (
    <div className={scss.commentCard}>
      <div className={scss.commCardHeader}>
        <div className={scss.headerLeft}>
          <img src={userAvatar} alt="" />
        </div>
        <div className={scss.headerRight}>
          <div className={scss.contentTop}>
            <div className={scss.nameDate}>
              <h4>{userName}</h4>
              <p>{userDate}</p>
            </div>
            <div className={scss.stars}>
              <img src={userStar} alt="" />
            </div>
          </div>
          <div className={scss.contentBottom}>
            <p>{comments}</p>
            <div className={scss.commentBtn}>
              <div className={scss.buttonss}>
                <p onClick={()=> setActive(!active)}>Helpful</p>
                <img src={ellips} alt="" />
                <p>Reply</p>
              </div>
              { active && HelpfulConst.map((item) => (
                <HelpfullCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentTaskCard;
