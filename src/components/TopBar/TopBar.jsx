import React, {useState} from 'react'
import './topBar.css'
import axios from 'axios'

export default function TopBar(props) {
  const refreshPage = () => {
    window.location.reload(false);
  }
  const [search, setSearch] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (search !== '') {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bbd763e21a6efec872263578b7ca2ed4&language=en-US&query=${search}&page=1&include_adult=false`)
        .then((response) => {
          if (response.data.results.length !== 0) {
            console.log(response.data.results)
            props.setMovies(response.data.results)
            props.setSearchTitle(search)
            setSearch('')
          }
          else {
            console.log('No results found')
            alert("No results found")
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      alert('Please enter a movie title')
    }
  }
  return (
    <div className="topBar">
      <div className="topBarFlex">
        <div className='topLeft'>
          <img src = "https://insynkstudios.com/_next/static/media/logo.f19a2dcb.svg" alt="Logo" className="topBarImg" onClick={refreshPage}></img>
        </div>
        <div className='topRight'>
          <form className='topBarSearchForm' onSubmit={handleSubmit}>
            <input type="text" className="topBarSearch" placeholder="🔍 Search..." value={search} onChange={(e) => {
              e.preventDefault()
              setSearch(e.target.value)
            }}
            onSubmit={handleSubmit}
            ></input>
          </form>
        </div>
      </div>
    </div>
  )
}
