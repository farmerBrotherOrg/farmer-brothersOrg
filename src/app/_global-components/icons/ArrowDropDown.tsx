import React from 'react'
import { IconTypes } from './types'

function ArrowDropDown({ width = 24, height = 24, color = "black", className = "" }: IconTypes) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} height={height} viewBox="0 -960 960 960" width={width}><path fill={color} d="M459-381 332-508q-14-14-6.5-32.5T353-559h254q20 0 27.5 18.5T628-508L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z" /></svg>
    )
}

export default ArrowDropDown