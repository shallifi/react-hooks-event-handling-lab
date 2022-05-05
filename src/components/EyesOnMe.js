// Code EyesOnMe Component Here
import React from 'react'
import { useState } from "react"

function EyesOnMe() {
    function handleEyes(){
        console.log("Good!")
    }
    function handleFocus(){
        console.log("Hey! Eyes on me!")
    }
  return (
    <button onFocus={handleEyes} onBlur={handleFocus} >Eyes on me</button>
  )
}

export default EyesOnMe