import React from 'react';
import Music from './Music';
import '../style.css';

// import {v4 as uuidv4} from 'uuid'


const Library = ({libraryRef, setCurrentIndex, currentSong, setCurrentSong, data}) => {
  
  
  return(
      <div ref = {libraryRef} className="lib-show overflow-y-scroll w-fit h-screen px-10">
        <h1 className="text-left text-2xl my-5 font-semibold">Library</h1>
        {
          data.map((el, index) => (
            <Music
                  key={el.id}  
                  song={el} 
                  index={index} 
                  setCurrentIndex={setCurrentIndex} 
                  currentSong={currentSong} 
                  setCurrentSong={setCurrentSong} />
          ))
        }
      </div>
  )
}

export default Library