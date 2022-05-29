import React from 'react'
// import {getMusics} from '../data/data'
import {FaPlay} from 'react-icons/fa'
import {GrFormPrevious} from 'react-icons/gr'
import {GrFormNext} from 'react-icons/gr'
import {HiVolumeUp} from 'react-icons/hi'
import {GiPauseButton} from 'react-icons/gi'
import '../index.css'

const Player = ({data, currentSong}) => {
    // const data = getMusics();

  const imgRef = React.useRef(null);

  const [songState, setSongState] = React.useState(false); // false means song is not playing currently

  function songToggle(params) {
    setSongState(prevState => !prevState);
    let imgR = imgRef.current.classList;
    imgR.contains('animate-spin-slow') ? imgR.remove('animate-spin-slow') : imgR.add('animate-spin-slow')
  }
  function prev() {

  }


  return (
    <div className="w-full text-center mt-24">
        <img src={currentSong.cover} alt="cover" ref={imgRef}
             className="w-1/2 rounded-full m-auto"/>
        <h1 className="text-xl font-semibold my-4"> {currentSong.name} </h1>
        <h3 className="text-sm">{currentSong.artist}</h3>

        <audio src={currentSong.audio}></audio>

        <div className="controls
                    flex flex-row items-center w-3/4 mx-auto my-2.5 border justify-around">
            <GrFormPrevious size="30" />
            <div onClick={songToggle}>{songState ? <GiPauseButton size="30"/> : <FaPlay size="30"/>}</div>

            <GrFormNext size="30" />
            <HiVolumeUp />
          </div>

        {/* <audio controls preload="auto">
          <source src={currentSong.audio} />
        </audio> */}
    </div>
  )
}

export default Player