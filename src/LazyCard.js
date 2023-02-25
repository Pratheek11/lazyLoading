import React from "react";
import "./Card.css";

function LazyCard() {
  return (
    <div className="lazyCard">
      <div className="lazyDp"></div>
      <div className="lazyTitle"></div>
      <div className="lazyDesc"></div>
      <div className="lazyBack"></div>
    </div>
  );
}

export default LazyCard;
