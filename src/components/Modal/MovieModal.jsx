import React from 'react'
import './moviemodal.css'
import movie from '../../images/movie.jpg'

const MovieModal = (props) => {
  return (
        <div className="modal" style={{display: props.showModal ? 'block' : 'none'}}>
            <div className="modalContent">
              <div className="modalHeader">
                  <div className="modalTitle"> The Unholy</div>
                  <i className="closeModal fas fa-times" onClick={props.toggleModal}></i>
              </div>
              <div className="modalDivider"></div>
              <div className="modalBody">
                  <img className="modalImage" src={movie} alt="Movie Thumbnail"></img>
                  <div className="modalDescription">
                      <div className="modalDescriptionTitle">Release Date : </div>
                      <div className="modalDescriptionText">2 April 2021</div>
                      <div className="modalDescriptionTitle">Director : </div>
                      <div className="modalDescriptionText">Evan Spiliotopoulos</div>
                      <div className="modalDescriptionTitle">IMDB Rating : </div>
                      <div className="modalDescriptionText">5.1</div>
                      <div className="modalDescriptionTitle">Introduction : </div>
                      <div className="modalDescriptionText">Alice, a girl with hearing impairment, is able to hear, speak and even heal the ill after having visions of the Virgin Mary. But when a journalist probes into the matter, he unearths a conspiracy.</div>
                  </div>
              </div>
            </div>
        </div>          
  )
}

export default MovieModal
