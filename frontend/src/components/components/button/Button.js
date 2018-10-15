import React from "react";
import "./button.scss";

const Button = ({ buttonName, icon, buttonClick, className }) => {
    return (
        <button className={`dt-button ${className}`} onClick={buttonClick}>
            <span>{buttonName}</span>
            {icon ? <img src={icon} className="dt-button-icon" alt="" /> : ""}
        </button>
    );
};

export default Button;
