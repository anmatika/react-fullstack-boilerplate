import React from "react";
import "./style.scss";

export default ({text, onClick}) =>
    <button className="custom-button" onClick={onClick}>{text}</button>;