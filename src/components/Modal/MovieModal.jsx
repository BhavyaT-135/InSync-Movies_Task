import React from 'react'
import './moviemodal.css'
import unkown from '../../images/unknown.jpg'

const MovieModal = (props) => {
  return (
        <div className="modal" style={{display: props.showModal ? 'block' : 'none'}}>
            <div className="modalContent">
              <div className="modalHeader">
                  <div className="modalTitle">{props.movie.title}</div>
                  <i className="closeModal fas fa-times" onClick={props.toggleModal}></i>
              </div>
              <div className="modalDivider"></div>
              <div className="modalBody">
                  <img className="modalImage" src={props.poster_path ? `https://image.tmdb.org/t/p/w500/${props.poster_path}` : unkown} alt="Movie Thumbnail"></img>
                  <div className="modalDescription">
                      <div className="modalDescriptionTitle">Release Date : </div>
                      <div className="modalDescriptionText">{props.movie.release_date}</div>
                      <div className="modalDescriptionTitle">Overview : </div>
                      <div className="modalDescriptionText">{props.movie.overview}</div>
                      <div className="modalDescriptionTitle">Rating : </div>
                      <div className="modalDescriptionText">{Math.round(props.movie.vote_average*10)/10} / 10 ({props.movie.vote_count} total votes)</div>
                  </div>
              </div>
            </div>
        </div>          
  )
}

export default MovieModal
