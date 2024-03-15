/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../css/Button.css";

function Button({ title, Icon }) {
  return (
    <div className="button">
      <a className="btns" href="create-ticket/registration">
        {title} <Icon className="icons" />
      </a>
    </div>
  );
}

export default Button;
