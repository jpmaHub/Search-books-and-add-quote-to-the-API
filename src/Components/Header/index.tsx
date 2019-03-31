import React, { Component } from "react";
import styles from "./index.module.scss";
import SearchType from '../SearchType';
import Welcome from '../Welcome';

interface IProps {
  type?: string | undefined;
}

export default class Header extends Component<IProps> {
  render() {
    return (
      <header className={styles.appHeader}>
        <Welcome />
        <SearchType type={''} />
      </header>
    );
  }

  private message(type: string | undefined) {
    return (type == undefined ? "Title" : this.props.type);
  }
}