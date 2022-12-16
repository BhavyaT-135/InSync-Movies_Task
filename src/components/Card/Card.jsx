import React from 'react'
import './card.css'
import house from '../../images/movie.jpg'

export default function Card() {
  return (
    <div className='card' onClick={() => {}}>
        <img
        className='cardImg'
        src={house}
        alt=''
        />
        <div className='cardInfo'>
            <div className='cardTitle'>
                The Unholy
            </div>
        </div>
    </div>
  )
}
