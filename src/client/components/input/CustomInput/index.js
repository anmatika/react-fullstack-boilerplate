import React from "react";
import "./style.scss";

const CustomInput = ({disabled, onChange}) =>
    <input type="text" className={"custom-input" + (disabled ? " disabled-input" : "")} onChange={onChange}/>;

CustomInput.propTypes = {
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func,
};

export default CustomInput;