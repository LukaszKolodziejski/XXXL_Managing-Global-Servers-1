import React from "react";
import Online from "./Status/Online/Online";
import Offline from "./Status/Offline/Offline";
import Rebooting from "./Status/Rebooting/Rebooting";

const StatusOneServer = (props) => {
  const { status } = props;
  const oneStatus =
    (status === "ONLINE" && <Online status={status} />) ||
    (status === "OFFLINE" && <Offline status={status} />) ||
    (status === "REBOOTING" && <Rebooting status={status} />);

  return oneStatus;
};

export default StatusOneServer;
