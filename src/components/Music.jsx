import React from 'react'

const Music = ({cover, song, artist, id }) => {
  // console.log(key);
  return (
    <div key={id} className="flex w-80 items-center gap-5 py-4 border hover:bg-slate-100">
        <img src={cover} alt="music cover" 
             className="w-24" />
        <div>
          <h1 className="text-xl"> {song} </h1>
          <h4 className="text-sm"> {artist} </h4>
        </div>
    </div>
  )
}

export default Music