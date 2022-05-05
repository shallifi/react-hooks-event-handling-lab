// Code Keypad Component Here
import React from 'react'
import { useState } from 'react'

  
function Keypad() {
    
    function handleChangeEvent()  {
        console.log("Entering password...")
    }
  return (
      <div>Keypad
          <input type="password" onChange={handleChangeEvent} />

        </div>
    )
}

export default Keypad