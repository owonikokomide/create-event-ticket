import React from 'react'
import Hero from '../pages/hero.png'
import '../css/Body.css'
import BookOnlineIcon from "@mui/icons-material/BookOnline";

function Body() {
  return (
    <div className='container'>
        <div className="left">
          <p className='page'>Welcome!</p>
          <div className="text">
            <h1 className='text-head'>
              Get Your Attendee <br />
              <span className='text-head-span'>Instant Ticket</span> <br />
              For Your Next Event
              <BookOnlineIcon />
            </h1>
          </div>
        </div>
        <div className="right">
          <img src={Hero} alt="" />
        </div>
    </div>
  )
}

export default Body