import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import ListServers from "../../components/ListServers/ListServers";
import SearchSection from "../../components/SearchSection/SearchSection";
import styles from "./css/Servers.module.css";

class Servers extends Component {
  state = {};

  componentDidMount = () => this.props.onFetchServers();

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.data.reboot !== this.props.data.reboot) {
      this.props.onFetchServersRebooting(this.props.data);
    }
  };

  render() {
    return (
      <main className={styles.Servers}>
        <SearchSection />
        <ListServers />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.serversReducer,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchServers: () => dispatch(actions.fetchServers()),
  onFetchServersRebooting: (data) =>
    dispatch(actions.fetchServersRebooting(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Servers);
