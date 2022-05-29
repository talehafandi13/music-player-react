import React from 'react'
import Header from './Header'
import Player from './Player'



const Main = ({mainRef, libraryToggle}) => {
  return (
    <div ref={mainRef} className="border w-1/2 m-auto">
        <Header libraryToggle={libraryToggle} />
        <Player />
    </div>
  )
}

export default Main