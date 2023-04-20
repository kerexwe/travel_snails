import React from "react";
import scss from "./HelpfullCard.module.scss";

function HelpfullCard({ userAvatar, userName, userDate, userStar, comments }) {
  return (
    <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpfullCard;
