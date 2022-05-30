import React, {useState, useRef} from 'react';
import './App.css';

import Library from './components/Library'
// import Main from './components/Main';
import Player from './components/Player';
import Header from './components/Header';
import {getMusics} from './data/data'




function App() {
  const data = getMusics();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(data[currentIndex]);


  const libraryRef = useRef(null);
  const mainRef = useRef(null);
  // console.log(libraryRef.current);

  function libraryToggle() {
    if (libraryRef.current.classList.contains('lib-show')) {
      libraryRef.current.classList.remove('lib-show');
      mainRef.current.classList.remove('m-auto');

    }else{
      libraryRef.current.classList.add('lib-show');
      mainRef.current.classList.add('m-auto');
    }
  }


  return (
    <div className="flex justify-between pr-24 relative">
      <Library  libraryRef = {libraryRef} 
                currentSong={currentSong}
                setCurrentSong={setCurrentSong} 
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                data={data}
      />
      <div ref={mainRef} className="w-1/2 m-auto">
        <Header libraryToggle={libraryToggle} />
        <Player currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                currentSong={currentSong} 
                setCurrentSong={setCurrentSong}
                data={data} />
      </div>
    </div>
  );
}

export default App;
