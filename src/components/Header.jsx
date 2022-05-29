import React from 'react'
import {IoMusicalNotes} from 'react-icons/io5'
const Header = ({libraryToggle}) => {
  return (
    <div className="flex justify-between px-10">
        <h1 className="font-semibold text-2xl">Waves</h1>
        <div onClick = {libraryToggle} className="bg-gray-700 text-white px-2 py-1 flex items-center">Library <IoMusicalNotes /> </div>
    </div>
  )
}

export default Header