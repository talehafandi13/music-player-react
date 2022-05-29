import './App.css';
import Library from './components/Library'
import Main from './components/Main';
import React, {useState, useRef} from 'react';



function App() {
  const [currentSong, setCurrentSong] = useState(null);


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
                setCurrentSong={setCurrentSong} />
                
      <Main     mainRef={mainRef} 
                libraryToggle={libraryToggle} 
                currentSong={currentSong} 
                setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
