import React from 'react'
import {getMusics} from '../data/data'

const Player = () => {
    const data = getMusics();

  return (
    <div className="w-full text-center">
        <img src={data[0].cover} alt="cover" 
             className="w-1/2 rounded-full m-auto"/>
        <h1 className="text-xl font-semibold my-4">Random Name</h1>
        <h3 className="text-sm">Random Name</h3>
    </div>
  )
}

export default Player