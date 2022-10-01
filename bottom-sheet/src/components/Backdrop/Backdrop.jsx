import React from "react";
import "./backdrop.css";
export const Backdrop = ({ backdropHandler }) => {
  return <div className="backdrop" onClick={() => backdropHandler()}></div>;
};