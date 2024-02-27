import React from "react";
import Hero from "../pages/hero.png";
import "../css/Body.css";
import Button from "../pages/Button";
import Buttons from "../pages/Buttons";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="left">
        <div className="up-left">
          <div className="text">
            <p className="page">Welcome!</p>
            <h1 className="text-head">
              Get Your Attendee <br />
              <span className="text-head-span">Instant Ticket</span> <br />
              For Your Next Event
            </h1>
          </div>
          <div className="down-left">
            <Button
              onClick={() => navigate("/create-ticket/registration")}
              title="Create An Event"
              Icon={EventAvailableIcon}
            />
            <Buttons title="Get Ticket" Icon={BookOnlineIcon} />

            {/* <Button  title="Get Ticket"/> */}
          </div>
        </div>
      </div>
      <div className="right">
        <img src={Hero} alt="" />
      </div>
    </div>
  );
}

export default Body;
