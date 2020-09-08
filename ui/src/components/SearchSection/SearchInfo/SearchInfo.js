import React from "react";
import { connect } from "react-redux";

import styles from "./SearchInfo.module.css";

const SearchInfo = (props) => {
  const { servers, searchServers, searchQuery } = { ...props };
  const listServers = searchQuery ? searchServers : servers;
  const amountServers = listServers.length;
  return (
    <div className={styles.SearchInfo}>
      <h3>Servers</h3>
      <p>Number of elements: {amountServers}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  servers: state.serversReducer.servers,
  searchServers: state.serversReducer.searchServers,
  searchQuery: state.serversReducer.searchQuery,
});

export default connect(mapStateToProps)(SearchInfo);
