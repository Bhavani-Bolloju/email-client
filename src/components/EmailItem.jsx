import React from "react";
import classes from "./EmailItem.module.scss";
import { NavLink } from "react-router-dom";

function EmailItem({ from, subject, description, date, id, name }) {
  return (
    <NavLink to={`/${id}`} className={classes.email}>
      <div className={classes["email__userProfile"]}>{name[0]}</div>
      <div className={classes["email__content"]}>
        <div className={classes["email__from"]}>
          <span className={classes["email__subTitle"]}>From: </span>
          <span>{from}</span>
        </div>
        <div className={classes["email__subject"]}>
          <span className={classes["email__subTitle"]}>Subject: </span>
          <span>{subject}</span>
        </div>
        <div className={classes["email__description"]}>
          <span>{description}</span>
        </div>
        <div className={classes["email__date"]}>
          <span>{date}</span>
        </div>
        {/* <div>isfavourite</div> */}
      </div>
    </NavLink>
  );
}

export default EmailItem;
