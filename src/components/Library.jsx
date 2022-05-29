import React from 'react'
import Music from './Music'
import {getMusics} from '../data/data'
import '../style.css';

// import {v4 as uuidv4} from 'uuid'


const Library = ({libraryRef, currentSong, setCurrentSong}) => {
  
  const data = getMusics();
  function songToggle() {
  }
  
  return(
      <div ref = {libraryRef} className="lib-show overflow-scroll w-fit h-screen px-10">
        <h1 className="text-left text-2xl my-5 font-semibold">Library</h1>
        {
          data.map(el => (
            <Music cover={el.cover} song={el.name} artist={el.artist} id={el.id} />
          ))
        }
      </div>
  )
}

export default Library