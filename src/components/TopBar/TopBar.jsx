import React from 'react'
import './topBar.css'

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarFlex">
        <div className='topLeft'>
          <img src = "https://insynkstudios.com/_next/static/media/logo.f19a2dcb.svg" alt="Logo" className="topBarImg"></img>
        </div>
        <div className='topRight'>
          <input className="topBarSearch" type="text" placeholder="🔍 Search..."></input>
        </div>
      </div>
    </div>
  )
}
