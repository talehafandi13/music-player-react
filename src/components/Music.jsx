import React from 'react'
import {getMusics} from '../data/data'


const Music = ({song, index, setCurrentIndex, setCurrentSong}) => {
  // console.log(key);
  const data = getMusics();
  
  function songToggle() {
    setCurrentSong(data[index]);
    setCurrentIndex(index);
  }

  return (
    <div onClick={songToggle} key={data[index].id} className="flex w-80 items-center gap-5 py-4 border hover:bg-slate-100">
        <img src={data[index].cover} alt="music cover" 
             className="w-24" />
        <div>
          <h1 className="text-xl"> {data[index].name} </h1>
          <h4 className="text-sm"> {data[index].artist} </h4>
        </div>
    </div>
  )
}

export default Music