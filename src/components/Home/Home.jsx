import React from 'react'
import './home.css'
import Card from "../Card/Card"

export default function Home(props) {
  return (
    <div className="home">
      <div className="homeHeadingContainer">
        <div className='homeHeading'>{props.searchTitle ? `${props.searchTitle}` : "Most Recent Movies"}</div>   
      </div>
      <div className='cards'>
        {props.movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}
