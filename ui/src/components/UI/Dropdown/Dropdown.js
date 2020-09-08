import React from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";
import styles from "./css/Dropdown.module.css";
import Button from "../Button/Button";

const Dropdown = (props) => {
  const { id, status } = props;
  const onChangeStatus = (id, newStatus) =>
    props.onClickDropdown(id, newStatus, props.data);

  const dropdownContent =
    (status === "ONLINE" && (
      <div className={styles.Dropdown__List}>
        <Button
          btnType="Dropdown__Item"
          clicked={() => onChangeStatus(id, "off")}
        >
          Turn off
        </Button>
        <Button
          btnType="Dropdown__Item"
          clicked={() => onChangeStatus(id, "reboot")}
        >
          Reboot
        </Button>
      </div>
    )) ||
    (status === "OFFLINE" && (
      <div className={styles.Dropdown__List}>
        <Button
          btnType="Dropdown__Item"
          clicked={() => onChangeStatus(id, "on")}
        >
          Turn on
        </Button>
      </div>
    )) ||
    (status === "REBOOTING" && null);
  return (
    <div className={styles.Dropdown}>
      <Button btnType="Dropdown__Btn">...</Button>
      {dropdownContent}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.serversReducer,
});

const mapDispatchToProps = (dispatch) => ({
  onClickDropdown: (id, newStatus, data) =>
    dispatch(actions.clickDropdown(id, newStatus, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
