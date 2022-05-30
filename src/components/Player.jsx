import React, {useRef, useEffect} from 'react'
// import {getMusics} from '../data/data'
import {FaPlay} from 'react-icons/fa'
import {GrFormPrevious} from 'react-icons/gr'
import {GrFormNext} from 'react-icons/gr'
import {HiVolumeUp} from 'react-icons/hi'
import {GiPauseButton} from 'react-icons/gi'
import '../index.css'

const Player = ({data, currentIndex, setCurrentIndex, currentSong, setCurrentSong}) => {
    // const data = getMusics();

  const imgRef = useRef(null);
  const volumeRef = useRef(null);
  const audioRef = useRef(null);

  const [volume, setVolume] = React.useState(50)
  const [songState, setSongState] = React.useState(false); // false means song is not playing currently
  const [currentTime, setCurrentTime] = React.useState(0);

  
  // Move to helper.js
  function convertToMinutes(num) {
      return`${parseInt(num/60)}:${parseInt(num%60)}`;
  }
  
  // useEffect(() =>{
  //   const time = setTimeout(setCurrentTime(currentTime+=1), 1000);
  //   return () => {clearTimeout(time)}
  // }, [currentTime]);

  function songToggle() {
    setSongState(prevState => !prevState);
    let imgR = imgRef.current.classList;
    if (imgR.contains('animate-spin-slow')){
      imgR.remove('animate-spin-slow');
      audioRef.current.pause();
    }else {
      imgR.add('animate-spin-slow');
      audioRef.current.play();
    }
    console.log(audioRef.current.currentTime);
    
    
    // setCurrentTime(prev=>prev+=10);
    // console.log(currentTime);
    
  }
  
  function prev() {
      currentIndex>0 && setCurrentIndex((prev)=>prev -= 1);
      setCurrentSong(data[currentIndex]);
  }
  
  function next() {
    currentIndex<data.length-1 && setCurrentIndex((prev)=>prev += 1);
    setCurrentSong(data[currentIndex]);
  }
  
  function volumeToggle() {
    let volRef = volumeRef.current.classList;
    volRef.contains('hidden') ? volRef.remove('hidden') : volRef.add('hidden');
  }

  function test(e) {
    setVolume(e.target.value)
    // console.log(volume);
  }

  return (
    <div className="w-full text-center mt-24">
        <img src={currentSong.cover} alt="cover" ref={imgRef}
             className="w-5/12 rounded-full m-auto"/>
        <h1 className="text-xl font-semibold my-4"> {currentSong.name} </h1>
        <h3 className="text-sm">{currentSong.artist}</h3>

        <audio ref={audioRef} src={currentSong.audio}></audio>

        <div className="flex items-center gap-x-2">
          <p>0:00</p>
          <div className={`flex w-full h-full rounded-xl`}>
            <input  type="range" min='0' max='200'  
                    className="h-full w-full"
                   />
          </div>
          <p>{audioRef?.current?.duration ? convertToMinutes(audioRef?.current?.duration) : '0:00'}</p>
        </div>

        <div className="controls
                    flex flex-row items-center w-3/4 mx-auto my-10 justify-around">
            <GrFormPrevious size="30" onClick={prev} />
            <div onClick={songToggle}>{songState ? <GiPauseButton size="30"/> : <FaPlay size="30"/>}</div>

            <GrFormNext size="30" onClick={next} />
            <div className="flex gap-x-5">
                <HiVolumeUp onClick={volumeToggle}/>
                <input  type="range" value={volume} onChange={test} ref={volumeRef}  
                       />
            </div>
          </div>

        {/* <audio controls preload="auto">
          <source src={currentSong.audio} />
        </audio> */}
    </div>
  )
}

export default Player