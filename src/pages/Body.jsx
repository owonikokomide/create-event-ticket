import React from "react";
import Hero from "../pages/hero.png";
import IMAGE from "../assets/images.jpg";
import "../css/Body.css";
import Button from "../pages/Button";
import Buttons from "../pages/Buttons";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Choose from '../component/Choose';

function Body() {
  const navigate = useNavigate();
  const [typewriter] = useTypewriter({
    words: [" Attendee Instant Ticket "],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="container">
      <div className="rap">
        <div className="left">
          <div className="up-left">
            <div className="text">
              <p className="page">Welcome!</p>
              <h1 className="text-head">
                Get Your <br />
                <span className="type">{typewriter}</span>
                <br />
                <span>For Your Next Event</span>
                <Cursor />
              </h1>
              <p className="text-head-p">
                It's easy and friendly, all you need do is register, <br /> seat
                back and we do the headache for you
              </p>
            </div>
            <div className="down-left">
              <Button
                onClick={() => navigate("/create-ticket/registration")}
                title="Create An Event"
                Icon={EventAvailableIcon}
              />
              <Buttons title="Get Ticket" Icon={BookOnlineIcon} />
            </div>
          </div>
        </div>
        <div className="right">
          <img className="pics" src={Hero} alt="" />
        </div>
      </div>
      <div className="next">
        <div className="easy">
          <div className="left-easy">
            <img className="left-pics" src={IMAGE} alt="" />
          </div>
          <div className="right-easy">
            <p className="easy-friendly">
              We do it fast and secure <br />
              with the most reliable process, <br />
              don't worry your fees are straight <br />
              into your account after every <br />
              successful payment for ticket.
            </p>
          </div>
        </div>
      </div>
      <div className="why">
        <div className="choose">
          <h1>Why Choose Us</h1>
        </div>
        <div className="why-text">
          <div className="first-choose">
            <div className="choose-us">
              <Choose
                title="Fast And Convenient Ticket  Applications For Attendees"
                text="You might be thinking how to get 
              thousands of attendees registered and purchasing your tickets, 
              it's simple, you control what they
               choose and how they get it done."
              />
            </div>
            <div className="choose-us">
              <Choose
                title="Instant Payment"
                text="Your attendees get to pay directly
               into your bank account after a very smooth and quick 
              registration within few seconds."
              />
            </div>
          </div>
          <div className="second-choose">
            <div className="second-choose-us">
              <Choose
                title="Customized Ticket"
                text="You can design your tickets
               to meet your desired wants, 
               you add location, time and all 
              that is included for your event."
              />
            </div>
          </div>
          <div className="first-choose">
            <div className="choose-us">
              <Choose
                title="Verifiable Tickets"
                text="We send downloadable tickets 
              directly into attendees email so,
               don't worry about fake tickets,
                you can scan directly with your device to 
              identify your tickets from fake."
              />
            </div>
            <div className="choose-us">
              <Choose
                title="Hastle Free Virtual Event"
                text="Don't worry about taking your
               your events virtual, we will get your 
               link ready for your 
              attendees into their email."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default Body;
