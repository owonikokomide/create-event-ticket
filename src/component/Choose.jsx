import React from 'react'
import '../css/Choose.css'

function Choose({ title, text}) {
  return (
    <div>
      <div className="choose-title">
        <p className='title-h3'>{title}</p>
        <p className='text-p'>{text}</p>
      </div>
    </div>
  )
}

export default Choose