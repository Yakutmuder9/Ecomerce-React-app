import React from "react";
import ReactDOM from "react-dom";
import "./Loader.scss";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">Loading...</div>
    </div>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return <div className="--center-all">Loading...</div>;
};

export default Loader;
