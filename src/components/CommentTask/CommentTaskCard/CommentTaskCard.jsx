import React, { useState } from "react";
import scss from "./CommentTaskCard.module.scss";
import ellips from "../../../assets/CommentTask/ellipse.svg";
import { HelpfulConst } from "../../../constants/Helpful";
import HelpfullCard from "../HelpfullCard/HelpfullCard";
import { useTranslation } from "react-i18next";

function CommentTaskCard({
  userAvatar,
  userName,
  userDate,
  userStar,
  comments,
}) {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  return (
    <div className={scss.commentCard}>
      <div className={scss.commCardHeader}>
        <div className={scss.headerLeft}>
          <img src={userAvatar} alt="" />
        </div>
        <div className={scss.headerRight}>
          <div className={scss.contentTop}>
            <div className={scss.nameDate}>
              <h4>{t(userName)}</h4>
              <p>{t(userDate)}</p>
            </div>
            <div className={scss.stars}>
              <img src={userStar} alt="" />
            </div>
          </div>
          <div className={scss.contentBottom}>
            <p>{comments}</p>
            <div className={scss.commentBtn}>
              <div className={scss.buttonss}>
                <p onClick={() => setActive(!active)}>{t("helpful")}</p>
                <img src={ellips} alt="" />
                <p>{t("reply")}</p>
              </div>
              {active &&
                HelpfulConst.map((item) => (
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
