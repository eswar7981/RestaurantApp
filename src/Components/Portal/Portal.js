import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Portal.css";

import Backdrop1 from "./Backdrop1";

const portalElem = document.getElementById("portal");

function Portal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop1 onClick1={props.onClose} />,
        portalElem
      )}
    </Fragment>
  );
}
export default Portal;

