import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/Search.module.css";

class Search extends Component {
  state = { value: "", placeholder: "Search" };
  onChangeSearchHandler = (e) => {
    const { value } = e.target;
    const { servers, onSearch } = this.props;
    this.setState({ value });
    onSearch(value, servers);
  };

  render() {
    const { value, placeholder } = this.state;

    return (
      <div className={styles.Search}>
        <FontAwesomeIcon icon={faSearch} className={styles.Search__Loupe} />
        <input
          type="text"
          name="Search"
          id="Search"
          className={styles.Search__Input}
          placeholder={placeholder}
          value={value}
          onChange={(e) => this.onChangeSearchHandler(e)}
          onFocus={() => this.setState({ placeholder: "" })}
          onBlur={() => this.setState({ placeholder: "Search" })}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  servers: state.serversReducer.servers,
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (value, servers) => dispatch(actions.changeSearch(value, servers)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
