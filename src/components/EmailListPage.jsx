import React from "react";
import classes from "./EmailListPage.module.scss";
import EmailItem from "./EmailItem";

function EmailListPage({ data }) {
  return (
    <ul className={`${classes.listPage}`}>
      {data?.map((email) => (
        <EmailItem
          key={email?.id}
          date={email?.date}
          from={email?.from?.email}
          subject={email?.subject}
          description={email?.["short_description"]}
          name={email?.from?.name}
          id={email?.id}
        />
      ))}
    </ul>
  );
}

export default EmailListPage;
