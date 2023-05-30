import React from 'react'
import { IconTypes } from './types'

function Mail({ width = 24, height = 24, color = "black", className = "" }: IconTypes) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} height={height} viewBox="0 -960 960 960" width={width}><path fill={color} d="M80-160v-640h800v640H80Zm400-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 80Z" /></svg>
    )
}

export default Mail