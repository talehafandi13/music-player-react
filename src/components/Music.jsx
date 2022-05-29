import React from 'react'

const Music = ({song, index, setCurrentSong}) => {
  // console.log(key);
  
  function songToggle() {
    setCurrentSong(song);
  }

  return (
    <div onClick={songToggle} key={song.id} className="flex w-80 items-center gap-5 py-4 border hover:bg-slate-100">
        <img src={song.cover} alt="music cover" 
             className="w-24" />
        <div>
          <h1 className="text-xl"> {song.name} </h1>
          <h4 className="text-sm"> {song.artist} </h4>
        </div>
    </div>
  )
}

export default Music