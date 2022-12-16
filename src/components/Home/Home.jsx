import React from 'react'
import './home.css'
import Card from "../Card/Card"

export default function Home() {
  return (
    <div className="home">
      <div className="homeHeadingContainer">
        <div className='homeHeading'>Most Recent Movies</div>   
      </div>
      <div className='cards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
