import React, { Component } from "react";
import { connect } from "react-redux";

import OneServer from "./OneServer/OneServer";
import ListServersHeader from "./ListServersHeader/ListServersHeader";
import styles from "./css/ListServers.module.css";

class ListServers extends Component {
  state = {};
  render() {
    const { servers, searchServers, searchQuery } = { ...this.props.data };
    const listServers = searchQuery ? searchServers : servers;
    const allServers = listServers.map((server) => (
      <OneServer
        key={server.id}
        id={server.id}
        name={server.name}
        status={server.status}
      />
    ));
    return (
      <section className={styles.ListServers}>
        <ListServersHeader />
        {allServers}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.serversReducer,
});

export default connect(mapStateToProps)(ListServers);
