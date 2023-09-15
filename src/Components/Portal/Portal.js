import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Portal.css";

const Backdrop = (props) => {
  return <div className="backdrop"></div>;
};

const Backdrop1 = (props) => {
  return (
    <div className="backdrop">
      <div>
        <div className="modal">
          <div className="item">
            <label>Sushi</label>
          </div>
          <div className="Amount">
            <label>Total Amount</label>
            <label>35.65</label>
          </div>
          <div className="buttons">
            <button>close</button>
            <button>order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const portalElem = document.getElementById("portal");

function Portal() {
  return (
    <Fragment>{ReactDOM.createPortal(<Backdrop1 />, portalElem)}</Fragment>
  );
}
export default Portal;
