import React from "react";
import classes from "./EmailDetailPage.module.scss";
import { useParams } from "react-router-dom";

function EmailDetailPage() {
  const { id } = useParams();

  return <div className={`${classes.detailPage}`}>{id}</div>;
}

export default EmailDetailPage;
