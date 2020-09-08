import React, { Component } from "react";
import styles from "./css/OneServer.module.css";
import NameOneServer from "./NameOneServer/NameOneServer";
import StatusOneServer from "./StatusOneServer/StatusOneServer";
import Dropdown from "../../UI/Dropdown/Dropdown";
class OneServer extends Component {
  state = {};
  render() {
    const { id, name, status } = this.props;
    return (
      <div className={styles.OneServer}>
        <NameOneServer name={name} />
        <StatusOneServer status={status} />
        <Dropdown id={id} status={status} />
      </div>
    );
  }
}

export default OneServer;
