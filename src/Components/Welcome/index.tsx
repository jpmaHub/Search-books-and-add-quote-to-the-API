import React, { Component } from "react";
import styles from "./index.module.scss";

export default function Welcome() {
  return (
    <h1
      data-test="appHeader"
      className={styles.appHeader}>Book Search</h1>
  );
}