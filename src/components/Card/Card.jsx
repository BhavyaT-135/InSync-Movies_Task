import React, {useState} from 'react'
import './card.css'
import MovieModal from '../Modal/MovieModal.jsx'
import unkown from '../../images/unknown.jpg'

export default function Card(props) {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const poster_path = props.movie.poster_path

  return (
    <div className='card' onClick={toggleModal}>
        <img
        className='cardImg'
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : unkown}
        alt='Movie Poster'
        />
        <div className='cardInfo'>
            <div className='cardTitle'>
                {props.movie.title}
            </div>
        </div>
      <MovieModal poster_path={poster_path} movie={props.movie} showModal={showModal} toggleModal={toggleModal} />
    </div>
  )
}
