import React from "react";
import "../css/Button.css";

function Buttons({ title, Icon }) {
  return (
    <div className="button">
      <a className="btns" href="#">
        {title} <Icon className="icons" />
      </a>
    </div>
  );
}

export default Buttons;
