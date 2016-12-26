import React from "react";
import "./style.scss";

export default ({text, onClick, disabled}) =>
    <button className={"custom-button" + (disabled ? " disabled-button" : "")} onClick={onClick} disabled={disabled}>
        {text}
    </button>;