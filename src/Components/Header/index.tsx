import React, { Component } from "react";
import styles from "./index.module.scss";
import SearchType from '../SearchType';
import Welcome from '../Welcome';

interface IProps {
  type: string;
}

export default class Header extends Component<IProps> {
  render() {
    return (
      <header className={styles.appHeader}>
        <Welcome />
        <SearchType type={this.message(this.props.type)} />
      </header>
    );
  }

  private message(type: string) {
    if (type == undefined) {
      return "Title";
    }
    else {
      return this.props.type;
    }
  }
}