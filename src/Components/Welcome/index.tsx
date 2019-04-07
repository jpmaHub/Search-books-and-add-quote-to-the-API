import React from "react";
import styles from "./index.module.scss";

export default function Welcome() {
  return (
    <h1
      data-test="appHeader"
      className={styles.appHeader}>My App</h1>
  );
}