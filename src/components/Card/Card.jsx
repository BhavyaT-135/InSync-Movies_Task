import React, {useState} from 'react'
import './card.css'
import movie from '../../images/movie.jpg'
import MovieModal from '../Modal/MovieModal.jsx'

export default function Card(props) {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className='card' onClick={toggleModal}>
        <img
        className='cardImg'
        src={movie}
        alt=''
        />
        <div className='cardInfo'>
            <div className='cardTitle'>
                The Unholy
            </div>
        </div>
        <MovieModal showModal={showModal} toggleModal={toggleModal} />
    </div>
  )
}
