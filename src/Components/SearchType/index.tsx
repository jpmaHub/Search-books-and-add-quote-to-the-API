import React from "react";
import styles from "./index.module.scss";

interface IProps {
  type: string;
}

export default function Welcome(props: IProps) {
  return(
    <h1 className={styles.appType}
        data-test="appType">{props.type}</h1>
  );
}
